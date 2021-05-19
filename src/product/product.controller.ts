import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

  constructor(private productService: ProductService) {
  }

  @Get()
  async all() {
    return this.productService.all()
  }

  @Post()
  async create(@Body() data) {
    return this.productService.create(data)
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.productService.get(id)
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data) {
    return this.productService.update(id, data)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id)
  }
}
