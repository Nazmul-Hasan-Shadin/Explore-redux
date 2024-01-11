import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction"

const initialState= {
    cart:[],
    products:[      
    {name:'Lenevo Laptop',id:1},
    {name:'Afsus Laptop',id:3},
    {name:'Hp Laptop',id:3},
    {name:'Toshiba Laptop',id:4},
    {name:'Hp Laptop',id:5}]
}

const cartReducers=(state=initialState,action)=>{
     
     switch(action.type){
        case ADD_TO_CART:
            return {
                cart:[...state.cart, action.id],
                products:state.products
            }
        case REMOVE_FROM_CART:
            const id= action.id;
             const newCart= state.cart.filter(item=>item !==id )
            
            return {cart:newCart} 
        default:
            return state
     }
}

export default cartReducers