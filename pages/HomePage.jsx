import React from 'react';
import BookCard from '../components/BookCard';
import books from '../books';

const HomePage = ({addToCart}) => {
    return (
        <div className='homepage'>
            <h1 className='homepage-title'>Добро пожаловать в книжный магазин</h1>
            <div className='book-list'>
                {books.map((book) => (
                    <BookCard key={book.id} book={book} addToCart={addToCart}/>
                ))}
            </div>
        </div>
    );
};
export default HomePage;