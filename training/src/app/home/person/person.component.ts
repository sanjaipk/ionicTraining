import { ChangeDetectionStrategy,Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent implements OnInit, OnChanges {
@Input() person:string ='';
  constructor() { }
 ngOnChanges(){

}
  ngOnInit() {}

}
