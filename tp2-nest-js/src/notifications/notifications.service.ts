import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
    notify(event:string, playload:any){
        console.log('[Notify] ${event}', playload);
        return {ok:true};
    }
}
