import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './component/homepage/Homepage';
import NavBar from './component/assets/navbar/NavBar';
import Footer from './component/assets/footer/Footer';
import Men from './component/products/men/Men';
import HomeHover from './component/assets/homehover/HomeHover';
import Women from './component/products/women/Women';
import Kids from './component/products/kids/Kids';
import Phone from './component/products/phone/Phone';
import Cart from './component/products/cart/Cart';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Storge =  localStorage.getItem('Cart') ? 
    JSON.parse(localStorage.getItem('Cart')) : []

function App() {

  const [cart,setCart] = useState(Storge)

  const AddProduct  = (Product) =>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'تم اضافه المنتج بنجاح',
      showConfirmButton: false,
      timer: 1500
    })
      const Find = cart.find(item => item.idd === Product.idd)
      if(Find){
        setCart(cart.map(item => item.idd === Product.idd? {...Find, quantity : Find.quantity + 1} : item))
      }else{
        setCart([...cart , { ...Product , quantity : 1 }])
      }
  } 

  const DeleteProduct = (idd) =>{
    Swal.fire({
      title: 'متاكد من انك عاوز تمسح المنتج?',
      text: "لا يمكن ان ترجع في هذا!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم اريد!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'اتمسح!',
          ' لقد تم حذف هذا النتج.',
          'success'
        )
         const Delete = cart.filter(item=>item.idd !== idd)
         setCart(Delete)
      }
    })
  }

useEffect(()=>{
  localStorage.setItem('Cart',JSON.stringify(cart))
},[cart])



  return (
    <div className="App">
      <NavBar cart={cart}/>
    
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/men'  element={<Men AddProduct={AddProduct} />}/>
        <Route path='/women' element={<Women AddProduct={AddProduct}/>}/>
        <Route path='/kids' element={<Kids AddProduct={AddProduct}/>}/>
        <Route path='/phone' element={<Phone AddProduct={AddProduct}/>}/>
        <Route path='/cart' element={<Cart cart={cart} DeleteProduct={DeleteProduct} />}/>
      </Routes>
      <HomeHover />
      <Footer />
    </div>
  );
}

export default App;
