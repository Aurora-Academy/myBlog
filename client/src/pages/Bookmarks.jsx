import { Link } from "react-router-dom";

export const Bookmarks = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <h1 className="text-center">My Bookmarks</h1>
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Added Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>How to be a good developer?</td>
                <td>Raktim Shrestha</td>
                <td>28th Jan, 2023</td>
                <td>
                  <i className="fa fa-close text-danger"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>How to be a good developer? Part 2</td>
                <td>King Shrestha</td>
                <td>29th Jan, 2023</td>
                <td>
                  <i className="fa fa-close text-danger"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>How to be a good communicator?</td>
                <td>Prabin Shrestha</td>
                <td>30th Jan, 2023</td>
                <td>
                  <i className="fa fa-close text-danger"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export const NoBookmarks = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <h1 className="text-body-emphasis">No Bookmarks found...</h1>
          <p className="col-lg-6 mx-auto mb-4">
            Bookmark a blog to get started. You can book mark a blog from&nbsp;
            <Link className="text-decoration-none" to="/blogs">
              here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
