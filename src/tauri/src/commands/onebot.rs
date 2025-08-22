use log::{info, error};
use once_cell::sync::Lazy;
use std::{collections::HashMap, sync::Mutex};
use tauri::{command, AppHandle, Emitter};
use tungstenite::protocol::frame::coding::CloseCode;
use serde_json::Value;

use crate::commands::utils::websocket_client::WebSocketClient;

static WS_CLIENT: Lazy<Mutex<Option<WebSocketClient>>> = Lazy::new(|| Mutex::new(None));

// @Stapx ai写的,要检查下有没有问题
#[command]
pub async fn onebot_connect(
    app_handle: AppHandle,
    url: &str,
) -> Result<(), String> {
    {
        let client = WS_CLIENT.lock().unwrap();
        if client.is_some() {
            info!("已有连接，跳过创建");
            let mut payload = HashMap::new();
            payload.insert("url", url.to_string());
            app_handle.emit("onebot:onopen", payload).unwrap();
            return Ok(());
        }
    }

    info!("正在连接到: {}", url);
    let url = url.to_string();

    let app_handle_open = app_handle.clone();
    let app_handle_msg = app_handle.clone();
    let app_handle_close = app_handle.clone();

    let ws_client = WebSocketClient::create(
        &url.clone(),
        move || {
            info!("连接成功: {}", &url);
            let mut payload = HashMap::new();
            payload.insert("url", url.clone());
            let _ = app_handle_open.emit("onebot:onopen", payload);
        },
        move |msg| {
            let _ = app_handle_msg.emit("onebot:onmessage", msg);
        },
        move |code: CloseCode, reason| {
            info!("连接已关闭：{} {:?}", code, reason);
            {
                let mut client = WS_CLIENT.lock().unwrap();
                *client = None;
            }
            let mut payload = HashMap::new();
            payload.insert("code", code.to_string());
            payload.insert("message", reason.to_string());
            let _ = app_handle_close.emit("onebot:onclose", payload);
        },
    )
    .await
    .map_err(|e| {
        error!("连接失败: {}", e);
        let mut payload = HashMap::new();
        payload.insert("code", 1000.to_string());
        payload.insert("message", e.to_string());
        let _ = app_handle.emit("onebot:onclose", payload);
        e.to_string()
    })?;

    let mut client = WS_CLIENT.lock().unwrap();
    *client = Some(ws_client);
    Ok(())
}

#[command]
pub fn onebot_send(data: &str) -> Result<(), String> {
    let client = WS_CLIENT.lock().unwrap();
    if let Some(ws_client) = &*client {
        ws_client.send(data).map_err(|e| e.to_string())
    } else {
        Err("WebSocketClient not initialized".to_string())
    }
}

#[command]
pub fn onebot_close(app_handle: AppHandle) -> Result<(), String> {
    let mut client = WS_CLIENT.lock().unwrap();
    if let Some(ws_client) = &*client {
        ws_client.close().map_err(|e| e.to_string())?;
        *client = None;

        info!("连接主动关闭");
        let mut payload = HashMap::new();
        payload.insert("code", 1000.to_string());
        payload.insert("message", "".to_string());
        let _ = app_handle.emit("onebot:onclose", payload);
        Ok(())
    } else {
        Err("WebSocketClient not initialized".to_string())
    }
}
// @Stapx ai写的,要检查下有没有问题
#[command]
pub async fn onebot_get(
    url: String,
    data: HashMap<String, Value>,
    header: HashMap<String, String>,
) -> Result<String, String> {
    let client = reqwest::Client::new();

    // 构建查询参数
    let mut query_params = Vec::new();
    for (key, value) in data {
        let value_str = match value {
            Value::String(s) => s,
            Value::Number(n) => n.to_string(),
            Value::Bool(b) => b.to_string(),
            _ => value.to_string().trim_matches('"').to_string(),
        };
        query_params.push((key, value_str));
    }

    // 构建请求
    let mut request = client.get(&url).query(&query_params);

    // 添加请求头
    for (key, value) in header {
        request = request.header(&key, &value);
    }

    // 发送请求
    let response = request.send().await.map_err(|e| {
        error!("GET 请求失败: {}", e);
        format!("GET 请求失败: {}", e)
    })?;

    // 检查响应状态
    if !response.status().is_success() {
        let status = response.status();
        return Err(format!("HTTP 请求失败: {}", status));
    }

    // 获取响应文本
    let text = response.text().await.map_err(|e| {
        error!("读取响应内容失败: {}", e);
        format!("读取响应内容失败: {}", e)
    })?;

    Ok(text)
}

// @Stapx ai写的,要检查下有没有问题
#[command]
pub async fn onebot_post(
    url: String,
    data: HashMap<String, Value>,
    header: HashMap<String, String>,
) -> Result<String, String> {
    let client = reqwest::Client::new();

    // 构建请求
    let mut request = client.post(&url);

    // 设置默认的 Content-Type 为 application/json
    request = request.header("Content-Type", "application/json");

    // 添加请求头
    for (key, value) in header {
        request = request.header(&key, &value);
    }

    // 设置请求体
    request = request.json(&data);

    // 发送请求
    let response = request.send().await.map_err(|e| {
        error!("POST 请求失败: {}", e);
        format!("POST 请求失败: {}", e)
    })?;

    // 检查响应状态
    if !response.status().is_success() {
        let status = response.status();
        return Err(format!("HTTP 请求失败: {}", status));
    }

    // 获取响应文本
    let text = response.text().await.map_err(|e| {
        error!("读取响应内容失败: {}", e);
        format!("读取响应内容失败: {}", e)
    })?;

    Ok(text)
}
