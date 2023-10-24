import React, { useEffect, useState } from 'react'
import './Cart.css'
const Cart = ({cart,DeleteProduct}) => {
const [CART , SETCART] = useState(cart)

    useEffect(()=>{
        SETCART(cart)
    },[cart])

  return (

  <div className='Cart-Container'>
    {
        CART.length > 0 ?
    
    <>
    {
            CART.map((item,index) => {
                return (
                    <div key={index} className="cart-item">
                        <div className="cart-item-img">
                            <img src={item.img} alt=""/>
                        </div>
                        <div className="cart-item-info">
                                <h4>{item.title}</h4>
                                <h4 className='cart-item-info-Price'>{item.price}$</h4>
                                <button onClick={()=>DeleteProduct(item.idd)}>Remove</button>
                        </div>
                        <div className="cart-item-Count">
                            <button onClick={()=>{
                                const Minus = CART.map((itm,indx)=>{
                                    return index == indx ? {...itm, quantity: item.quantity > 1 ? item.quantity-1: 1}: itm
                                })
                                SETCART(Minus)
                            }}>-</button>
                            <h3>{item.quantity}</h3>
                            <button onClick={()=>{
                                const Plus = CART.map((itm,indx)=>{
                                    return index == indx? {...itm, quantity: item.quantity + 1}:itm
                                })
                                SETCART(Plus)
                            }}>+</button>
                        </div>
                        <h2>Total: <span>{ item.price * item.quantity}$</span></h2>
                    </div>
                )
            })}
    </>
       : <p className='Noproducts'>There are no products in the cart</p> 
        }
    <div className='Total'>
        <p>Sub total</p>
        <h1>
            {CART.reduce((acc,item)=>{
                return acc + item.price * item.quantity
            },0)}$
        </h1>
    </div>
    </div> 
  
    )
}

export default Cart