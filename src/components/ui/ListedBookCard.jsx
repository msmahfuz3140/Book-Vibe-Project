import React from "react";
import { Users, FileText, Star } from "lucide-react";
import { Link } from "react-router";

const ListedBookCard = ({ book }) => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 lg:p-7">

            {/* Main Layout */}
            <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">

                {/* Book Image */}
                <div className="w-full sm:w-[220px] h-[260px] bg-gray-100 rounded-xl flex justify-center items-center shrink-0">
                    <img
                        src={book.image}
                        alt={book.bookName}
                        className="h-[220px] object-contain drop-shadow-lg"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 w-full">

                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="text-gray-500 mb-4">
                        By <span className="font-medium">{book.author}</span>
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        <span className="font-semibold text-gray-700 mr-2">
                            Tags:
                        </span>

                        {book.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded-full font-medium"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Info Row */}
                    <div className="flex flex-wrap gap-6 text-gray-500 mb-5">

                        <div className="flex items-center gap-2">
                            <Users size={18} />
                            <span>Publisher: {book.publisher}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FileText size={18} />
                            <span>Pages: {book.totalPages}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Star size={18} />
                            <span>Rating: {book.rating}</span>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-5"></div>

                    {/* Bottom Section */}
                    <div className="flex flex-wrap items-center gap-3">

                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                            Category: {book.category}
                        </span>

                        <Link to={`/bookDetails/${book.bookId}`}
                        key={book.bookId}>
                            <button className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300">
                                View Details
                            </button></Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;