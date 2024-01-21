import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/cartSlice';

const Carts = () => {
    const selector = useSelector((state) => state.cart);
    const dispetch = useDispatch();

    const RemoveHandler = (prodID)=>{
        dispetch(remove(prodID))
    }

    return (
        <div className='wrapperClass'>
            {
                selector.map((prod) => (
                    <div key={prod.id} className='cartProducts'>
                        <div className='imge'>
                            <img className='ProdImages' src={prod.image} alt="" />
                        </div>
                        <div>
                            <h3>{prod.title}</h3>
                            <h3>$US : {prod.price}</h3>
                            <button onClick={() => RemoveHandler(prod.id)}>Remove Card</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Carts
