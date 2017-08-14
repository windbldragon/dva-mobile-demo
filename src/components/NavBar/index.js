import React from 'react'
import PropTYpes from 'prop-types'
import {NavBar,Icon} from 'antd-mobile'
import { Button, Flex, WingBlank } from 'antd-mobile';


class NavBarHeader extends React.Component{
  constructor(props,context){
    super(props,context);
  }
  render(){
    return(
      <div>
        <NavBar mode="drak"
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                  <Icon key="0" type="ellipsis" />,
                ]}
        >{this.props.title}</NavBar>
      </div>
    )
  }
}

export default NavBarHeader
