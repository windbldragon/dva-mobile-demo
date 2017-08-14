import React from 'react'
import PropTypes from 'prop-types'
import {InsureFooter} from '../../components'
import styles from './style.less'

class ShowInsure extends React.Component{
  constructor(props,context){
    super(props,context);
  }
  render(){
    return (
      <div>
        <div className={styles.showInsureMain}>
          <p>保障计划</p>
          <button className={styles.showInsureBtn}>基础版</button>
          <button className={styles.showInsureBtn}>经典版</button>
        </div>
        <div className={styles.showInsureDate}>
          <p>投保日期</p>
          <input type="date"/>
        </div>
        <InsureFooter leftTitle="价格 ￥336"/>
      </div>
    )
  }
}

export default ShowInsure
