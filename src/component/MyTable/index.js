import React from "react";
import PropTypes from "prop-types";
import { List } from "antd-mobile";
import "./index.css";
const Item = List.Item;
const MyTable = ({ title, list, RenderData }) => {
  return (
    <List className="MyTable" renderHeader={() => title}>
      <Item>
        <table className="OrderInfo" key={title}>
          <thead>
            <tr>
              {RenderData.map((item) => {
                return (
                  <th key={item.title} align="center">
                    {item.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index}>
                  {RenderData.map((j, i) => {
                    return <td key={i}>{item[j.value]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Item>
    </List>
  );
};
MyTable.propsTypes = {
  list: PropTypes.array,
  RenderData: PropTypes.array,
  title: PropTypes.string,
};
MyTable.defaultProps = {
  list: [],
  RenderData: [],
  title: "杨柳依依江水平",
};
export default MyTable;
