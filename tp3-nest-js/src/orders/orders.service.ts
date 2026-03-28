import { forwardRef,Inject,Injectable } from '@nestjs/common';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class OrdersService {
  constructor(
    // @Inject(forwardRef(() => NotificationsService))
    private readonly notifications: NotificationsService,
  ) {}

  createOrder(orderDto: any) {
    console.log('Order created:', orderDto);

    if (this.notifications) {
      this.notifications.notify('order_created', { order: orderDto });
    }

    return { status: 'Order accepted', order: orderDto };
  }
}