import React from 'react'
import PropTypes from 'prop-types'
import {Carousel,WhiteSpace,WingBlank} from 'antd-mobile'
import pic1 from '../../public/img/1.jpg'
import pic2 from '../../public/img/2.jpg'
import pic3 from '../../public/img/3.jpg'

class CarouselPic extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      data: [pic1, pic2, pic3],
      initialHeight: 200,
    }
  }
  render(){
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div className="carousel-main">
        <Carousel
          className="my-carousel"
          autoplay={true}
          infinite
          selectedIndex={0}
          swipeSpeed={35}
          autoplayInterval={2000}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((item,index) => (
            <a href="http://www.baidu.com" key={index} style={hProp}>
              <img
                style={{width:'100%',height:'500px'}}
                // src={`https://zos.alipayobjects.com/rmsportal/${index || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                src={item}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default CarouselPic
