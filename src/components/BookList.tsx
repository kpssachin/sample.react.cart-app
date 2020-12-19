import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { Book } from "./Book";

const bookList: { [key: string]: string }[] = [
  {
    title: "Men's Bouncer-01 Sports Latest Stylish Casual Sneakers,Lace up",
    pricingDescription: "₹720 ₹999 Save ₹279 (28%)",
    image:
      "https://m.media-amazon.com/images/I/61hMQOHmEIL._AC_UL640_FMwebp_QL65_.jpg",
    alt: "ASIAN",
  },
  {
    title: "Men's Bouncer-01 Sports Latest Stylish Casual Sneakers,Lace up",
    pricingDescription: "₹720 ₹999 Save ₹279 (28%)",
    image:
      "https://m.media-amazon.com/images/I/61hMQOHmEIL._AC_UL640_FMwebp_QL65_.jpg",
    alt: "ASIAN",
  },
  {
    title: "Men's Bouncer-01 Sports Latest Stylish Casual Sneakers,Lace up",
    pricingDescription: "₹720 ₹999 Save ₹279 (28%)",
    image:
      "https://m.media-amazon.com/images/I/61hMQOHmEIL._AC_UL640_FMwebp_QL65_.jpg",
    alt: "ASIAN",
  },
];

interface componentsProps {}

export const BookList: React.FC<componentsProps> = () => {
  const context: { [key: string]: any } = useContext(UserContext);
  return (
    <div className="container">
      {context?.loggedIn ? (
        <div className="row">
          {bookList.map((book,index) => (
            <div key={index} className="col-sm">
              <Book
                title={book.title}
                pricingDescription={book.pricingDescription}
                image={book.image}
                alt={book.alt}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
