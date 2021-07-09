import React from "react";
import { Card, Button } from "antd-mobile";
import styles from "./index.module.scss";
export default class ChangeIdCard extends React.Component {
  state = {
    files1: {},
    files2: {},
    files3: {}
  }
  render() {
    return (
      <Card
        className={styles.Card}
      >
        <Card.Header
          title="修改身份证"
        ></Card.Header>
        <Card.Body
          className={styles.body}
        >
          <Button
            className={styles.Button}
            type="primary"
            inline
            onClick={() => this.fileClick.click()}
          >正面</Button>
          <input
            className={styles.iinput}
            type="file"
            accept="image/*"
            ref={ref => this.fileClick = ref}
            onChange={e => {
              this.setState({files1: e.target.files})
            }} 
          />
          <Button
            inline
            type="primary"
            className={styles.Button}
            onClick={() => this.fileClick1.click()}
          >反面</Button>
          <input
            type="file"
            className={styles.iinput}
            accept="image/*"
            ref={ref => this.fileClick1 = ref}
            onChange={e => {
              this.setState({files2: e.target.files})
            }}  
          />
          <Button
            type="primary"
            inline
            className={styles.Button}
            onClick={() => this.fileClick2.click()}
          >手持</Button>
          <input
            type="file"
            accept="image/*"
            className={styles.iinput}
            ref={ref => this.fileClick2 = ref}
            onChange={e => {
              this.setState({files2: e.target.files})
            }}
          />
        </Card.Body>
      </Card>
    )
  }
}
