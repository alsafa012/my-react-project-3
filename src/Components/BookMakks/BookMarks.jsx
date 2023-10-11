import PropTypes from "prop-types";
import BookMark from "./BookMark";
const BookMarks = ({ bookMarks, removeBtn, removeOneBtn, readingTime }) => {
     return (
          <div className="w-1/3">
               {/* <div>
                    <h3 className="text-2xl font-bold">
                    ReadingTime: {readingTime}
                    </h3>
               </div> */}
               <h1 className="text-3xl text-center">
                    Total-Blogs: {bookMarks.length}
               </h1>
               {bookMarks.map((book) => (
                    <BookMark
                         key="book.id"
                         bookMark={book}
                         removeOneBtn={() => removeOneBtn(book.id)}
                         removeBtn={() => removeBtn(book.id)}
                    ></BookMark>
               ))}

               <div className="text-center ">
                    {/* if (bookMarks.length) { */}
                         
                    {/* } */}
                   {
                    bookMarks.length > 0 &&  <button
                    className="p-2 rounded-lg bg-red-400 "
                    onClick={() => removeBtn(bookMarks)}
               >
                    Clear All
               </button>
                   }
               </div>
          </div>
     );
};
BookMarks.propTypes = {
     bookMarks: PropTypes.array.isRequired,
     removeBtn: PropTypes.func.isRequired,
     removeOneBtn: PropTypes.func.isRequired,
     readingTime: PropTypes.number.isRequired,
};
export default BookMarks;

/* const handleRemoveCArt = (id) =>{
     // console.log(id)
     const remainingCart = cart.filter(c => c.id !== id);
     setCart(remainingCart)
} */

// in one cart
/* import PropTypes from "prop-types";
// import BookMark from "./BookMark";
const BookMarks = ({ bookMarks, removeBtn, removeOneBtn }) => {
     return (
          <div className="w-1/3 border border-red-800">
               <h1 className="text-3xl text-center">
                    Total-Blogs: {bookMarks.length}
               </h1>
               {bookMarks.map((book) => (
                    <div key={book.id}>
                         <h1>Book-Title: {book.title}</h1>
                         <h1>Book-Id: {book.id}</h1>
                         <button
                              className="p-2 rounded-lg bg-green-400"
                              onClick={() => removeOneBtn(book.id)}
                         >
                              remove
                         </button>
                    </div>
                    // <BookMark key="book.id" bookMark={book} removeBtn={()=>removeBtn(book.id)}></BookMark>
               ))}
               <button
                    className="p-2 rounded-lg bg-red-400"
                    onClick={() => removeBtn(bookMarks)}
               >
                    Clear All
               </button>
          </div>
     );
};
BookMarks.propTypes = {
     bookMarks: PropTypes.array.isRequired,
     removeBtn: PropTypes.object.isRequired,
};
export default BookMarks;
} */
