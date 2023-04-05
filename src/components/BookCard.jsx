import React from 'react';

const BookCard = ({book}) => {
    return (
        <div className='overflow:hidden relative transition duration-300 transform hover:-translate-y-2 shadow-lg rounded'>
                        <img src={book.image} alt="books cover" className='object-cover w-full h-56 md:h-64 xl:h-80' />
                        <div className='bg-black bg-opacity-75 text-gray-300 absolute inset-0 flex flex-col gap-5 opacity-0 hover:opacity-100 transition-opacity duration-200 px-6 py-4'>
                            <p>{book.title}</p>
                            <p>{book.subtitle.substring(0,45)}...</p>
                            <p className='mt-auto'>price:{book.price}</p>
                        </div>
                    </div>
           );
};

export default BookCard;