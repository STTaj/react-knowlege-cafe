import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";



const Blog = ({ blog, handelAddToBookmark }) => {
    const { title, cover, author_img, author_name, publish_date, reading_time, hashtag } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`this cover pic is ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img className='max-w-16' src={author_img} alt="" />
                    </div>
                    <div>
                        <h2>{author_name}</h2>
                        <p>publish on: {publish_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <p>{reading_time}Min Read</p>
                    <button onClick={() => handelAddToBookmark(blog)} className='bg-transparent border-none'><IoBookmarksOutline /></button>
                </div>
            </div>

            <h2 className="text-2xl">{title}</h2>
            <p>
                {
                    hashtag.map(hash => <span key={hash}><a href="">{hash}</a></span>)
                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelAddToBookmark: PropTypes.func
};

export default Blog;
