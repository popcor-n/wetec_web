import React, { Component } from 'react'
import * as style from './style'
import Swiper from './components/swiper'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writers'
import { connect } from 'react-redux'
import { getHomeDt, getMoreList } from './store/actionCreator'
class Home extends Component {
    state= {
        codeType:true
    }
    render() {
        return (
            <style.HomeWrapper>
                <style.HomeLeft>
                    <Swiper />
                    <List />
                </style.HomeLeft>
                <style.HomeRight>
                    <Recommend />
                    <Writer/>
                </style.HomeRight>
            </style.HomeWrapper>
        )
    }
    componentDidMount() {
        // 发送请求数据action
        this.props.changeHomeDt(this.props.articleList);
        window.addEventListener('scroll', this.bindHandleScroll.bind(this))
    }
    bindHandleScroll(event) {
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        // 视窗高度
        const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
        // 页面高度
        const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
        // 距离页面底部的高度
        const height = scrollHeight - scrollTop - clientHeight;
        // 判断距离页面底部的高度
        if (height <= (50 || 0)) {
            // 判断执行回调条件
            if (this.state.codeType) {
                // 执行回调
                console.log('heihei');
                this.props.clickMore(this.props.listPage)
                // 关闭判断执行开关
                this.setState(
                    {
                        codeType: false,
                    }
                );
            }
        
        } else {
            // 打开判断执行开关
            this.setState({
                codeType: true
            });
        }
    }
}
const mapStateToProps = (state) =>({
    listPage:state.getIn(['home','listPage']),    
    swiperPic : state.getIn(['home', 'swiperPic']),
    isShow: state.getIn(['home', 'isShow']),    //箭头
    articleList: state.getIn(['home', 'articleList']),
    recommend: state.getIn(['home', 'recommend']),
    qrCodeShow: state.getIn(['home', 'qrCodeShow']),
    writer:state.getIn(['home', 'writer'])
})
const mapDispatch = (dispatch) =>({
    changeHomeDt(articleList) {
        console.log(articleList.size);
        if(!articleList.size){
            dispatch(getHomeDt());
        }
    },
    clickMore(page) {
        dispatch(getMoreList(page));
    }
})
export default connect(mapStateToProps, mapDispatch)(Home)