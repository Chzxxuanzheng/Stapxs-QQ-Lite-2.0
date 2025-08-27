import express from 'express'
import request from 'request'

const app = express()

app.get('/proxy', (req, res) => {
    const targetUrl = req.query.url
    if (!targetUrl) {
        return res.status(400).send('Missing url parameter')
    }

    // 设置 CORS 头
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.set('Access-Control-Allow-Headers', 'Content-Type')

  // 代理请求
    request(targetUrl)
        .on('error', err => res.status(500).send('Proxy error: ' + err.message))
        .pipe(res)
})

const port = 4000
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`CORS Proxy server running at http://localhost:${port}/proxy?url={url}`)
})
