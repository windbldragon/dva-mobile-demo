import React from 'react'
import PropTypes from 'prop-types'
import pic1 from '../../public/img/5.jpg'
import styles from './style.less'

class Recommend extends React.Component {
  constructor(props,context){
    super(props,context);
  }
  render(){
    console.log(this.props.data);
    const recommendDate=this.props.data;
    return (
      <div className={styles.recommendMain}>
        <img src={pic1} alt="图片"/>
        <div className={styles.recommendMiddle}>
          <p className={styles.recommendTitle}>{recommendDate.title}</p>
          <p className={styles.recommendName}>{recommendDate.name}</p>
          <p className={styles.recommendName}>价格{recommendDate.price}元起</p>
        </div>
      </div>
    )
  }
}

export default Recommend
