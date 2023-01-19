import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import _ from "lodash";

const pageSize = 10;

const Pagination = () => {
  const [posts, setPosts] = useState();
  const [paginatePost, setPaginatePost] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      setPosts(res.data);
      setPaginatePost(_(res.data).slice(0).take(pageSize).value());
    });
  }, []);

  const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
    setPaginatePost(paginatedPost);
  }

  return (
    <>
      <div className="container">
        {!paginatePost ? (
          "No Data Found"
        ) : (
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatePost.map((post, index) => (
                <tr key={index}>
                  <td>{post.id}</td>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>
                    <p
                      className={
                        post.completed ? "btn btn-success" : "btn btn-danger"
                      }
                    >
                      {post.completed ? "Completed" : "Pending"}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <p className="page-link" onClick={()=> pagination(page)}>{page}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
