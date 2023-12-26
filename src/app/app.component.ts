import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CONFIG } from 'src/assets/setup';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  globalTagId: string = '';
  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.globalTagId = CONFIG.googleTagManagerKey;
    this.setupGTagConfig();
    this.gSiteTagsTracking();
  }

  setupGTagConfig() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', this.globalTagId, {
            'page_path': event.urlAfterRedirects
          }
        );
      }
    })
  }

  gSiteTagsTracking() {
    // register google tag manager
    const gTagManagerScript = document.createElement('script');
    gTagManagerScript.async = true;
    gTagManagerScript.src = `https://www.googletagmanager.com/gtag/js?id=${this.globalTagId}`;
    document.head.appendChild(gTagManagerScript);

    // register google site tag
    const gaScript = document.createElement('script');
    gaScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${this.globalTagId}');
    `;
    document.head.appendChild(gaScript);
  }
}
