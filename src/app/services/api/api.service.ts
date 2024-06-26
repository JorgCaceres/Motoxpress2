import { Injectable } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import { Order } from 'src/app/models/order.model';
import { Recogida } from 'src/app/models/recogida.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import * as geofirestore from 'geofirestore';
import { Banner } from 'src/app/models/banner.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  radius = 20;// in km
  firestore = firebase.firestore();
  GeoFirestore = geofirestore.initializeApp(this.firestore);

  recogidas: Recogida[] = [];
  allRecogidas: Recogida[] = [];
  recogidas1: Recogida[] = [];  
  categories: Category[] = [];
  allItems: Item[] = [];
  addresses: Address[] = [];
  orders: Order[] = [];

  constructor(
    private adb: AngularFirestore
  ) {}

  collection(path, queryFn?) {
    return this.adb.collection(path, queryFn);
  }

  geoCollection(path) {
    return this.GeoFirestore.collection(path);
  }

  randomString() {
    const id = Math.floor(100000000 + Math.random() * 900000000);
    return id.toString();
  }

  // banner apis
  async addBanner(data) {
    try {
      const id = this.randomString();
      // data.id = id;
      const bannerData = new Banner(
        id, 
        data.banner, 
        data.status
      );
      let banner = Object.assign({}, bannerData);
      delete banner.res_id;
      await this.collection('banners').doc(id).set(banner);
      return true;
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  async getBanners() {
    try {
      const banners: Banner[] = await this.collection('banners').get().pipe(
        switchMap(async(data: any) => {
          let bannerData = await data.docs.map(element => {
            const item = element.data();
            return item;
          });
          console.log(bannerData);
          return bannerData;
        })
      ).toPromise();
      console.log(banners);
      return banners;
    } catch(e) {
      throw(e);
    }
  }

  // city apis
  async getCities() {
    try {
      const cities = await this.collection('cities').get().pipe(
        switchMap(async(data: any) => {
          let cityData = await data.docs.map(element => {
            let item = element.data();
            item.uid = element.id;
            return item;
          });
          console.log(cityData);
          return cityData;
        })
      ).toPromise();
      console.log(cities);
      return cities;
    } catch(e) {
      throw(e);
    }
  }

  //  recogida apis
  async addRecogida(data: any, uid) {
    try {
      let recogida = Object.assign({}, data);
      delete recogida.g;
      delete recogida.distance;
      console.log(recogida);
      const response = await this.geoCollection('recogidas').doc(uid).set(recogida);
      return response;
    } catch(e) {
      throw(e);
    }
  }

  async getRecogidas() {
    try {
      const recogidas = await this.collection('recogidas').get().pipe(
        switchMap(async(data: any) => {
          let recogidaData = await data.docs.map(element => {
            const item = element.data();
            return item;
          });
          console.log(recogidaData);
          return recogidaData;
        })
      ).toPromise();
      console.log(recogidas);
      return recogidas;
    } catch(e) {
      throw(e);
    }
  }

  async getRecogidaById(id): Promise<any> {
    try {
      const recogida = (await (this.collection('recogidas').doc(id).get().toPromise())).data();
      console.log(recogida);
      return recogida;
    } catch(e) {
      throw(e);
    }
  }

  async getOrdenById(usuarioId, id): Promise<any> {
    try {
      const orden = (await (this.collection('orders').doc(usuarioId).collection('all').doc(id).get().toPromise())).data();
      console.log(orden);
      return orden;
    } catch(e) {
      throw(e);
    }
  }

  async getNearbyRecogidas(lat, lng): Promise<any> {
    try {
      const center = new firebase.firestore.GeoPoint(lat, lng);
      const radius = this.radius;
      const data = await (await this.geoCollection('recogidas').near({ center, radius: this.radius })
      .get()).docs.sort((a, b) => a.distance - b.distance).map(element => {
        let item: any = element.data();
        item.id = element.id;
        item.distance = element.distance;
        return item;
      });
      return data;
    } catch(e) {
      throw(e);
    }
  }

  // categories
  async getRecogidaCategories(uid) {
    try {
      const categories = await this.collection(
        'categories',
        ref => ref.where('uid', '==', uid)
      ).get().pipe(
        switchMap(async(data: any) => {
          let categoryData = await data.docs.map(element => {
            const item = element.data();
            return item;
          });
          console.log(categoryData);
          return categoryData;
        })
      ).toPromise();
      console.log(categories);
      return categories;
    } catch(e) {
      throw(e);
    }
  }

  async addCategories(categories, uid) {
    try {
      categories.forEach(async(element) => {
        const id = this.randomString();
        const data = new Category(
          id,
          element,
          uid
        );
        const result = await this.collection('categories').doc(id).set(Object.assign({}, data));        
      });
      return true;
    } catch(e) {
      throw(e);
    }
  }

  // menu
  async addMenuItem(data) {
    try {
      const id = this.randomString();
      const item = new Item(
        id,
        data.recogida_id,
        this.firestore.collection('categories').doc(data.category_id),
        data.cover,
        data.name,
        data.description,
        data.price,
        data.veg,
        data.status,
        false,
        0
      );
      let itemData = Object.assign({}, item);
      delete itemData.quantity;
      console.log(itemData);
      const result = await this.collection('menu').doc(data.recogida_id).collection('allItems').doc(id).set(itemData);
      return true;
    } catch(e) {
      throw(e);
    }
  }

  async getRecogidaMenu(uid) {
    try {
      const itemsRef = await this.collection('menu').doc(uid)
          .collection('allItems', ref => ref.where('status', '==', true));
      const items = itemsRef.get().pipe(
        switchMap(async(data: any) => {
          let itemData = await data.docs.map(element => {
            let item = element.data();
            item.category_id.get()
            .then(cData => {
              item.category_id = cData.data();
            })
            .catch(e => { throw(e); });
            return item;
          });
          console.log(itemData);
          return itemData;
        })
      )
      .toPromise();
      console.log(items);
      return items;
    } catch(e) {
      throw(e);
    }
  }

}