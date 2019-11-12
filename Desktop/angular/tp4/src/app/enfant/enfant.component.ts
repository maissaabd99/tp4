import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
  nombre:number = 25; //Nombre à faire passer au parent
  @Output() onChange= new EventEmitter<number>();
  onEnvoyer()
  {
   this.onChange.emit(this.nombre);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
