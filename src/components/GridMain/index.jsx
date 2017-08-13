import React from 'react'
import PropTypes from 'prop-types'
import {Icon,Grid} from 'antd-mobile'

class GridMain extends React.Component{
  constructor(props,context){
    super(props,context);
  }
  render(){
    const data = Array.from(new Array(8)).map((_val, i) => ({
      icon: (<Icon type='check-circle' size="xxs" color="blue" />),
      text: `name${i}`,
    }));
    return(
      <div>
        <Grid data={data} hasLine={false} />
      </div>
    )
  }
}

export default GridMain
