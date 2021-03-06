import React from 'react'
import PropTypes from 'prop-types'
import { TabBar, Icon } from 'antd-mobile';

class TabBarFooter extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }
  renderContent(pageText) {
    return ''
      {/*<div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>*/}
        {/*<div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>*/}
        {/*<a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}*/}
           {/*onClick={(e) => {*/}
             {/*e.preventDefault();*/}
             {/*this.setState({*/}
               {/*hidden: !this.state.hidden,*/}
             {/*});*/}
           {/*}}*/}
        {/*>*/}
          {/*点击切换 tab-bar 显示/隐藏*/}
        {/*</a>*/}
      {/*</div>*/}
    ;
  }
  render(){
    return(
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={<div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('首页')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  0.42rem 0.42rem no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  0.42rem 0.42rem no-repeat' }}
              />
            }
            // icon={<Icon type="koubei-o" size="md" />}
            // selectedIcon={<Icon type="koubei" size="md" />}
            title="保险"
            key="保险"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('保险')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
              />
            }
            title="收益"
            key="收益"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('收益')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  0.42rem 0.42rem no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  0.42rem 0.42rem no-repeat' }}
              />
            }
            // icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            // selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('我的')}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default TabBarFooter
