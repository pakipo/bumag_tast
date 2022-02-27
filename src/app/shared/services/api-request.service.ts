import { Injectable } from '@angular/core';
import { apiEndPoints } from '../../index';
import { HttpClient } from '@angular/common/http';

import { User } from '../classes/user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  path: string = 'https://bumagi-frontend-test.herokuapp.com'

  constructor(
    private http: HttpClient
  ) { }

  autCheck(enteryObj: { "login": string, "password": string }) {
    return this.http.post(this.path + apiEndPoints.auth, enteryObj)
  }
  //ИЗМЕНИТЬ PATH ДЛЯ БЭКА
  getAllUsers() {
    return this.http.get('api/users')

  }

  //ИЗМЕНИТЬ PATH ДЛЯ БЭКА
  getActiveUsers() {
    return this.http.get('api/users').pipe(map(res => {
      let arr = res as User[]
      let resArr = arr.filter(user => user.status === 0)
      return resArr
    }))
  }
  //ИЗМЕНИТЬ PATH ДЛЯ БЭКА
  getBlockUsers() {
    return this.http.get('api/users').pipe(map(res => {
      let arr = res as User[]
      let resArr = arr.filter(user => user.status === 2)
      return resArr
    }))
  }

  //ИЗМЕНИТЬ PATH ДЛЯ БЭКА
  updateUser(user: User) {
    return this.http.put('api/users', user)
  }
}
