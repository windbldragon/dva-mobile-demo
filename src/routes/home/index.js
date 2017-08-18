import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import {NavBarHeader, CarouselPic, GridMain, Recommend,TabBarFooter} from './../../components'
import styles from './index.less'

const Home = () => {
  const commendArr = [
    {
      title: '尊享一生',
      name: '600万保障',
      price: 160
    },
    {
      title: '出行保障险',
      name: '出差，旅游全面保障',
      price: 200
    }]
  return (
    <div>
      <NavBarHeader title="平台"/>
      <CarouselPic/>
      <GridMain/>
      <div className={styles.productRecommend}>产品推荐</div>
      {
        commendArr.length > 0 ?
          commendArr.map((item, index) => {
            return (
              <Recommend key={index} data={item}/>
            )
          })
          : ''
      }
      <TabBarFooter/>
      <div style={{marginBottom:'200px'}}>
      </div>
    </div>
  )
}

export default Home
