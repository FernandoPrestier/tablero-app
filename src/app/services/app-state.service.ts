import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  dataSelected : BehaviorSubject<any> = new BehaviorSubject([]);
  isReset : BehaviorSubject<boolean> = new BehaviorSubject(false);

  addData(item:any): void {    
    if ( this.existItem(item) ) return;

    this.dataSelected.next([...this.dataSelected.value,item])
  }

  removeData(item: any): void {
    let data = this.getData().filter((element:any) => 
      element.name != item.name
    )
    this.dataSelected.next(data)
  }

  getData(): []{
    return this.dataSelected.value;
  }

  existItem(item:any): boolean{
    return this.getData().findIndex((element:any) => {
      return element.name === item.name
    }) >= 0;
  }

  resetSetState(state:boolean):void {
    this.isReset.next(state);
  }
}
