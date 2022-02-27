import { Component, OnInit, } from '@angular/core';
import { ImodalObj, ModalService } from './index';
import { map, concatMap } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    private modalService: ModalService
  ) { }
  modalErrview: boolean = false
  initModalObj!: ImodalObj

  ngOnInit() {

    this.modalService.modalObjSubj.pipe(map(res => {
      this.initModalObj = res as ImodalObj;
    }),
      concatMap(() => { return this.modalService.modalSubj })
    ).subscribe(res => {
      this.modalErrview = res as boolean
    })

  }

  cancelModal(e: any) {
    this.modalService.closeModal()
  }

}
