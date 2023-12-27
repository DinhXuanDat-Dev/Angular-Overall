import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: 'base-component',
  template: ``
})
export abstract class BaseComponent implements OnDestroy {
  private _destroy$!: Subject<any>;

  get destroy$(): Subject<any>{
    !this._destroy$ && (this._destroy$ = new Subject());
    return this._destroy$;
  }

  ngOnDestroy(){
    if(this._destroy$){
      this._destroy$.next(true);
      this._destroy$.complete();
    }
  }
}
