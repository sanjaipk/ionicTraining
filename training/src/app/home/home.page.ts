import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
text ="hello boss!";
personslst: string="";
  constructor() {}
  onTxtChanged(){
    this.text ="hello bosses!!";
  }
  onPersonCreated(personName: string){
    if(personName !== ''){
    this.personslst = personName.toUpperCase();
  }
}
}
