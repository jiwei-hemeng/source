import React from "react";
import { Card, List, Radio } from "antd-mobile";
import styles from "./index.module.scss";
const RadioItem = Radio.RadioItem;
const isQualified = [
  { value: 1, label: '合格' },
  { value: 0, label: '不合格' },
];
export default class IdCardQualified extends React.Component {
  render() {
    return (
      <Card
        className={styles.Card}
      >
        <Card.Body>
          <List renderHeader={() => '身份证是否合格'}>
            {
              isQualified.map(item => {
                return (
                  <RadioItem
                    key={item.value}
                    checked={this.props.Qualified === item.value}
                    onChange={() => this.props.onChange(item.value)}
                  >{item.label}</RadioItem>
                )
              })
            }
          </List>
        </Card.Body>
      </Card>
    )
  }
}