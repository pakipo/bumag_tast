
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User, } from '../../index'

@Injectable({
  providedIn: 'root'
})
export class FakeAPIService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let users: any[] = [
      new User(1, 'ava.jpg', 'Иван', 'Иванов', 'Иванович', 0, 1000.569, new Date(2022,1,24)),
      new User(2, 'ava.jpg', 'Иван1', 'Иванов', 'Иванович', 1, 1000, new Date(2022, 0, 24)),
      new User(3, 'ava.jpg', 'Иван2', 'Иванов', 'Иванович', 2, 1000, new Date(2022, 1, 10)),
      new User(4, 'ava.jpg', 'Иван3', 'Иванов', 'Иванович', 0, 1000, new Date(2022, 1, 25)),
      new User(5, 'ava.jpg', 'Иван4', 'Иванов', 'Иванович', 1, 1000, new Date(2022, 1, 25,10,0)),
      new User(6, 'ava.jpg', 'Иван5', 'Иванов', 'Иванович', 2, 1000, new Date(2022, 1, 25, 18, 0)),
      new User(7, 'ava.jpg', 'Иван6', 'Иванов', 'Иванович', 0, 1000, new Date()),
      new User(8, 'ava.jpg', 'Иван7', 'Иванов', 'Иванович', 1, 1000, new Date()),
      new User(9, 'ava.jpg', 'Иван8', 'Иванов', 'Иванович', 2, 1000, new Date()),
      new User(10, 'ava.jpg', 'Иван9', 'Иванов', 'Иванович', 0, 1000, new Date()),
      new User(11, 'ava.jpg', 'Иван10', 'Иванов', 'Иванович', 1, 1000, new Date()),
      new User(12, 'ava.jpg', 'Иван11', 'Иванов', 'Иванович', 2, 1000, new Date()),
      new User(13, 'ava.jpg', 'Иван12', 'Иванов', 'Иванович', 0, 1000, new Date()),
      new User(14, 'ava.jpg', 'Иван13', 'Иванов', 'Иванович', 1, 1000, new Date()),
      new User(15, 'ava.jpg', 'Иван14', 'Иванов', 'Иванович', 2, 1000, new Date()),
      new User(16, 'ava.jpg', 'Иван15', 'Иванов', 'Иванович', 0, 1000, new Date()),
      new User(17, 'ava.jpg', 'Иван16', 'Иванов', 'Иванович', 1, 1000, new Date()),
      new User(18, 'ava.jpg', 'Иван17', 'Иванов', 'Иванович', 2, 1000, new Date()),
      new User(19, 'ava.jpg', 'Иван18', 'Иванов', 'Иванович', 0, 1000, new Date()),
      new User(20, 'ava.jpg', 'Иван19', 'Иванов', 'Иванович', 1, 1000, new Date()),
      new User(21, 'ava.jpg', 'Иван21', 'Иванов', 'Иванович', 2, 1000, new Date()),
      new User(22, 'ava.jpg', 'Иван22', 'Иванов', 'Иванович', 0, 1000, new Date()),
      new User(23, 'ava.jpg', 'Иван23', 'Иванов', 'Иванович', 1, 1000, new Date()),
      new User(24, 'ava.jpg', 'Иван24', 'Иванов', 'Иванович', 2, 1000, new Date()),
      new User(25, 'ava.jpg', 'Иван25', 'Иванов', 'Иванович', 0, 1000, new Date()),
      new User(26, 'ava.jpg', 'Иван26', 'Иванов', 'Иванович', 1, 1000, new Date()),
      new User(27, 'ava.jpg', 'Иван27', 'Иванов', 'Иванович', 2, 1000, new Date()),
      new User(28, 'ava.jpg', 'Иван28', 'Иванов', 'Иванович', 0, 1000, new Date()),
      new User(29, 'ava.jpg', 'Иван29', 'Иванов', 'Иванович', 1, 1000, new Date()),
      new User(20, 'ava.jpg', 'Иван30', 'Иванов', 'Иванович', 2, 1000, new Date()),

    ];
    return { users }
  }
}
