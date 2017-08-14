import React from 'react'
import PropTypes from 'prop-types'
import {Tabs, WhiteSpace} from 'antd-mobile';
import styles from './style.less'

class TabComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const TabPane = Tabs.TabPane;
    return (
      <div className={styles.tabComponentMain}>
        <Tabs defaultActiveKey="1" animated={false} onTabClick={this.handleTabClick.bind(this)}>
          <TabPane tab={this.props.firstTitle} key="1">
          </TabPane>
          <TabPane tab={this.props.secondTitle} key="2">
          </TabPane>
          <TabPane tab={this.props.thirdTitle} key="3">
          </TabPane>
        </Tabs>
      </div>
    )
  }


  handleTabClick(key) {
    if(this.props.title==='first'){
      this.props.changeStatus(key);
    }
    else if(this.props.title==='second'){
      this.props.changeOtherStatus(key);
    }
  }
}

export default TabComponent
