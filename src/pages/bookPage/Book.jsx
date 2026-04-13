import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Book = () => {
    const {storedBook} = useContext(BookContext);
    console.log(storedBook, "storedBooks");
    return (
        <div>
            Marked book
        </div>
    );
};

export default Book;