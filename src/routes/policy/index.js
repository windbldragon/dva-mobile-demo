import React from 'react'
import PropTypes from 'prop-types'
import {NavBarHeader, InsureFooter} from './../../components'
import { List, InputItem, WhiteSpace,Picker } from 'antd-mobile';
import styles from './index.less'


class Policy extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state={
      identityInfo:[1]
    }
  }
  render(){
    const district=[{label:'身份证',value:1},{label:'行驶证',value:2},{label:'营业执照',value:3}]
    return(
      <div>
        <NavBarHeader title="订单填写"/>
        <div className={styles.applicantInfo}>
          投保人信息
        </div>
        <List>
          <InputItem
            placeholder="请输入姓名"
          >姓名</InputItem>
        </List>
        <List>
          <InputItem
            placeholder="请输入证件号码"
          >证件号码</InputItem>
        </List>
        <List>
          <InputItem
            placeholder="请输入手机号码"
          >手机号码</InputItem>
        </List>
        <Picker data={district}
                cols={1}
                className="forss"
                value={this.state.identityInfo}
                onChange={this.changeInfo.bind(this)}>
          <List.Item arrow="horizontal">选择地区（单列）</List.Item>
        </Picker>



        <div className={styles.applicantInfo}>
          被投保人信息
        </div>
        <List>
          <InputItem
            placeholder="请输入姓名"
          >姓名</InputItem>
        </List>
        <List>
          <InputItem
            placeholder="请输入证件号码"
          >证件号码</InputItem>
        </List>
        <List>
          <InputItem
            placeholder="请输入手机号码"
          >手机号码</InputItem>
        </List>
        <div style={{marginBottom:'130px'}}></div>
        <InsureFooter leftTitle="价格 ￥166"/>
      </div>
    )
  }
  changeInfo(v){
   this.setState({ identityInfo: v });
  }
}

export default Policy
