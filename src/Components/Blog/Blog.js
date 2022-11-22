import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="my-14 bg-red-300 p-10">
        <h3 className="text-4xl my-4">what is purpose of react router</h3>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
      </div>

      <div className="my-14 bg-red-300 p-10">
        <h3 className="text-4xl my-4">
          React Context API: What is it and How it works?
        </h3>
        <p>
          Context API is a (kind of) new feature added in version 16.3 of React
          that allows one to share state across the entire app (or part of it)
          lightly and with ease. Let's see how to use it.React context API, In
          this article you will explore what is Context API and how to use it in
          your React project. The Context API is a React structure that enables
          you to exchange unique details and assists in solving prop-drilling
          from all levels of your application.
        </p>
      </div>

      <div className="my-14 bg-red-300 p-10">
        <h3 className="text-4xl my-4">what is useref hook in react</h3>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly..
        </p>
      </div>
    </div>
  );
};

export default Blog;
