import { useEffect, useState } from 'react'
import   './Men.css'
import MenD from './MenD'
import Details from './Details'

const Men = ({AddProduct}) => {
    const [ProductD, setProductD] = useState(MenD)

//    Start Filter Product 

    const getUniqueColors = (products) => {
    return [...new Set(products.map(product => product.color))];
    }
   
    const [selectedColor, setSelectedColor] = useState('');
    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

  const filteredProducts = ProductD.filter(product => product.color === (selectedColor));    
   
// Start Details

    const [select, setselect] = useState(false)

    const handleDetails  = (idd) => {
        setselect(idd)
    }
    const Back = () => {
        setselect(false)
    }
    
  return (
<>
{
            select ?  (
               <Details product= {
                ProductD.find(prod=>prod.idd===select)
               } Back = {Back} AddProduct={AddProduct}/>
            ) :
    <div className='Product-All'>

        {/* Start SideBar */}
      <div className='Container-SideBar'>
        <h5>Color</h5>
        {getUniqueColors(ProductD).map((color,index) => (
          <button key={index} onClick={() => handleColorClick(color)}>
            {color}
          </button>
        ))}
      </div>
     {/* Start Show Product */}
        { 
        selectedColor ?<div className='Products-Show'>
        {
            filteredProducts.map((product,index) => (
                <div className='Products-Show-Info' key={index}>
                    <div className='Products-Show-Img'>
                        <img src={product.img} alt={product.alt}/>
                    </div>
                    <div className='Products-Show-Span'>
                        <span>{product.title}</span>
                        <span>${product.price}</span>
                        
                    </div>
                    <div className='Products-Show-Icon'>
                        <i onClick={()=>AddProduct(product)} class="fa-solid fa-bag-shopping"></i>
                        <i onClick={()=>handleDetails(product.idd)} class="fa-solid fa-eye"></i>
                    </div>
                </div>
            ))
        } </div> 
     
           : <div className='Products-Show'>
        {
            ProductD.map((item,index)=>{
                return (
                <div className='Products-Show-Info' key={index}>
                    <div className='Products-Show-Img'>
                        <img src={item.img} alt={item.alt}/>
                    </div>
                    <div className='Products-Show-Span'>
                        <span>{item.title}</span>
                        <span>${item.price}</span>
                    </div>
                    <div className='Products-Show-Icon'>
                        <i onClick={()=>AddProduct(item)} class="fa-solid fa-bag-shopping"></i>
                        <i onClick={()=>handleDetails(item.idd)} class="fa-solid fa-eye"></i>
                    </div>
                </div>
                )
            })

        }
    </div> 
    }
      
    </div>
    
}
</>
  )
}

export default Men