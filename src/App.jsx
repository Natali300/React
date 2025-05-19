import './App.css'
import React, {useState} from 'react';
//
//
//


function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (book) => {
    setCartItems((prevItems) =>{
      const existingItem = prevItems.find((item) => item.id === book.id);
      if(existingItem){
        return prevItems.map((item) => 
        item.id === book.id ? {...item, quantity: item.quantity +1}: item  )
      }else{
        return[...prevItems, {...book, quantity: 1}];
      }

    });
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>книжный магазин</h1>
    </div>

  )}
   
export default App
