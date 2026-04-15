import React from 'react';

const Book = ({ singleBook }) => {
    // const { name, price } = singleBook;
    console.log(singleBook);

    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h4>{'name'}</h4>
            <p>Price: {'price'}</p>
        </div>
    );
};

export default Book;