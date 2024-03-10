import { Component } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-button-reset',
  templateUrl: './button-reset.component.html',
  styleUrl: './button-reset.component.scss'
})
export class ButtonResetComponent {

  constructor(private state: AppStateService){}

  resetButton(): void{
    this.state.resetSetState(true);
  }
}
