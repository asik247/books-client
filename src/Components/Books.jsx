import React from 'react';
import { useLoaderData } from 'react-router';
import Book from './Book';

const Books = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);
    return (
        <div>
            {allBooks.map(singleBook=>(<div>
                <h2>{singleBook.name}</h2>
            </div>))}
        </div>
    );
};

export default Books;