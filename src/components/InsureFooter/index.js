import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.less'

class InsureFooter extends React.Component {
  constructor(props,context){
    super(props,context);
  }
  render(){
    return (
      <div className={styles.insureFooterMain}>
        <div className={this.props.leftTitle==='在线客服'?styles.insureFooterSer:styles.otherInsureFooterSer}>
          {this.props.leftTitle}
        </div>
        <div className={styles.insureFooterInsure} onClick={this.insure.bind(this)}>
          立即投保
        </div>
      </div>
    )
  }
  insure(){
      this.props.insure();
  }
}

export default InsureFooter
