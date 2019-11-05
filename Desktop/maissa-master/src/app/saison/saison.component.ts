import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saison',
  templateUrl: './saison.component.html',
  styleUrls: ['./saison.component.css']
})
export class SaisonComponent implements OnInit {
  val:any;
  affiche(event:any){
    this.val=event.target.value;

  }

  constructor() { }

  ngOnInit() {
  }

}
