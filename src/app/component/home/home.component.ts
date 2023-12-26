import { Component, OnInit } from '@angular/core';
import { GsiteTagsService } from 'src/app/service/ggtag.service';
import { CONFIG } from 'src/assets/setup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  globalTagId;
  constructor(
    private _gSiteTagsService: GsiteTagsService,
  ) { 
    this.globalTagId = CONFIG.googleTagManagerKey;
  }

  ngOnInit(): void {
    this.trackingTagsGA();
  }

  trackingTagsGA() {
    const revenue = 999;
    this._gSiteTagsService.eventEmitter("purchase", {
      allow_custom_scripts: true,
      value: revenue,
      transaction_id: 'CA-1290',
      experienceName: 'High land',
      noOfTicket: 'no1',
      totalRevenue: 9999,
      subTotal: 999,
      send_to: `${this.globalTagId}/cairn-s/theca0+transactions`
    })
  }

}
