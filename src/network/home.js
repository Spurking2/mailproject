import {request} from 'network/request'

export function getHomeMultdata(){
  return request({
    url:'/home/multidata'
  })
}

export function getControldata(type,page){
  return request({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}

