import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

  @Input() btnClass? : string;
  @Input() btnName? : string;
  @Input() status? : boolean;

  @Output() onClickEvent = new EventEmitter<any>();

  onClick(){
    this.onClickEvent.emit('My-Btn Component Click');
  }
}
