import React from "react";
import useBlog from "../hooks/useBlog";

const Blogs = () => {
  const { data, loading, error, msg } = useBlog({});

  return (
    <div className="mt-5">{JSON.stringify({ data, loading, error, msg })}</div>
  );
};

export default Blogs;
