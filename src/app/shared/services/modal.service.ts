import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Emode, User} from '../../index';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalSubj = new BehaviorSubject(false)
  modalObjSubj = new BehaviorSubject({})


  constructor() { }

  modalTogle(mode: boolean) {
    this.modalSubj.next(mode)
  }

  openModal(mode: Emode, user?: User) {
    let obj = this.modalObjCreate(mode, user)
    this.modalObjSubj.next(obj)
    this.modalTogle(true)
  }

  modalObjCreate(modalMode: Emode, user?: User) {
    let initModalObj
    if (modalMode === 1) {
     initModalObj = {
        mode: modalMode,
        btnText: 'Понятно',
        message: {
          title: 'Ошибка соединения!',
          mess: 'Проверьте соединение с интернетом и повторите позже'
        }
      }
      return initModalObj
    } else {
     initModalObj = {
        mode: modalMode,
        btnText: 'Сохранить',
        editObj: user
      }
      return initModalObj
    }
  }

  closeModal() {
    this.modalTogle(false)
  }
}
