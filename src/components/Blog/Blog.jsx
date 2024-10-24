import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    // console.log(blog);
    const {id,title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                       <h3 className='text-xl font-bold'>{author}</h3>
                       <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                  <span>{reading_time} min read
                    <button onClick={() => handleAddToBookmarks(blog)}
                    className='ml-2 text-red-600 text-xl'><FaBookmark></FaBookmark></button>
                  </span>
                </div>
            </div>
           <h2 className='text-4xl font-extrabold mb-4'>{title}</h2>
           <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href ="">#{hash}  </a></span>)
            }
           </p>
            <button className='text-purple-800 font-semibold underline'
            onClick={() => handleMarkAsRead(id, reading_time)}
            >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}
export default Blog;