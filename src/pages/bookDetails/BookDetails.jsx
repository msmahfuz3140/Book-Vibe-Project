import React, { use, useContext, useState } from "react";
import { useParams } from "react-router";
import { BookContext } from "../../context/BookContext";

const booksPromiss = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
    const { id } = useParams();
    const books = use(booksPromiss);

    const expactedBook = books.find(
        (book) => book.bookId === Number(id)
    );

    // 🔥 Loading / Not Found Safety
    if (!expactedBook) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
                Loading book details...
            </div>
        );
    }

    const {handleMarkAsRead, storedBook} = useContext(BookContext);

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-white px-4 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-xl rounded-3xl overflow-hidden">

                {/* LEFT - IMAGE */}
                <div className="bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center p-10">
                    <img
                        src={expactedBook.image}
                        alt={expactedBook.bookName}
                        className="w-full max-w-sm object-contain rounded-xl shadow-2xl hover:scale-105     transition-transform duration-300"
                    />
                </div>

                {/* RIGHT - CONTENT */}
                <div className="p-6 sm:p-10 flex flex-col">

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                        {expactedBook.bookName}
                    </h1>

                    <p className="text-gray-500 text-lg mb-4">
                        By <span className="font-semibold text-gray-700">{expactedBook.author}</span>
                    </p>

                    {/* Category + Rating */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                            {expactedBook.category}
                        </span>

                        <span className="px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                            ⭐ {expactedBook.rating}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                        <span className="font-semibold text-gray-900">Review:</span>{" "}
                        {expactedBook.review || "No review available for this book."}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {expactedBook.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 border-t pt-6 text-sm">
                        <div>
                            <p className="text-gray-500">Pages</p>
                            <p className="font-semibold">{expactedBook.pages}</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Publisher</p>
                            <p className="font-semibold">{expactedBook.publisher}</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Year</p>
                            <p className="font-semibold">{expactedBook.year}</p>
                        </div>

                        <div>
                            <p className="text-gray-500">Rating</p>
                            <p className="font-semibold">{expactedBook.rating}</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button className="w-full sm:w-auto px-6 py-3 border rounded-xl font-semibold hover:bg-gray-100 transition" onClick={()=>handleMarkAsRead(expactedBook)}>
                            📖 Mark as Read
                        </button>

                        <button className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:opacity-90 transition">
                            ❤️ Add to Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;