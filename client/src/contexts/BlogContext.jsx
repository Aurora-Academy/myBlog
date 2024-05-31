import { useContext, createContext, useState } from "react";
import useBlog from "../hooks/useBlog";

const BlogContext = createContext(null);

export const BlogContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const { data, loading, error, msg } = useBlog({ title });

  return (
    <>
      <BlogContext.Provider
        value={{ blogs: data?.data, loading, error, msg, setTitle }}
      >
        {children}
      </BlogContext.Provider>
    </>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("Blog Context must be wrapped inside provider");
  return context;
};
