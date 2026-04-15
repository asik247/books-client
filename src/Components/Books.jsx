import React from 'react';
import { useLoaderData } from 'react-router';

const Books = () => {
    const allBooks = useLoaderData();
    const handlerBooks = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const newBook = { name, price }
        fetch("http://localhost:5000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Success", data);
            })

    }

    return (
        <div className="max-w-5xl mx-auto p-6">

            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
                📚 Book Management
            </h1>

            {/* Form Card */}
            <div className="bg-white shadow-lg rounded-2xl p-6 mb-10 border">
                <h2 className="text-xl font-semibold mb-4">Add New Book</h2>

                <form onSubmit={handlerBooks} className="flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Book Name"
                        className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Add
                    </button>
                </form>
            </div>

            {/* Books List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allBooks.map(singleBook => (
                    <div
                        key={singleBook.id}
                        className="bg-white shadow-md rounded-xl p-5 border hover:shadow-xl transition"
                    >
                        <h2 className="text-lg font-semibold text-gray-800">
                            {singleBook.name}
                        </h2>

                        <p className="text-gray-500 mt-2">
                            💰 Price: {singleBook.price}
                        </p>

                        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                            Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;