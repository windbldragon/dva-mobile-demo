import React from 'react'
import PropTypes from 'prop-types'
import {Icon, Grid} from 'antd-mobile'
import { browserHistory } from 'react-router';


class GridMain extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const data = [
      {
        icon: (<Icon type='check-circle' size="xxs" color="blue"/>),
        text: `医疗险`,
        id:1,
      },
      {
        icon: (<Icon type='check-circle' size="xxs" color="blue"/>),
        text: `医疗险`,
        id:2,
      },
      {
        icon: (<Icon type='check-circle' size="xxs" color="blue"/>),
        text: `医疗险`,
        id:3,
      },
      {
        icon: (<Icon type='check-circle' size="xxs" color="blue"/>),
        text: `医疗险`,
        id:4,
      },
      {
        icon: (<Icon type='check-circle' size="xxs" color="blue"/>),
        text: `医疗险`,
        id:5,
      },
      {
        icon: (<Icon type='check-circle' size="xxs" color="blue"/>),
        text: `医疗险`,
        id:6,
      },
      {
        icon: (<Icon type='check-circle' size="xxs" color="blue"/>),
        text: `医疗险`,
        id:7,
      },
      {
        icon: (<Icon type='check-circle' size="xxs" color="blue"/>),
        text: `医疗险`,
        id:8,
      },
    ]
    return (
      <div>
        <Grid data={data} hasLine={false} onClick={this.clickHandle.bind(this)}/>
      </div>
    )
  }
  clickHandle(e){
    browserHistory.push('/medicalInsurance')
  }
}

export default GridMain
