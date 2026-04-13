import React, { use } from "react";

import BookCard from "../../ui/BookCard";

const booksPromiss = fetch("/booksData.json").then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromiss);

    return (
        <section className="w-[95%] lg:w-[90%] mx-auto my-16">

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                All Books
            </h2>

            {/* BOOK GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {books.map((book) => (
                    <BookCard book={book} key={book.bookId} />
                ))}

            </div>
        </section>
    );
};

export default AllBooks;