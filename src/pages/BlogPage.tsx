import { useParams } from "react-router-dom"


function BlogPage() {
  let pathParams = useParams();
  const blogId = pathParams.blogId;
  return (
    <div className="header">{blogId}</div>
  )
}

export default BlogPage