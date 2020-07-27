import React, { Component } from 'react'
import * as style from './style'
import { connect } from 'react-redux'
import { getHomeDt, getMoreList, changeIn } from './store/actionCreator'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import * as LoginAction  from '../login/store/actionCreator'
import ParticlesBg from 'particles-bg'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeType:true
        }
        this.bindHandleScroll = this.bindHandleScroll.bind(this)
    }
    render() {
        const { isIn, articleList, listPage, clickMore } = this.props;
        return (
                <style.HomeWrapper ref='wrapper'>
                    <style.List>
                    {
                        articleList.map((item,index)=> {
                        return(
                            <Link key= {index} to= {`/detailPage/${item.get('id')}`}>
                                <style.ListItem>
                                    <img className= "listPic" src= {item.get('imgUrl')} alt= '' />
                                    <style.ListInfo>
                                        <h3>{item.get('title')}</h3>
                                        <p>{item.get('content')}</p>
                                    </style.ListInfo>
                                </style.ListItem>
                            </Link>
                        )
                    })}
                    <style.ListMore
                        onClick= { ()=> clickMore(listPage, this.props.match.params.value) }
                    >阅读更多</style.ListMore>
                </style.List>
                <ParticlesBg type="fountain" bg={true} />
            
            </style.HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeDt(this.props.articleList, this.props.match.params.value);
        this.props.changeIn(this.props.isIn)
        window.addEventListener('scroll', this.bindHandleScroll)
        if(!this.props.islogin) {
            if(window.localStorage.getItem('userName')) {
                this.props.doGetLog(window.localStorage.getItem('userName'), window.localStorage.getItem('userToken'), window.localStorage.getItem('useremail'));
            }
        }
        this.refs.wrapper.lastChild.style.position = 'fixed';
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
        this.props.changeIn(this.props.isIn)        
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
                this.props.clickMore(this.props.listPage, this.props.match.params.value)
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
const mapStateToProps = (state)=> ({
    articleList:state.getIn(['search','articleList']),
    listPage:state.getIn(['search','listPage']),
    islogin: state.getIn(['login', 'login']),
    title: state.getIn(['search', 'title']),
    isIn: state.getIn(['search', 'isIn'])
})
const mapDispatchToProps = (dispatch)=> ({
    clickMore(page, value) {
        dispatch(getMoreList(page, value));
    },
    changeHomeDt(articleList, value) {

        dispatch(getHomeDt(value));
        
    },
    doGetLog(name, id, email) {
        dispatch( LoginAction.changeLogState(name, id, email))
    },
    changeIn(value) {
        dispatch(changeIn(value))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search))
