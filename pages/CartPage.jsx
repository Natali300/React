import React from "react";
import "./CartPage.css";
const CartPage = ({cartItems, removeFromCart}) => {
    const getTotalPrice = () => {
        return cartItems.reduce((total, book) => total + book.price, 0).toFixed(2);
    };
    return (
        <div className="cart-container">
            <h1>Ваша корзина</h1>
            <div className="cart-gird">
                {cartItems.length === 0 ? ( <p>Корзина пуста</p>) : (
                    cartItems.map((book, index) => (
                        <div className="cart-item" key={index}>
                            <img src={book.cover} alt={book.title}/>
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <p>{book.price} ₽</p>
                            <button onClick={()=> removeFromCart(book.id)}>
                            Удалить из корзины
                            </button>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="cart-total">Общая сумма: {getTotalPrice()} ₽</div>
            )}
        </div>
    );
};
export default CartPage;
