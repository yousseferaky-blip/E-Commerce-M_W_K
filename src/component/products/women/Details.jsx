import React from 'react'

const Details = ({product,Back,AddProduct}) => {

  return (
    <>
    <div className='DetailsWord'>
        <p>Home/Women/<span>{product.title}</span></p>
    </div>
        <div className='Details-Container'>
            <div className='Details-Image'>
            <img src={product.img} alt={product.name} />
            </div>
            <div className='Details-Info'>
                <h1>{product.title}</h1>
                <p><span>$</span> {product.price}</p>
                <p><span>Color:</span> {product.color}</p>
                <button className='AddCart' onClick={()=>AddProduct(product)}>add to cart</button>
                <button className='Back' onClick={() => Back()}><i class="fa-solid fa-backward"></i> Back</button>
            </div>
        </div>
    </>
  )
}

export default Details