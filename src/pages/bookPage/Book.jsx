import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../components/listedBooks/ReadList';
import WishList from '../../components/listedBooks/WishList';

const Book = () => {
    const { storedBook } = useContext(BookContext);
    console.log(storedBook, "storedBooks");
    const [sortingType, setSortingType] = useState()
    return (
        <div className='my-8 w-[90%] mx-auto'>

            <div className="flex justify-center my-8">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType("pages")}><a>Pages</a></li>
                        <li onClick={() => setSortingType("rating")}><a>Rating</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ReadList sortingType={sortingType} />
                </TabPanel>
                <TabPanel>
                    <WishList sortingType={sortingType} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Book;