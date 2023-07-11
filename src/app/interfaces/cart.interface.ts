import { Address } from "../models/address.model";
import { Item } from "../models/item.model";
import { Recogida } from "../models/recogida.model";

export interface Cart {
    recogida: Recogida;
    items: Item[];
    totalItem?: number;
    totalPrice?: number;
    grandTotal?: number;
    location?: Address;
    deliveryCharge?: number;
    from?: string;
    recogida_id?: Address;
}