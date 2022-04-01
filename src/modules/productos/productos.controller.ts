import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { UpdateProductoDto } from './dto';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './producto.entity';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productosService: ProductosService){ }

    @Get()
    getProductos(@Query() filterQuery): Producto[] {
        const { searchTerm, orderBy } = filterQuery;
        
        return this.productosService.getProductos();
    }

    @Get(':id')
    getProducto(@Param('id') id: string): Producto {        
        return this.getProducto(id);
    }

    @Post()    
    createProducto(@Body() message: CreateProductoDto): void {  
        console.log(message instanceof CreateProductoDto);
        return this.productosService.createProducto(message);     
    }

    @Patch(':id')
    updateProducto(@Param('id') id: string, @Body('message') producto: UpdateProductoDto): Producto {
        return this.productosService.updateProducto(id, producto);
    }

    @Delete(':id')
    removeProducto(@Param('id') id: string): void {
        return this.productosService.removeProducto(id);
    }

}
