import { Injectable } from '@angular/core';
import { apiEndPoints } from '../../index';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  getUsers() {
    return this.http.get('https://bumagi-frontend-test.herokuapp.com/users?status=1')
  }

}
