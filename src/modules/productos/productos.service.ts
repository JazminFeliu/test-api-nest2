import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductoDto } from './dto';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './producto.entity';

@Injectable()
export class ProductosService {
    private productos: Producto[] = [
        {
            id: '1',
            message:"Este es el producto 1 🙃",
        },
    ];

    getProductos(): Producto[]{
        return this.productos;
    }

    getProducto(id: string): Producto {
        const producto = this.productos.find((item) => item.id === id);

        if(!producto){
            throw new NotFoundException();
        }

        return producto;
    }

    createProducto({message}: CreateProductoDto) {
        this.productos.push({
            id: (Math.floor(Math.random() * 2000) + 1 ).toString(),
            message,
        });
    }

    updateProducto(id: string, {message}: UpdateProductoDto) {
        const producto: Producto = this.getProducto(id);
        producto.message = message;

        return producto;
    }

    removeProducto(id: string) {
        const index = this.productos.findIndex((producto) => producto.id === id);
        if (index >= 0) {
            this.productos.splice(index,1);
        }
    }

}
