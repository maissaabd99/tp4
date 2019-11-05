import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coloriage',
  templateUrl: './coloriage.component.html',
  styleUrls: ['./coloriage.component.css']
})
export class ColoriageComponent implements OnInit {
  tab=['Arial','Calibri','Times New Roman'];
  couleur:string="";
  police:string="";
  theme:string;
  poly:string="Arial";
  coul:string="red";
  onchange(){
    this.couleur=this.coul;
    this.police=this.poly;
  }
  



  constructor() { }

  ngOnInit() {
  }

}
