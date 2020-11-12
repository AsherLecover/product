import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Get('all')
    public async getProducts(): Promise<Product[]> {

        const products = await this.productService.getProducts();
        return products;

        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN);
    }

    @Post()
    createProduct(
        @Body(ValidationPipe) products: CreateProductDTO ){
            console.log('user:', products);
            return this.productService.createProduct(products)
    }

    @Get('/:id')
    getProduct(
        @Param('id', ParseIntPipe) id: number){
            return this.productService.getProduct(id)
    }

    @Patch('/:id')
    editProduct(
        @Param('id', ParseIntPipe) id: number,
        @Body(ValidationPipe) product: CreateProductDTO
    ){
        return this.productService.editProduct(id, product)
    }

    @Delete('/:id')
    deleteProduct(@Param('id', ParseIntPipe) id: number,
    ){
        console.log('from delete controler', id);

        return this.productService.deleteProduct(id)
    }

   


}
