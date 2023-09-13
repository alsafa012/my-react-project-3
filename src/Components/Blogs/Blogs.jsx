import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";


const Blogs = ({ handleBookmark,handleMarkAsRed }) => {
     const [blogs, setBlogs] = useState([]);
     useEffect(() => {
          fetch("blogs.json")
               .then((ref) => ref.json())
               .then((data) => setBlogs(data));
     }, []);
     return (
          <div className="md:w-2/3">
               <h1 className="text-2xl font-bold text-center">Total-Blogs{blogs.length}</h1>
               <div>
                    {blogs.map((myBlog) => (
                         <Blog

                              key={myBlog.id}
                              handleBookmark={handleBookmark}
                              blog={myBlog}
                              handleMarkAsRed={handleMarkAsRed}
                         ></Blog>
                    ))}
               </div>
          </div>
     );
};
Blogs.propTypes={
     handleBookmark: PropTypes.func.isRequired,
     handleMarkAsRed: PropTypes.func.isRequired,
}

export default Blogs;
