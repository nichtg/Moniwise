import { useState } from "react";
// import { getPosts } from "../../api/routes.js/index.js";

const ApiTestPage = () => {
  function getPosts() {
    // makes a GET request to /api/posts
    fetch("/api/posts").then((res) => {
      if (res.ok) {
        res.json().then((json) => {
          console.log(json);
        });
      }
    });
  }
  return (
    <div>
      <button onClick={() => getPosts()}>Test API</button>
    </div>
  );
};

export default ApiTestPage;
