import React from 'react'
import PropTypes from 'prop-types'
import {NavBarHeader, InsureFooter} from './../../components'
import { List, InputItem, WhiteSpace } from 'antd-mobile';


class Policy extends React.Component {
  constructor(props,context){
    super(props,context);
  }
  render(){
    return(
      <div>
        <NavBarHeader title="订单填写"/>
        <div>
          投保人信息
        </div>
        <List>
          <InputItem
            placeholder="请输入姓名"
          >姓名</InputItem>
        </List>
        <List>
          <InputItem
            placeholder="证件号码"
          >姓名</InputItem>
        </List>
        <List>
          <InputItem
            placeholder="手机号码"
          >姓名</InputItem>
        </List>
        <InsureFooter leftTitle="价格 ￥166"/>
      </div>
    )
  }
}

export default Policy
