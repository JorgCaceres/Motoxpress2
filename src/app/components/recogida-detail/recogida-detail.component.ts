import { Component, OnInit, Input } from '@angular/core';
import { Recogida } from 'src/app/models/recogida.model';

@Component({
  selector: 'app-recogida-detail',
  templateUrl: './recogida-detail.component.html',
  styleUrls: ['./recogida-detail.component.scss'],
})
export class RecogidaDetailComponent implements OnInit {

  @Input() data: Recogida;
  @Input() isLoading;

  constructor() { }

  ngOnInit() {}

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }

}
