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
                onLeftClick={this.clickHandle.bind(this)}
                rightContent={[
                  <Icon key="0" type="ellipsis" />,
                ]}
        >{this.props.title}</NavBar>
      </div>
    )
  }
  clickHandle(){
    window.history.back();
  }
}

export default NavBarHeader
