import { Address } from "./address.model";
import { Item } from "./item.model";
import { Recogida } from "./recogida.model";

export class Order {
    constructor(
        public address: Address,
        public recogida: Recogida,
        public recogida_id: string,
        public order: Item[],
        public total: number,
        public grandTotal: number,
        public deliveryCharge: number,
        public status: string,
        public time: string,
        public paid: string,
        public id?: string,
        public uid?: string,
        public instruction?: string,
        public usuarioId?: string,
        public rider?: string,
        public cordenas_entrega?: string,
    ) {}
}