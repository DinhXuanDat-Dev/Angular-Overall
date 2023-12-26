import { Injectable } from '@angular/core';

declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})

export class GsiteTagsService {

  public emitterBookingConfirm( 
    eventName: string, 
    allowCustomScripts: boolean, 
    sentTo: string,
    revenue?: number,  
    orderID?: string,
    experienceName?: string,
    noOfTicket?: string,
    totalRevenue?: number,
    subTotal?: number
  ) {
    gtag('event', eventName, {
      allow_custom_scripts: allowCustomScripts,
      sent_to: sentTo,
      value: revenue,
      transaction_id: orderID,
      experienceName: experienceName,
      noOfTicket: noOfTicket,
      totalRevenue: totalRevenue,
      subTotal: subTotal
    })
  }

  public eventEmitter(
    eventName: string,
    params: object = {}) {
    gtag('event', eventName, params);
  }
}

