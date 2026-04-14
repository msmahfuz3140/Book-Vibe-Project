import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import ListedBookCard from "../ui/ListedBookCard";

const WishList = ({ sortingType }) => {

    // default empty array (important fix)
    const { wishList = [] } = useContext(BookContext);

    const [filteredWishList, setFilteredWishList] = useState([]);

    // sorting logic
    useEffect(() => {

        let sortedData = [...wishList];

        if (sortingType === "pages") {
            sortedData.sort((a, b) => a.totalPages - b.totalPages);
        }
        else if (sortingType === "rating") {
            sortedData.sort((a, b) => a.rating - b.rating);
        }

        setFilteredWishList(sortedData);

    }, [sortingType, wishList]);

    return (
        <section className="min-h-screen bg-gray-50 py-10 px-4 my-10 rounded-2xl">

            {/* Header */}
            <div className="w-full text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    📚 Wishlist Books
                </h1>
                <p className="text-gray-500 mt-2">
                    All the books you added to wishlist
                </p>
            </div>

            {/* Cards */}
            <div className="w-full flex flex-col gap-6">

                {filteredWishList.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-md p-10 text-center">
                        <h2 className="text-xl font-semibold text-gray-700">
                            No Wishlist Books 😢
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Add books to your wishlist first.
                        </p>
                    </div>
                ) : (
                    filteredWishList.map((book, ind) => (
                        <ListedBookCard key={ind} book={book} />
                    ))
                )}

            </div>

        </section>
    );
};

export default WishList;