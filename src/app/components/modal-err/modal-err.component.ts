import { Component, OnInit, Input, Output, EventEmitter,Renderer2 } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ImodalObj, Emode, Estatus } from '../../index'
@Component({
  selector: 'app-modal-err',
  templateUrl: './modal-err.component.html',
  styleUrls: ['./modal-err.component.scss']
})
export class ModalErrComponent implements OnInit {
  formEdit!: FormGroup

  constructor(
    private fb: FormBuilder,
    private render: Renderer2
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
    console.log(form)
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
