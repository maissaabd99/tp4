import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

profils=["Admin","User","Visitor"];
profil="Visitor";

/*verfi:boolean=false;
test()
{
  if (this.profils[2].selected)
    this.verfi = true;

}*/
/*val:string;
sel(event:any){
 this.val = event.target.value;

}*/


  constructor() { }

  ngOnInit() {
  }

}
