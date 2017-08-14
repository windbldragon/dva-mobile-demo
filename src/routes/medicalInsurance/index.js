import React from 'react'
import PropTypes from 'prop-types'
import {NavBarHeader, CarouselPic, TabComponent,InsureFooter,ShowInsure} from './../../components'
import styles from './index.less'
import { Popup, List, Button, Icon } from 'antd-mobile';
import { browserHistory } from 'react-router';


class MedicalInsurance extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tabStatus: 1,
      otherTabStatus: 1,
    }
  }

  render() {
    return (
      <div>
        <NavBarHeader title="医疗险"/>
        <CarouselPic/>
        <div style={{marginTop:'18px'}}></div>
        <TabComponent title="first" firstTitle="商品详情" secondTitle="保障计划" thirdTitle="服务详情" changeStatus={this.changeStatus.bind(this)}/>
        {
          this.state.tabStatus == 1 ? <div style={{textAlign:'center',marginTop:'10px'}}>商品详情</div> : ''
        }
        {
          this.state.tabStatus == 2 ? <div style={{textAlign:'center',marginTop:'10px'}}>保障计划</div> : ''
        }
        {
          this.state.tabStatus == 3 ? <div style={{textAlign:'center',marginTop:'10px'}}>服务详情</div> : ''
        }
        <div className={styles.medicalInsuranceAll}>
        <TabComponent title="second" firstTitle="基础版" secondTitle="经典版" thirdTitle="旗舰版"  changeOtherStatus={this.changeOtherStatus.bind(this)}/>
        {
          this.state.otherTabStatus == 1 ?
            <div className={styles.medicalInsuranceBody}>
              <div className={styles.medicalInsuranceMain}>
                <div className={styles.medicalInsuranceTitle}>
                  <p>一般医疗保险金</p>
                  <p>3,000,000,000元</p>
                </div>
                <div className={styles.medicalInsuranceTitle}>
                  <p>其他医疗保险金</p>
                  <p>3,000,000,000元</p>
                </div>
              </div>
              <div className={styles.medicalInsuranceMain}>
                <div className={styles.medicalInsuranceTitle}>
                  <p>保障期限</p>
                  <p>一年</p>
                </div>
                <div className={styles.medicalInsuranceTitle}>
                  <p>适用人群</p>
                  <p>成人、儿童</p>
                </div>
              </div>
              <div className={styles.medicalInsurancePrice}>
                136元起
              </div>
            </div>
            : ''
        }
        </div>
        {
          this.state.otherTabStatus == 2 ? <div style={{textAlign:'center'}}>保障计划</div> : ''
        }
        {
          this.state.otherTabStatus == 3 ? <div style={{textAlign:'center'}}>服务详情</div> : ''
        }
        <InsureFooter leftTitle='在线客服' insure={this.insure.bind(this)}/>
      </div>
    )
  }

  changeStatus(key) {
    this.setState({
      tabStatus: key
    })
  }

  changeOtherStatus(key) {
    this.setState({
      otherTabStatus: key
    })
  }
  insure(){
    const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
    let maskProps;
    if (isIPhone) {
      // Note: the popup content will not scroll.
      maskProps = {
        onTouchStart: e => e.preventDefault(),
      };
    }
    Popup.show(<div>
      <ShowInsure insure={this.skip.bind(this)}/>
    </div>, { animationType: 'slide-up', maskProps, maskClosable: true });
  }
  skip(){
    Popup.hide();
    browserHistory.push('/policy')
  }
}

export default MedicalInsurance
