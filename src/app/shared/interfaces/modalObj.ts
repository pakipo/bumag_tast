import {Emode,Estatus } from '../../index';

export interface ImodalObj {

  mode: Emode,
  btnText: string
  message?: {
    title: string,
    mess: string
  },
  editObj?: {
    name: string,
fname: string ,
mname: string,
status: Estatus

  }
}
