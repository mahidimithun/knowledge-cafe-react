
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author_img, reading_time, author, posted_date, hashtags } = blog

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />

            <div className='flex justify-between mb-4'>
                <div className='flex'>

                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h1 className='text-2xl'> {author} </h1>
                        <p>
                            {posted_date}
                        </p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-2 text-red-500 text-2xl'>
                        <FaBookmark></FaBookmark>
                    </button>

                </div>
            </div>

            <h1 className="text-4xl">{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
                }
            </p>

            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className="text-purple-600 underline">
                Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}

export default Blog;