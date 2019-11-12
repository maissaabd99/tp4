import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  valeur:number; 
  onAfficher(event:number)
  {
   this.valeur = event;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
