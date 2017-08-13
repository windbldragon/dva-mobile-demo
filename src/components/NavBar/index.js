import React from 'react'
import PropTYpes from 'prop-types'
import {NavBar,Icon} from 'antd-mobile'
import { Button, Flex, WingBlank } from 'antd-mobile';

const NavBarHeader=(props)=>{
  console.log(props);
  return (
    <div>
      <NavBar mode="drak"
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <Icon key="0" type="ellipsis" />,
              ]}
      >{props.title}</NavBar>
    </div>
  )
}

export default NavBarHeader
