import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../Redux/actions/cartAction';
import { connect } from 'react-redux';

const Shop = (props) => {
    console.log(props);
    const {products,addToCart}=props
    return (
        <div>
            <h2>this is shop</h2> 
            {
                products.map(pd=>  <Product addToCart={addToCart}  product={pd} key={pd.id}></Product>)
            }
        </div>
    );
};
 
const mapStateToProps=state=>{
    return {
        cart: state.cart,
        products: state.products
    }
}


const mapDispatchToProps={
    addToCart: addToCart
}

// const connectToStore= connect(mapStateToProps,mapDispatchToProps)
// connectToStore(Shop)


const ConnectedShop = connect(mapStateToProps, mapDispatchToProps)(Shop);
export default ConnectedShop