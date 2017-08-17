import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
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
          <InputItem ref="applicantID"
            placeholder="请输入证件号码"
          >证件号码</InputItem>
        </List>
        <List>
          <InputItem ref="phone"
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
        <InsureFooter insure={this.insure.bind(this)} leftTitle="价格 ￥166"/>
      </div>
    )
  }
  componentDidMount(){
    console.log(this.props.policyInfo)
  }
  changeInfo(v){
   this.setState({ identityInfo: v });
  }
  insure(){
    let values={
      applicantName:'aaa',
      applicantIDNum:2,
    };
    this.props.dispatch({ type: 'policy/insurePolicy', payload: values })
  }
}

function mapStateToProps(state) {
    return {
        policyInfo:state.policy
    }
}


export default connect(mapStateToProps)(Policy)
