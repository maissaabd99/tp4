import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})


export class MaterielComponent implements OnInit {
  @Input() tab : Tableau;
  x:String="";
  changer(x:String){
    x = "reparé";
  }

  constructor() { }
  ngOnInit() {
  }
}
  export class Tableau
{
 
 private _nom: String;
 private _reference: String;
 private _image: String;
 private _prix:number;
 private _repare:String;
 
 constructor(val1: String, val2: String, val3:String, val4:number, val5:String)
 {
 this._nom = val1;
 this._reference= val2;
 this._image = val3;
 this._prix= val4;
 this._repare= val5;
 }
 // Définition de l'accesseur de l'attribut _nomAttribut1
 public get nom(): String{
 return this._nom;
 }
 public get reference(): String{
 return this._reference;
 }

 public get image(): String{
 return this._image;
 }

    public get prix(): number{
      return this._prix;
      }

      public get repare(): String{
        return this._repare;
        }

}
