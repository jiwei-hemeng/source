import React from "react";
import { AutoSizer, WindowScroller, InfiniteLoader, List } from "react-virtualized";
import { withRouter} from "react-router-dom";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
class Virtualized extends React.Component {
  // 当前数据是否加载完成
  isRowLoaded= ({ index })=> {
    return !!this.props.list[index];
  }
  render() {
    return (
      <InfiniteLoader
        isRowLoaded={ this.isRowLoaded } // 当前数据加载完成
        loadMoreRows={ this.props.loadMoreRows } // 加载更多
        rowCount={ this.props.count } // 总条数
        minimumBatchSize={ this.props.minimumBatchSize } // 加载更多时每次加载的数据量
      >
        {({ onRowsRendered, registerChild }) => {
          return (
            <WindowScroller>
              {({height, isScrolling, onChildScroll, scrollTop}) => {
                return (
                  <AutoSizer>
                    {({ width }) => {
                      return (
                        <>
                          <List
                            // InfiniteLoader 的要求
                            onRowsRendered={onRowsRendered}
                            ref={registerChild}
                            // WindowScroller  的要求
                            autoHeight  // 自适应高度
                            isScrolling={isScrolling}  // 组件是否滚动
                            onScroll={ onChildScroll} // 监听让页面一起滚动
                            scrollTop={scrollTop}
                            // list 组件的要求
                            width={ width }
                            height={ height }
                            rowCount={this.props.count}   // 数据的总条数
                            rowHeight={ this.props.rowHeight }   // 每行的高度
                            rowRenderer={this.props.rowRenderer} // 每条数据渲染的函数
                          /> 
                          <div className={styles.seat}>&nbsp;</div>
                        </>
                      ) 
                    }}
                  </AutoSizer>
                )
              }}
            </WindowScroller>
          )
        }}
      </InfiniteLoader>
    )
  }
}
// 校验数据类型
Virtualized.propsTypes = {
  count: PropTypes.number,
  minimumBatchSize: PropTypes.number,
  list: PropTypes.array,
  rowHeight: PropTypes.number,
  rowRenderer: PropTypes.func,
  loadMoreRows: PropTypes.func
}

// 设置传参默认值
Virtualized.defaultProps={
  count: 100,
  minimumBatchSize: 10,
  list: []
}
export default withRouter(Virtualized);
