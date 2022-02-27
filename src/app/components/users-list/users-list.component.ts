import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import {
  ApiRequestService,
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
export class UsersListComponent implements OnInit, OnDestroy {

  usersView!: Array<User>
  preload: boolean = false;
  mode = Emode;
  status = Estatus;
  imgPath: string = '../../../assets/img/'
  date: Date = new Date(2022, 1, 1, 18, 0)
  tabMode: 'all' | 'active' | 'block' = 'all'

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
        if (timer) { clearTimeout(timer); }
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

  updateList = () => {
    return interval(10000).pipe(map(res => {
      this.getUsers()!.subscribe(res => {
        let arrUsers = res as User[]
        let arrNewUsers: User[] = []
        arrUsers.map(user => {
          let currUserIndex = _.findIndex(this.usersView, { id: user.id })
          //если добавлены новые user
          if (currUserIndex === -1) { arrNewUsers.push(user) }
          else {
            if (!_.isEqual(user, this.usersView[currUserIndex])) {
              let keys = Object.keys(this.usersView[currUserIndex])
              for (let key of keys) {
                if (this.usersView[currUserIndex][key] !== user[key]) {
                  this.usersView[currUserIndex][key] = user[key]
                }

              }
            }
          }
        })
        if (arrNewUsers.length !== 0) {
          arrNewUsers.map(user => {
            this.usersView.push(user)
          })
        }

      },
        err => { }
      )
    })
    ).subscribe()
  }


  ngOnInit(): void {

    //дляfakeAPI УДАЛИТЬ
    this.auxService.updateDB()

    this.preload = true;
    this.request()
    //обновляять список каждые 10с
    this.updateList()
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
    } else { return this.apiService.getBlockUsers() }
  }

  tabChange(e: any) {
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
  ngOnDestroy() {
    this.updateList().unsubscribe()
  }
}

