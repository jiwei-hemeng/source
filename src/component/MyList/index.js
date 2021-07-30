import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";
const MyList = ({ list }) => {
  return list.map((item) => {
    return (
      <div className={styles.cardItem} key={item.title}>
        <span className={styles.title}>{item.title}</span>
        <span>{item.value}</span>
      </div>
    );
  });
};
MyList.propsTypes = {
  list: PropTypes.array,
};
MyList.defaultProps = {
  list: [],
};
export default MyList;
