import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/books")
            .then(res => res.json())
            .then(data => setAllBooks(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h3>Books here</h3>

            {allBooks.map(singleBook => (
                <Book
                    key={singleBook.id}
                    singleBook={singleBook}
                />
            ))}
        </div>
    );
};

export default Books;