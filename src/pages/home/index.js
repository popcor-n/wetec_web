import React, { Component } from 'react'
import * as style from './style'
import Swiper from './components/swiper'
import List from './components/List'
import { connect } from 'react-redux'
import { getHomeDt, getMoreList } from './store/actionCreator'
import ParticlesBg from 'particles-bg'
import * as LoginAction  from '../login/store/actionCreator'
import NameList from './components/NameList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeType:true
        }
        this.bindHandleScroll = this.bindHandleScroll.bind(this)
    }
    // state= {
    //     codeType:true
    // }
    render() {
        return (
            <style.HomeWrapper ref='homeWrapper'>
                <style.HomeLeft>
                    <Swiper />
                    <List />
                </style.HomeLeft>
                <style.HomeRight>
                    <NameList />
                    {/* <Recommend />
                    <Writer/> */}
                </style.HomeRight>
                <ParticlesBg type="line" bg={true} />
            </style.HomeWrapper>
        )
    }
    componentDidMount() {
        // 发送请求数据action
        this.props.changeHomeDt(this.props.articleList);
        window.addEventListener('scroll', this.bindHandleScroll)
        if(!this.props.islogin) {
            if(window.localStorage.getItem('userName')) {
                this.props.doGetLog(window.localStorage.getItem('userName'), window.localStorage.getItem('userToken'), window.localStorage.getItem('useremail'));
            }
        }
        this.refs.homeWrapper.lastChild.style.position = 'fixed';
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
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
    writer:state.getIn(['home', 'writer']),
    islogin: state.getIn(['login', 'login']),
})
const mapDispatch = (dispatch) =>({
    changeHomeDt(articleList) {
        if(!articleList.size){
            dispatch(getHomeDt());
        }
    },
    clickMore(page) {
        dispatch(getMoreList(page));
    },
    doGetLog(name, id, email) {
        dispatch( LoginAction.changeLogState(name, id, email))
    }
})
export default connect(mapStateToProps, mapDispatch)(Home)