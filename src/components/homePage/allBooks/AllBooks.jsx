import React, { use } from "react";
import { Star } from "lucide-react";

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
                    <div
                        key={book.bookId}
                        className="bg-white border border-gray-200
            rounded-3xl p-6 shadow-sm
            hover:shadow-xl transition duration-300
            hover:-translate-y-1"
                    >

                        {/* IMAGE */}
                        <div className="bg-gray-100 rounded-2xl flex justify-center items-center py-10 mb-6">
                            <img
                                src={book.image}
                                alt={book.bookName}
                                className="h-56 object-contain"
                            />
                        </div>

                        {/* TAGS */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {book.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-1 bg-green-50 text-green-600
                  rounded-full text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* TITLE + AUTHOR */}
                        <div className="mb-5">
                            <h3 className="text-xl font-bold text-gray-900">
                                {book.bookName}
                            </h3>
                            <p className="text-gray-500">
                                By : {book.author}
                            </p>
                        </div>

                        {/* DIVIDER */}
                        <div className="border-t border-dashed border-gray-300 my-5"></div>

                        {/* FOOTER */}
                        <div className="flex justify-between items-center text-gray-600">

                            <span>{book.category}</span>

                            <div className="flex items-center gap-2">
                                <span>{book.rating}</span>
                                <Star size={18} className="text-yellow-500" />
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default AllBooks;