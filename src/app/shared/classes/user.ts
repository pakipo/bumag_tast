interface Keys {
  [index: string]: any
}

export class User {
  [index: string]: string | number | Date;

  "id": number;
  "icon": string;
  "name": string;
  "fname": string;
  "mname": string;
  "status": 0 | 1 | 2;
  "balance": number;
  "lastChange": Date
  constructor(
    id: number,
    icon: string,
    name: string,
    fname: string,
    mname: string,
    status: 0 | 1 | 2,
    balance: number,
    lastChange: Date
  ) {

    this.id = id;
    this.icon = icon;
    this.name = name;
    this.fname = fname;
    this.mname = mname;
    this.status = status;
    this.balance = balance;
    this.lastChange = lastChange;
  }

}
