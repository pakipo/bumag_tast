import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuxiliaryService {

  constructor() { }

  getDate(date: Date) {
    let timeInterval = Math.round((new Date().getTime() - new Date(date).getTime()) / 1000)
  
    if (timeInterval < 60) {
      return ` ${timeInterval} секунда назад`
    } else if (timeInterval >= 60 && timeInterval < 3600) {
      //от 1 минуты до часа
      return this.getMinuts(Math.round(timeInterval / 60))
      //от 1 часа до суток
    } else if (timeInterval >= 3600 && timeInterval < 86400) {
      //от 1 суток до месяца
      return this.getHours(Math.floor(timeInterval / 3600))
    } else if (timeInterval >= 86400 && timeInterval < 2678400) {
      return this.getDays(Math.floor(timeInterval / 86400))
    } else if (timeInterval > 2678400) {

      return ' больше месяца назад'
    } else {return ''}
    
  }


  getMinuts(minuts: number) {

    if (minuts === 1) {

      return ' 1 минута назад'
    } else if (minuts > 1 && minuts <= 4) {
      return ` ${minuts} минуты назад`
    } else if ((minuts > 4 && minuts <= 20) || minuts === 30 || minuts === 40 || minuts === 50) {
      return ` ${minuts} минут назад`
    } else if (minuts === 21 || minuts === 31 || minuts === 41 || minuts === 51) {
      return  ` ${minuts} минута назад`
    } else if (minuts > 21 && minuts < 25 ||
      (minuts > 31 && minuts < 35) ||
     ( minuts > 41 && minuts < 45) ||
      (minuts > 51 && minuts < 55)) {
      return ` ${minuts} минуты назад`
    } else if ((minuts >= 25 && minuts <= 29) ||
     ( minuts >= 35 && minuts <= 39) ||
      (minuts >= 45 && minuts <= 49) ||
      (minuts >= 55 && minuts <= 59))
     {
      return ` ${minuts} минут назад`
    } else {
      return ` ${minuts} мин. назад`
    }
    return 
  }

  getHours(hours: number) {

    if (hours === 1 || hours === 21) {
      return ` ${hours} час назад`
    } else if ((hours > 1 && hours <= 4) ||
      (hours > 21 && hours <= 24)) {
      return ` ${hours} часа назад`
    } else if (hours > 4 && hours <= 20) {
      return  ` ${hours} часов назад`
    } else { return `${hours} ч. назад` }
  
  }

  getDays(day: number) {
    if (day === 1 || day == 21) {
      return ` ${day} день назад`
    } else if ((day > 1 && day <= 4) ||
      (day > 21 && day <= 24)) {
      return ` ${day} дня назад`
    } else if ((day > 4 && day <= 20) || (day > 24 || day <= 30)) {
      return ` ${day} дней назад`
    } else {
      return ` ${day} дн. назад`
    }
  }
}
