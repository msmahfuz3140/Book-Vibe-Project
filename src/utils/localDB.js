const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList");
    // console.log(allReadList, "allReadList from local DB");

    if(allReadList) return JSON.parse(allReadList)
    return []
}
const getAllWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList");
    // console.log(allWishList, "allWishList from local DB");

    if(allWishList) return JSON.parse(allWishList)
    return []
}

const addReadListToLocalDB = (book)=>{
    const allBooks = getAllReadListFromLocalDB();
    const isAlreadyExist = allBooks.find(b => b.bookId === book.bookId);
    if(!isAlreadyExist){

        // ei data ta local e add korte chai
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }
}
const addWishListToLocalDB = (book)=>{
    const allBooks = getAllWishListFromLocalDB();
    const isAlreadyExist = allBooks.find(b => b.bookId === book.bookId);
    if(!isAlreadyExist){

        // ei data ta local e add korte chai
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks));
    }
}

export { getAllReadListFromLocalDB, addReadListToLocalDB, getAllWishListFromLocalDB, addWishListToLocalDB };