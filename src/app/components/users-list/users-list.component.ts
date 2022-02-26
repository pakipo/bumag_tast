import { Component, OnInit } from '@angular/core';
import {
  ApiRequestService,
  ImodalObj,
  Emode,
  Estatus,
  User,
  AuxiliaryService,
  ModalService
} from '../../index';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersView!: Array<User>
  preload: boolean = false;
  //modalErrview: boolean = false;
  //initModalObj!: ImodalObj
  mode = Emode;
  status  = Estatus;
  imgPath: string = '../../../assets/img/'
  date: Date = new Date(2022, 1, 1, 18, 0)
  tabMode:'all'|'active'|'block' = 'all'

  constructor(
    private apiService: ApiRequestService,
    public auxService: AuxiliaryService,
    private modalService: ModalService
  ) { }

  //дозвон при err 
  request = (() => {
    //счетчик дозвонов
    let counter = 0;
    let timer: any;
    return () => {
 
      this.getUsers()!.subscribe(res => {
        this.usersView = res as User[];
        
        this.preload = false
        if (timer) { clearTimeout(timer);}
      },
        error => {
         
          timer = setTimeout(() => {
            if (counter === 1) {
              clearTimeout(timer)
              this.modalOpen(Emode.alert)
              this.preload = false
            } else {
              this.request();
              counter++;
            }
          }, 5000);
        })
    }
  }).bind(this)()


  ngOnInit(): void {
    this.preload = true;
    this.request()
   
   
   
  }

  modalOpen(modalMode: Emode, user?: User) {
    this.modalService.openModal(modalMode, user)
  }
  getAbrName(user: User) {
    return `${user.fname} ${user.name[0].toUpperCase()}. ${user.mname[1].toUpperCase()}.`
  }
  
  getUsers() {
    if (this.tabMode === 'all') {
      return this.apiService.getAllUsers()
    } else if (this.tabMode === 'active') {
      return this.apiService.getActiveUsers()
    }  else { return this.apiService.getBlockUsers() }
  }

  f(e: any) {
    this.preload = true;
    if (e.index === 0) {
      this.tabMode = 'all'
      this.request()
    } else if (e.index === 1) {
      this.tabMode = 'active'
      this.request()
    } else {
      this.tabMode = 'block'
      this.request()
    }

  }
}

