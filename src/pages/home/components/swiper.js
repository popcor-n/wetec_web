import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MouseIn, MouseOut } from '../store/actionCreator'
class MySwiper extends Component {
    render() {
        const { show, swiper, handleMouseEnter, handleMouseLeave } = this.props;
        return (
            <div className="App"
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
            >
                <div className="swiper-container">
                    <div className="swiper-wrapper" >
                        {swiper.map((item, index) =>{
                            return(<img key= {index} className="swiper-slide" src= {item} alt= ""/>)
                        })}
                    </div>
                    <div className="swiper-button-prev swiper-button-white" style= {{display:show ? 'block' :'none'}}></div>
                    <div className="swiper-button-next swiper-button-white" style= {{display:show ? 'block' :'none'}}></div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }
    componentDidMount () {
        const mySwiper = new Swiper('.swiper-container', {
          autoplay: {
              delay:2000,
              disableOnInteraction:false
          },
          observer:true,//修改swiper自己或子元素时，自动初始化swiper 
          observeParents:true,//修改swiper的父元素时，自动初始化swiper 
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          
          pagination : {
              el: '.swiper-pagination',
              clickable :true,              
              type: 'custom',
              renderCustom: function (swiper, current, total) {
                var paginationHtml = '<ol class = "swiper-pagination-ol">';
                for (let i = 0; i < total; i++) {
                    // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
                    if (i === (current - 1)) {
                        paginationHtml += `<li class="swiper-pagination-customs swiper-pagination-customs-active"></li>`;
                    }else{
                        paginationHtml += '<li class="swiper-pagination-customs"></li>';
                    }						  
                }
                paginationHtml += '</ol>'
                return paginationHtml;
            }, 
          },
            slideChangeTransitionEnd: function(swiper){ 
            　　　swiper.autoplayStart();  
            // 　　　mySwiper.startAutoplay();
            　　   mySwiper.updateSlides(); 
            }
        });
        
  }
}
const mapStateToProps = (state) => ({
    swiper:state.get('home').get('swiperPic'),
    show:state.get('home').get('isShow')
})
const mapDispatchToProps= (dispatch) => {
    return {
        handleMouseEnter() {
            dispatch(MouseIn())
        },
        handleMouseLeave() {
            dispatch(MouseOut())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MySwiper)
