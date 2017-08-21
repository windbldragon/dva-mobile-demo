import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import {NavBarHeader, InsureFooter} from './../../components'
import { List, InputItem, WhiteSpace,Picker } from 'antd-mobile';
import styles from './index.less'
import { createForm } from 'rc-form';


class Policy extends React.Component {
  constructor(props,context){
    super(props,context);
      this.state={
        identityInfo:['身份证'],
      }
  }
  render(){
    const { getFieldProps } = this.props.form;
    const district=[{label:'身份证',value:'身份证'},{label:'行驶证',value:'行驶证'},{label:'营业执照',value:'营业执照'}]
    console.log(this.props.policyInfo,1);
    const policyInfo=this.props.policyInfo
    return(
      <div>
        <NavBarHeader title="订单填写"/>
        <div className={styles.applicantInfo}>
          投保人信息
        </div>
        <List>
          <InputItem
            {...getFieldProps('applicantName',{
              initialValue: policyInfo.applicantName,
              normalize:(v,prev)=>{
                if(v&&/^[\u0391-\uFFE5]+$/.test(v)){
                  return v;
                }else {
                  alert('error');
                  return prev;
                }
              }
            })}
            placeholder="请输入姓名"
            defaultValue="22"
          >姓名</InputItem>
        </List>
        <List>
          <InputItem
            {...getFieldProps('applicantIDNum',{
                initialValue: policyInfo.applicantIDNum,
              }
            )}
            placeholder="请输入证件号码"
          >证件号码</InputItem>
        </List>
        <List>
          <InputItem
            {...getFieldProps('applicantPhone',
              {
                initialValue: policyInfo.applicantPhone,
              })}
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
            {...getFieldProps('insuredName',
              {
                initialValue: policyInfo.insuredName,
              })}
            placeholder="请输入姓名"
          >姓名</InputItem>
        </List>
        <List>
          <InputItem
            {...getFieldProps('insuredIDNum',
              {
                initialValue: policyInfo.insuredIDNum,
              })}
            placeholder="请输入证件号码"
          >证件号码</InputItem>
        </List>
        <List>
          <InputItem
            {...getFieldProps('insuredPhone',
              {
                initialValue: policyInfo.insuredPhone,
              })}
            placeholder="请输入手机号码"
          >手机号码</InputItem>
        </List>
        <div style={{marginBottom:'130px'}}></div>
        <InsureFooter insure={this.insure.bind(this)} leftTitle="价格 ￥166"/>
      </div>
    )
  }
  componentDidMount(){
    console.log(this.props.policyInfo,2)
  }
  componentDidUpdate(){
    console.log(this.props.policyInfo,3);
    if(this.state.identityInfo[0]!==this.props.policyInfo.applicantType){
      this.setState({
        identityInfo:[this.props.policyInfo.applicantType]
      })
    }
  }
  componentWillMount(){
    console.log(this.props.policyInfo,4)
  }
  componentWillReceiveProps(nextProps){
    console.log(this.props.policyInfo,5)
  }
  componentWillUpdate(){
    console.log(this.props.policyInfo,6)
  }
  changeInfo(v){
   this.setState({ identityInfo: v });
  }
  insure(){
    this.props.form.validateFields((error, values) => {
      if(error){
        return;
      }
      values.applicantType=this.state.identityInfo[0];
      this.props.dispatch({ type: 'policy/insurePolicy', payload: values })
    });
  }
}

function mapStateToProps(state) {
    return {
        policyInfo:state.policy
    }
}


export default connect(mapStateToProps)(createForm()(Policy))
