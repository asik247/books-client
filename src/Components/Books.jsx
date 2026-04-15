import React, { useEffect } from 'react';

const Books = () => {
    useEffect(()=>{
        fetch("http://localhost:5000/books")
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h3>Books here</h3>
        </div>
    );
};

export default Books;