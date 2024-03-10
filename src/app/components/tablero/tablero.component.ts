import { Component } from '@angular/core';
import { DEFAULT_DATA } from './data-tablero'
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.scss'
})
export class TableroComponent {
  data = [... DEFAULT_DATA];

  constructor(private state: AppStateService){
    this.state.isReset.subscribe(state => this.isReset(state))
  }

  addActive(item:any):void {
    item.isSelected = !item.isSelected;
    
    if(!item.isSelected) {
      this.state.removeData(item);
      console.log("=== 🐢Remove : ", this.state.getData());
      return;
    }
    
    this.state.addData(item);

    console.log("=== 🐢Add: ", this.state.getData());
  }

  isReset(flag:boolean):void {
    if(!flag) return;
    this.data.map(element => element.isSelected = false);
    this.state.resetSetState(false);
    this.state.dataSelected.next([])
  }
}