export default {
  addCart(context,payload){
    let oldProduct = null
    for(let item of context.state.cartList){
      if(item.iid === payload.iid){
        oldProduct = item
      }
    }
    if(oldProduct){
      context.commit('addCount', oldProduct)
    }else{
      context.commit('addToCart' , payload) 
    }
  }
}