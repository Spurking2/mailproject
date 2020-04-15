import {request} from './request.js'

export function getDetailData(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function recommenddata(){
  return request({
    url:'/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSell = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}