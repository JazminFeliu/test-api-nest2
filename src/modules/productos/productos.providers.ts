import { Connection } from 'mongoose';
import { ProductoSchema } from './schemas/producto.schema';

export const productosProviders = [
  {
    provide: 'PRODUCTO_MODEL',
    useFactory: (connection: Connection) => connection.model('Producto', ProductoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];