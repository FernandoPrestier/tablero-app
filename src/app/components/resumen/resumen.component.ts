import { Component } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.scss'
})
export class ResumenComponent {

  data :any = []

  constructor(private state: AppStateService){
    this.state.dataSelected.subscribe(dataState => {
      this.data = dataState
      console.log("=== Emit 🐢");
    })
  }


}
