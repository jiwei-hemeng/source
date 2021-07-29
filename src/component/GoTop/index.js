import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./index.scss";
const GoTop = ({ top }) => {
  const [scrollTop, setscrollTop] = useState(0);
  let isUnmounted = useRef(true);
  useEffect(() => {
    isUnmounted.current = true;
    const bindHandleScroll = (e) => {
      if (isUnmounted.current) {
        setscrollTop(e.target.scrollingElement.scrollTop);
      }
    };
    window.addEventListener("scroll", bindHandleScroll);
    return () => {
      window.addEventListener("scroll", null);
      isUnmounted.current = false;
    };
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
