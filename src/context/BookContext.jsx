import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
    addReadListToLocalDB,
    addWishListToLocalDB,
    getAllReadListFromLocalDB,
    getAllWishListFromLocalDB,
} from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    /* ================= READ LIST ================= */

    const [storedBook, setStoredBook] = useState(
        getAllReadListFromLocalDB
    );

    const handleMarkAsRead = (currentBook) => {

        const isExistBook = storedBook.find(
            book => book.bookId === currentBook.bookId
        );

        if (isExistBook) {
            toast.error("The Book already exists in Read List");
            return;
        }

        // save to localStorage
        addReadListToLocalDB(currentBook);

        // update state
        setStoredBook(prev => [...prev, currentBook]);

        toast.success(`${currentBook.bookName} added to Read List`);
    };


    /* ================= WISHLIST ================= */

    const [wishList, setWishList] = useState(
        getAllWishListFromLocalDB
    );

    const handleMarkAsWishLish = (currentBook) => {

        // already in read list?
        const isExistInReadList = storedBook.find(
            book => book.bookId === currentBook.bookId
        );

        if (isExistInReadList) {
            toast.error("Book already in Read List");
            return;
        }

        // already in wishlist?
        const isExistBook = wishList.find(
            book => book.bookId === currentBook.bookId
        );

        if (isExistBook) {
            toast.error("Book already exists in Wishlist");
            return;
        }

        // save to localStorage ✅ (THIS WAS MISSING)
        addWishListToLocalDB(currentBook);

        // update state
        setWishList(prev => [...prev, currentBook]);

        toast.success(`${currentBook.bookName} added to Wishlist`);
    };


    /* ================= CONTEXT VALUE ================= */

    const data = {
        storedBook,
        handleMarkAsRead,
        wishList,
        handleMarkAsWishLish,
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;