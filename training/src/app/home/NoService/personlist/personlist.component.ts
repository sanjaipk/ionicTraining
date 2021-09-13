import { ChangeDetectionStrategy, OnChanges, Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonlistComponent implements OnInit,OnChanges {

  personList: string[] = ['p1','p2','p3'];
  @Input() persons :string;

  constructor() {

  }

  ngOnChanges(){
    if(this.persons !== ''){
    this.personList.push(this.persons);
    }
  }

  ngOnInit() {
    //this.personList = this.prsService.personList;
  }

}
