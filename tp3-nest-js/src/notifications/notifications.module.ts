import { forwardRef, Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { OrdersModule } from 'src/orders/orders.module';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [CoreModule,OrdersModule],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}

