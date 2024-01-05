import { Component, OnInit } from '@angular/core';
import { gSiteTagsService } from 'src/app/service/ggtag.service';
import { CONFIG } from 'src/assets/setup';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  globalTagId;
  loading: boolean = false;
  constructor(
    private _gSiteTagsService: gSiteTagsService,
  ) { 
    this.globalTagId = CONFIG.googleTagManagerKey;
  }

  ngOnInit(): void {
    this.trackingTagsGA()
  }

  trackingTagsGA() {
    this._gSiteTagsService.eventEmitter("header",
    {
      allow_custom_scripts: true,
      send_to: `${this.globalTagId}/cairn0/theca003+standard`
    })
  }

}
