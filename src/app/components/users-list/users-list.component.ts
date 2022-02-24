import { Component, OnInit } from '@angular/core';
import { ApiRequestService, ImodalObj, Emode, Estatus } from '../../index';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  preload: boolean = false;
  modalErrview: boolean = false;
  initModalObj!: ImodalObj
  mode = Emode;
  // УДАЛИТЬ
  editableObject: any = {
    name: 'Иван',
    fname: 'Иванов',
    mname: 'Иванович',
    status: Estatus.активен
  }

  constructor(
    private apiService: ApiRequestService
  ) { }
  request = (() => {
    //счетчик дозвонов
    let counter = 0;
    let timer: any;
    return () => {
      this.apiService.getUsers().subscribe(res => {
        let data = res as any;
        this.preload = false
        if (timer) { clearTimeout(timer);}
      },
        error => {
          console.log(error)
          timer = setTimeout(() => {
            if (counter === 1) {
              clearTimeout(timer)
              this.modalObjCreate(Emode.alert)
              this.preload = false
            } else {
              this.request();
              counter++;
            }
          }, 1000);
        })
    }

  }).bind(this)()

  ngOnInit(): void {

    //this.preload = true;
    //this.request()
   
   
  }

  cancelModal(e: any) {
    this.modalErrview = false
  }

  modalObjCreate(modalMode: Emode) {
    if (modalMode === 1) {
      this.initModalObj = {
        mode: modalMode,
        btnText: 'Понятно',
        message: {
          title: 'Ошибка соединения!',
          mess: 'Проверьте соединение с интернетом и повторите позже'
        }
         
      }
      this.modalErrview = true;
    } else {

      this.initModalObj = {
        mode: modalMode,
        btnText: 'Сохранить',
        editObj: this.editableObject

      }
      this.modalErrview = true;
    }
  }
}

