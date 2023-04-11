import React from "react";
import Banner from "./Banner";

const Blog = () => {
  return (
    <>
      <Banner>Blog</Banner>
      <div className="my-container mt-32 relative -top-40 ">
        <h2 className="text-5xl font-bold text-center">PH Jobs Blog</h2>
        <div className="w-[800px] mx-auto p-8 border rounded-md my-10 hover:border-purple-400">
          <h3 className="text-2xl font-semibold">Question: When should you use context API?</h3>
          <p className="mt-5">
            Context API is used to pass data to nested bottom component from top most component. In
            normal react data transfer process you need to transfer data through every component
            using props from upstream to downstream. But, in context API you can pass data from
            top-most to bottom-most component without using any component in-between them.
          </p>
        </div>
        <div className="w-[800px] mx-auto p-8 border rounded-md my-10 hover:border-purple-400">
          <h3 className="text-2xl font-semibold">Question: What is a custom hook?</h3>
          <p className="mt-5">
            Custom hook is a kind of reuseable function that allows you to add unique and special
            functionality to your react app. By using custom hook you can make your react app more
            diversified and user-friendly.
          </p>
        </div>
        <div className="w-[800px] mx-auto p-8 border rounded-md my-10 hover:border-purple-400">
          <h3 className="text-2xl font-semibold">Question: What is useRef?</h3>
          <p className="mt-5">
            useRef helps to persists values of data between renders. It won't re-render like
            useState hook. You can also use it to access a dom element directly.
          </p>
        </div>
        <div className="w-[800px] mx-auto p-8 border rounded-md my-10 hover:border-purple-400">
          <h3 className="text-2xl font-semibold">Question: What is useMemo?</h3>
          <p className="mt-5">
            useMemo hook enhances the React app performance by returning and memorized value. Its
            functionality depends on the changes of dependencies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
