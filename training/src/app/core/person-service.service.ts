import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  personsSubject = new Subject<string[]>();
  personList: string[] = ['tara', 'amy', 'jim'];
  constructor(private http: HttpClient) { }
  addPerson(name: string) {
    this.personList.push(name);
    console.log(this.personList);
    this.personsSubject.next(this.personList);
  }
  removePerson(name: string) {
    console.log('name tobe removed', name);
    this.personList = this.personList.filter(person => {
      return person !== name;
    })
    console.log(this.personList);
    this.personsSubject.next(this.personList);
  }
  fetchPersons() {
    this.http.get<any>('https://swapi.dev/api/people/')
    .pipe(map(res => {
        return res.results.map(char => char.name);
      })
    ).subscribe(transfomedRes => {
      console.log(transfomedRes);
      this.personsSubject.next(transfomedRes);

    })
  }
}
