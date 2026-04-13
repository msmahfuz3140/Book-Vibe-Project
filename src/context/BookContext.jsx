import React, { createContext, useState } from 'react';

export const BookContext = createContext()
const BookProvider = ({ children }) => {
    const [storedBook, setStoredBook] = useState([])
    const handleMarkAsRead = (currentBook) => {
        // console.log(currentBook, "currentBook");
        const isExistBook = storedBook.find(book => book.bookId === currentBook.bookId);
        if (isExistBook) {
            alert("the book already exist")
        } else {
            setStoredBook([...storedBook, currentBook]);
            alert(`${currentBook.bookName} is added to List`)
        }
    }
    const data = {
        storedBook,
        setStoredBook,
        handleMarkAsRead
    }
    return (
        <div>
            <BookContext.Provider value={data}>
                {children}
            </BookContext.Provider>
        </div>
    );
};

export default BookProvider;