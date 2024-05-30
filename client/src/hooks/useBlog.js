import { useState, useEffect } from "react";

import { publishedBlogs } from "../services/blogs";

const useBlog = ({ title, page, limit }) => {
  // Replace this entire code with tanstack query
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, msg } = await publishedBlogs({ title, page, limit });
        setMsg(msg);
        setData(data);
      } catch (e) {
        const err = e?.response?.data?.msg || "something went wrong";
        setError(err);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setError("");
          setMsg("");
        }, 3000);
      }
    };
    fetchData();
  }, [title, limit, page]);

  return { data, error, loading, msg };
};

export default useBlog;
