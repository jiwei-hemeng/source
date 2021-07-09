import React from "react";
import { Card, Button } from "antd-mobile";
import styles from "./index.module.scss";
export default class ChangeIdCard extends React.Component {
  state = {
    files: {},
  }
  render() {
    return (
      <Card
        className={styles.Card}
      >
        <Card.Header
          title="上传音频"
        ></Card.Header>
        <Card.Body
          className={styles.body}
        >
          <Button
            className={styles.Button}
            type="primary"
            icon={<i className="iconfont icon-upload"></i>}
            onClick={() => this.fileClick.click()}
          >上传</Button>
          <input
            className={styles.iinput}
            type="file"
            accept="audio/*"
            ref={ref => this.fileClick = ref}
            onChange={e => {
              this.setState({files: e.target.files})
              this.props.files(e.target.files)
            }} 
          />
        </Card.Body>
      </Card>
    )
  }
}
