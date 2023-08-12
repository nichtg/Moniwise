import { useState } from "react";

const ApiTestPage = () => {
  function createTransaction() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID: "60a6b0b9c9b0c2b4b8b0b0b0",
        note: "test",
        amount: 100,
        category: "test",
      }),
    };

    fetch("http://localhost:3000/api/transaction", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div>
      <button onClick={() => createTransaction()}>Test API</button>
    </div>
  );
};

export default ApiTestPage;
