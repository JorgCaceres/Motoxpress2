import { Component, OnInit, Input } from '@angular/core';
import { Recogida } from 'src/app/models/recogida.model';

@Component({
  selector: 'app-recogida',
  templateUrl: './recogida.component.html',
  styleUrls: ['./recogida.component.scss'],
})
export class RecogidaComponent implements OnInit {

  fallbackImage = 'assets/imgs/1.jpg';
  @Input() recogida: Recogida;

  constructor() { }

  ngOnInit() {}

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }

  onImgError(event) {
    event.target.src = this.fallbackImage;
  }

}
