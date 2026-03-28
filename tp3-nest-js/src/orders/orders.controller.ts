import { Controller, Post, Get, Body } from '@nestjs/common';

@Controller('orders') 
export class OrdersController {
  private orders: any[] = [];

  @Get()
  findAll() {
    console.log('[GET /orders]');
    return { message: 'Orders retrieved', orders: this.orders };
  }

  @Post()
  create(@Body() createOrderDto: any) {
    console.log('[POST /orders]', createOrderDto);
    this.orders.push(createOrderDto); 
    return { message: 'Order created', order: createOrderDto };
  }
}