import React from 'react';
const BookCard = ({book, addToCart}) => {
    if(!book) return null;
    const {title, author, cover, description, price} = book;
    
    return (
        <div className='book'>
            <img src={cover} alt={title} style={{width: '150px', height: '200px'}}/>
            <h2>{title}</h2>
            <p><strong>Автор:</strong> {author}</p>
            <p>{description}</p>
            <p><strong>Цена:</strong>{price}</p>
            <button onClick={() => addToCart(book)}>Добавить в корзину</button>
        </div>
    );
};
export default BookCard;