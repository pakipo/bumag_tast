import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  message,
  ApiRequestService
} from '../../../index'

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.scss']
})
export class FormEntryComponent implements OnInit {
  passwordHide: boolean = true;
  formEntery!: FormGroup;
  errMess: any = message;
  authorization: boolean = false
  constructor(
    private fb: FormBuilder,
    private apiService: ApiRequestService,
    private router: Router

  ) { }


  ngOnInit() {
    this.formEntery = this.fb.group({
      "userName": ['', [Validators.required]],
      "password": ['', [Validators.required]]
    });
  }

  submitFormEntery(form: FormGroup) {
   
    if (form.status === 'INVALID') {
      for (let control in form.controls) {
        form.controls[control].markAsTouched();
      }
    } else {
     
      this.apiService.autCheck({ login: form.get('userName')?.value, password: form.get('password')?.value }).subscribe(res => {
        let aut = res as { message: string }
        console.log(aut)
        if (aut.message === 'ok') this.router.navigate(['userList'])
      },
        err => {this.authorization = true }
      )
    }
   
  }

  errMessage(form: FormGroup, fildName: string) {
    return this.errMess[fildName][Object.keys(form.get(fildName)?.errors!)[0]]
  }


  enterKey(e: any, form: FormGroup) {
    if (e.code === 'Enter') this.submitFormEntery(form)
  }
}
