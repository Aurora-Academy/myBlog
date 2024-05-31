import { Link } from "react-router-dom";
import { useBlogContext } from "../contexts/BlogContext";

import LogoImg from "../assets/logo.png";
import { BlogLoader } from "../components/Loader";
import { dateFormatter } from "../utils/date";

const Blogs = () => {
  const { blogs, loading, error, msg } = useBlogContext();

  const handleErrorImg = (e) => {
    e.target.src = LogoImg;
  };

  return (
    <>
      <div className="row">
        <h4>Blogs</h4>
        <div className="col-8">
          <div className="input-group mb-3" style={{ maxWidth: "500px" }}>
            <span className="input-group-text">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search by Blog Title"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-end">
            <select className="form-select" style={{ maxWidth: "200px" }}>
              <option value="latest">Latest</option>
              <option value="Alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>
      {/* Blog Data Loop */}
      <div className="row">
        {loading && (
          <>
            <BlogLoader />
            <BlogLoader />
            <BlogLoader />
          </>
        )}

        {blogs &&
          blogs?.data.length > 0 &&
          blogs.data.map((blog) => {
            return (
              <div key={blog?.slug} className="col-md-4">
                <div className="card mb-3">
                  <img
                    src={blog?.pictureUrl}
                    className="card-img-top"
                    onError={(e) => handleErrorImg(e)}
                    style={{
                      width: "100%",
                      height: "17vw",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{blog?.title}</h5>
                    <p className="card-text">
                      <em>{blog?.content.slice(0, 47).concat("...")}</em>
                    </p>
                    <i className="fa fa-user"></i>&nbsp;{blog?.author} &nbsp;
                    <i className="fa fa-calendar"></i>&nbsp;
                    {dateFormatter(blog?.createdAt, "Do MMMM, YYYY")}
                    <div className="d-flex justify-content-between mt-4">
                      <Link
                        to={`/blogs/${blog?.slug}`}
                        className="btn btn-custom"
                      >
                        Read more
                      </Link>
                      <Link to="#" className="btn btn-light">
                        <i className="fa fa-bookmark"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* Pagination */}
      <div className="row">
        <div className="d-flex justify-content-center d-grid gap-2">
          <ul className="pagination">
            <select className="page-item">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </ul>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Blogs;
