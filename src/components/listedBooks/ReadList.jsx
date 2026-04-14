import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import ListedBookCard from "../ui/ListedBookCard";

const ReadList = ({sortingType}) => {
    const { storedBook } = useContext(BookContext);
    const [filterdReadList, setFilterdReadList]= useState(storedBook)

    useEffect(()=>{
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedData = [...storedBook].sort((a,b)=>a.totalPages - b.totalPages);
                console.log(sortedData, "storedData");
                setFilterdReadList(sortedData)
            } else if (sortingType === 'rating'){
                const sortedData = [...storedBook].sort((a,b)=>a.rating - b.rating);
                console.log(sortedData, "storedData");
                setFilterdReadList(sortedData)
            }
        }
    },[sortingType, storedBook])

    return (
        <section className="min-h-screen bg-gray-50 py-10 px-4 my-10 rounded-2xl">

            {/* Header */}
            <div className="w-full text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    📚 Read Books List
                </h1>
                <p className="text-gray-500 mt-2">
                    All the books you have marked as read
                </p>
            </div>

            {/* Cards Container */}
            <div className="w-full flex flex-col gap-6">

                {filterdReadList.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-md p-10 text-center w-full">
                        <h2 className="text-xl font-semibold text-gray-700">
                            No Books Added Yet 😢
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Start reading and add books to your list.
                        </p>
                    </div>
                ) : (
                    filterdReadList.map((book, ind) => (
                        <ListedBookCard key={ind} book={book} />
                    ))
                )}

            </div>
        </section>
    );
};

export default ReadList;