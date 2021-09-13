import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonServiceService } from 'src/app/core/person-service.service';

@Component({
  selector: 'app-plist',
  template: '<p *ngIf="isFetching === true">Loading....</p><div *ngIf="isFetching=== false"><p *ngFor="let person of plist">{{person}}</p></div>',
  styleUrls: ['./plist.component.scss'],
})
export class PlistComponent implements OnInit, OnDestroy {
  private perSubscription: Subscription;
  plist : string[] = ['appa','amma','mama','athai'];
  isFetching:boolean = true;
  constructor(private plistsvc:PersonServiceService) { }

  ngOnInit() {
    this.plist = this.plistsvc.personList;

    this.perSubscription = this.plistsvc.personsSubject.subscribe(prs =>{
      this.plist = prs;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.plistsvc.fetchPersons();
  }

  ngOnDestroy(){
    this.perSubscription.unsubscribe();
  }

}
