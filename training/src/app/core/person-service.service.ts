import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  personsSubject = new Subject<string[]>();
  personList: string[] =['tara','amy','jim'];
  constructor() { }
  addPerson(name:string){
    this.personList.push(name);
    console.log(this.personList);
    this.personsSubject.next(this.personList);
  }
  removePerson(name:string){
    console.log('name tobe removed', name);
    this.personList = this.personList.filter(person=>{
      return person !== name;
    })
    console.log(this.personList);
    this.personsSubject.next(this.personList);
  }
}
