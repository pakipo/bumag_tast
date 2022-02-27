import { Emode, User } from '../../index';


export interface ImodalObj {
  mode: Emode,
  btnText: string
  message?: {
    title: string,
    mess: string
  },
  editObj?: User
}
