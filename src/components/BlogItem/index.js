// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData
  return (
    <Link to={`/blogs/${id}`}>
      <div>
        <img src={imageUrl} alt={`each${id}`} />
        <div>
          <p>{topic}</p>
          <p>{title}</p>
          <div>
            <img src={avatarUrl} alt={`avatar${id}`} />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
