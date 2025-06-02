import React from 'react';
const Cart = ({cartItems}) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div style={{padding: '10px', backgroundColor: '#80634a', border: '1px solid #ddd', 
            borderRadius: '8px', textAlign: 'center', margin: '20px auto', width: '300px'}}>
              <h2>Корзина</h2>
              <p>Товаров в корзине: {totalItems} шт</p> 
              <p>Сумма товаров: {totalPrice} руб</p>   
        </div>
    );
    
};
export default Cart;