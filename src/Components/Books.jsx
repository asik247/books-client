import React, { useEffect, useState } from 'react';
import Book from './Book';
import { data } from 'react-router';
const Books = () => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/boi")
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    // Handler
    const handlerAdd = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const newBooks = { name, price }
        // console.log('handler Add clicked', name, price);
        fetch("http://localhost:5000/boi", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBooks)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);

                const updatedBooks = [...allData, data];
                setAllData(updatedBooks);
                e.target.reset()
            });

    }
    return (
        <div>
            <div className='font-bold text-2xl text-center mt-5'>
                <h2>Add More Books!</h2>
            </div>
            {/* Input Field */}
            <form onSubmit={handlerAdd} className='flex flex-col justify-center items-center'>
                <input type="text" name="name" id="" placeholder='book name' />
                <br />
                <input type="text" name="price" id="" placeholder='book price' />
                <br />
                <button className='btn btn-primary'>Add</button>
            </form>
            <h2 className='text-center'>{allData.length}</h2>
            {allData.map(singleData => (<div key={singleData.id} >
                <div className='flex flex-col justify-center items-center'>
                    <h1>{singleData.name}</h1>
                </div>

            </div>))}
        </div>
    );
};

export default Books;