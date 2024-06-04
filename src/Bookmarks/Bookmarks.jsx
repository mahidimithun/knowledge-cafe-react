import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">

            <div>
                <h1 className='text-3xl'>Reading Time: {readingTime}</h1>
            </div>

            <h1 className="">Bookmarks:{bookmarks.length} </h1>


            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number

}

export default Bookmarks;