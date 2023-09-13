// import React from 'react';
import PropTypes from "prop-types";
const BookMark = ({bookMark ,removeBtn ,removeOneBtn}) => {
     const {title ,id}=bookMark
     return (
         <div className="border p-4 space-y-4">
               <h1>Id : {id}</h1>
               <h1>{bookMark.author}</h1>
               <h1>Title: {title}</h1>
               
          
          <div className="text-center flex gap-4">
               <button className="p-2 rounded-lg bg-green-400" onClick={removeOneBtn}>Removed</button>
          {/* <button className="p-2 rounded-lg bg-red-400" onClick={()=>removeBtn(bookMark)}>Clear All</button> */}
          </div>
         </div>
     );
};
BookMark.propTypes = {
     bookMark: PropTypes.object.isRequired
}
export default BookMark;