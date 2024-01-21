import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Store/cartSlice';

const Product = () => {

    const dispetch = useDispatch();


    const [myProdects, setMyProducts] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            const result = await fetch('https://fakestoreapi.com/products');
            const data = await result.json();
            console.log(data)
            setMyProducts(data)
        }
        fetchProduct();
    }, [])
    const AddHandler = (prod)=>{
        dispetch(add(prod))
    }
    return (
        <div className='wrapperClass'>
            {
                myProdects.map((prod) => (
                    <div key={prod.id} className='cartProducts'>
                        <div className='imge'>
                        <img className='ProdImages' src={prod.image} alt="" />
                    </div>
                    <div>
                        <h3>{prod.title}</h3>
                        <h3>$US : {prod.price}</h3>
                        <button onClick={()=>AddHandler(prod)}>Add Card</button>
                    </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Product
