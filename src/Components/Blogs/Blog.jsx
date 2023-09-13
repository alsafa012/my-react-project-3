// import React from 'react';
import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";

const Blog = ({ blog, handleBookmark, handleMarkAsRed }) => {
     const {
          id,
          title,
          cover,
          author,
          author_img,
          posted_date,
          reading_time,
          hashtags,
     } = blog;
     // console.log(blog);

     // const [visit, setVisit] = useState(false);

     // const handleBookmarks = () => {
     //      // setVisit(true);
     //      setVisit(!visit); //toggol
     // };
     // let isClicked
     const [isClicked,setIsClicked]=useState(false)

     return (
          <div className="border">
               <img
                    className="w-[200px] my-3"
                    src={cover}
                    alt={`my blog: ${title}`}
               />
               <div className="flex justify-between my-5">
                    <div className="flex gap-4 ">
                         <img className="w-[50px]" src={author_img} alt="" />
                         <div>
                              <p className="text-2xl font-bold">{author}</p>
                              <p>{posted_date}</p>
                         </div>
                    </div>
                    <div className="mr-2">
                         <span>
                         { isClicked && 'visited in'} {reading_time} <span>min ago </span>
                         </span>
                         <button
                              onClick={() => {
                                   handleBookmark(blog)
                                   setIsClicked(true)
                              }}
                         
                         >
                              {/* { isClicked ? 'visited':''} */}
                              <FaBookmark className={ `${isClicked?'bg-white':'bg-red-600'} `}></FaBookmark>
                         </button>
                    </div>
               </div>
               <h2 className="text-2xl font-bold">{title}</h2>
               <p>
                    {hashtags.map((hash, index) => (
                         <span key={index}>
                              <a href="">#{hash}</a>
                         </span>
                    ))}
               </p>
               <button
                    onClick={() => handleMarkAsRed(id, reading_time)}
                    className="text-red-500 font-bold underline"
               >
                    Mark sa red
               </button>
          </div>
     );
};

Blog.propTypes = {
     blog: PropTypes.object.isRequired,
     handleBookmark: PropTypes.func.isRequired,
     handleMarkAsRed: PropTypes.func.isRequired,
};
export default Blog;
