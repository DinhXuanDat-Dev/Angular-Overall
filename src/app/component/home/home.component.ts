import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';
import { Movies, MovieService } from 'src/app/@core/http/movie';
import { BaseComponent } from 'src/app/@core/libs/core/base/base-component';
import { GsiteTagsService } from 'src/app/service/ggtag.service';
import { CONFIG } from 'src/assets/setup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {
  globalTagId;
  userInput: string = '';
  onDebounceSearching$: Subject<any> = new Subject();
  movies!: Movies;
  loading: boolean = false;

  constructor(
    private _gSiteTagsService: GsiteTagsService,
    private _movieService: MovieService
  ) { 
    super();
    this.globalTagId = CONFIG.googleTagManagerKey;
    this.registerDebounceSearching();
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

  handleSelectAll(checked: boolean) {
    console.log('checked', checked);
    this.movies.Search?.forEach((item) => {
      item.Checked = checked;
    })
  }

  registerDebounceSearching() {
    this.onDebounceSearching$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(_ => {
        this.loading = true;
        return this._movieService.getMovies(this.userInput);
      }),
      takeUntil(this.destroy$),
    ).subscribe(res => {
      this.movies = res;
      console.log('movie', this.movies);
      this.loading = false;
      this.setPropsForListMovie(this.movies);
      console.log('movie af',this.movies);
      
    });
  }

  setPropsForListMovie(movies: Movies) {
    movies.Search?.forEach((item, index) => {
      item.Id = index;
      item.Checked = false;
    })
  }
}
