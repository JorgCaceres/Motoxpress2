import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import db from 'src/environments/configfb';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent  implements OnInit {

  @Input() order: Order;
  @Output() reorder: EventEmitter<any> = new EventEmitter();
  @Output() help: EventEmitter<any> = new EventEmitter();
  userNamombre:any;

  constructor() {}

  ngOnInit() {
    this.getOrdenes()
  }



  async getOrdenes() {
    try {
      const userRef = db.collection('users').doc(this.order.usuarioId)
      console
     const [userSnapshot] = await Promise.all([ userRef.get()]);
      this.userNamombre = userSnapshot.get('name');
      
    } catch (e) {
    }
  }

}
