import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ImodalObj, Estatus, ApiRequestService } from '../../index'

@Component({
  selector: 'app-modal-err',
  templateUrl: './modal-err.component.html',
  styleUrls: ['./modal-err.component.scss']
})
export class ModalErrComponent implements OnInit {
  formEdit!: FormGroup

  constructor(
    private fb: FormBuilder,
    private apiService: ApiRequestService
  ) { }

  statusView: boolean = false;
  @Input('initObj') initObj!: ImodalObj;
  @Output('cancel') modalWiev = new EventEmitter()

  ngOnInit(): void {
    if (this.initObj.editObj) this.formInit()
  }

  formInit() {
    let user = this.initObj.editObj

    this.formEdit = this.fb.group({
      'name': [user?.name],
      'fname': [user?.fname],
      'mname': [user?.mname],
      'status': [Estatus[user!.status]]
    })
  }


  cancel(e: any) {
    this.modalWiev.emit(false)
  }

  submitForm(form: FormGroup) {
    let user: any = this.initObj.editObj!
    if (!form.pristine || Estatus[form.controls['status'].value] !== user.status) {
      for (let control in form.controls) {
        if (control === 'status' && Estatus[form.controls[control].value] !== user.status) {
          user[control] = Estatus[form.controls[control].value]
        }
        if (!form.controls[control].pristine) {
          user[control] = form.controls[control].value
        }
      }
      this.apiService.updateUser(user).subscribe()
    }

  }

  listStatusTogle() {
    this.statusView = !this.statusView
  }

  statusChoice(e: any) {
    let formStatus = this.formEdit.get('status')
    formStatus?.setValue(Estatus[Estatus[e.target.textContent as keyof typeof Estatus]])
    this.statusView = false;
  }

  listStatusClose() {
    this.statusView = false;
  }

}

