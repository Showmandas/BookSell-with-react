import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import BookCard from "./BookCard";

const Books = () => {
  // load spinner
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner />;
  }
  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 md:grid-cols-2">
        {books.map((book) => (
          <BookCard key={book.isbn13} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
