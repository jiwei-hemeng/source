import React, { useState, useEffect } from "react";

const Today = () => {
  const [list, setList] = useState([]);
  const getList = () => {
    setList([1, 2]);
  };
  useEffect(() => {
    console.log("list", list);
  });
  return (
    <div
      onClick={() => {
        getList();
      }}
    >
      我是今日待还
    </div>
  );
};
export default Today;
