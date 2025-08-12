import { z } from 'zod';

export const ZInt32 = z.number().int().min(-2147483648).max(2147483647)
    .meta({ scalarType: 'int32' });
export const ZInt64 = z.number().int()
    .meta({ scalarType: 'int64' });
export const ZBoolean = z.boolean()
    .meta({ scalarType: 'boolean' });
export const ZString = z.string()
    .meta({ scalarType: 'string' });
