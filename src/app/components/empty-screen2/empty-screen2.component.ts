import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-screen2',
  templateUrl: './empty-screen2.component.html',
  styleUrls: ['./empty-screen2.component.scss'],
})
export class EmptyScreen2Component  implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {}

}
