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

  getAllUsers() {
  return  this.http.get('api/users')
    
  }
 

  getActiveUsers() {
    return this.http.get('api/users').pipe(map( res => {
      let arr = res as User[]
      let resArr = []
      resArr.push(arr[0])
      resArr.push(arr[1])
      resArr.push(arr[2])
      return resArr
    }))
  }

  getBlockUsers() {
    return this.http.get('api/users').pipe(map (res => {
      let arr = res as User[]
      let resArr = []
      resArr.push(arr[0])
      resArr.push(arr[1])
      resArr.push(arr[2])
      resArr.push(arr[3])
      resArr.push(arr[4])
      resArr.push(arr[5])
      return resArr
    }))
  }


}
