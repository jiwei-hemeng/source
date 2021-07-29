import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
const GoTop = ({ top }) => {
  const [scrollTop, setscrollTop] = useState(0);
  useEffect(() => {
    const bindHandleScroll = (e) => {
      setscrollTop(e.target.scrollingElement.scrollTop);
    };
    window.addEventListener("scroll", bindHandleScroll);
  });
  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  if (scrollTop > top) {
    return (
      <div
        className="GoTop"
        onClick={() => {
          goTop();
        }}
      >
        <i className="iconfont icon-top"></i>
      </div>
    );
  }
  return <div></div>;
};
GoTop.propsTypes = {
  top: PropTypes.number,
};
GoTop.defaultProps = {
  top: 400,
};
export default GoTop;
