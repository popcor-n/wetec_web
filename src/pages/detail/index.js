import React, { Component } from 'react'
import * as style from './style'
import { connect } from 'react-redux'
import * as action from './store/actionCreator'
import * as LoginAction  from '../../pages/login/store/actionCreator'
import { withRouter } from 'react-router-dom'
import ParticlesBg from 'particles-bg'
import { Link } from 'react-router-dom'

class Detail extends Component {
    render() {
        const { title, content, isLike, likeCount, handleIsLike,author, clickLike, userId, id, handleComFocus, cancelComFocus, isFocus, thisCom, handleComChange, handlePublishCom, getComList, comList, personName, email } = this.props;
        return (
            <div>
                <style.DetailWrapper  ref= 'canvas'>
                    <style.Header>{title}</style.Header>
                    <Link to= {`/person/${email}`}>
                        <style.Author>{personName}</style.Author>
                    </Link>
                    {/* <style.author>{author}</style.author> */}
                    <style.Content dangerouslySetInnerHTML= {{__html:content}} />
                    <style.comList>
                        <h3>- 评论列表</h3>
                        {
                            comList.map((item, index) => {
                                return (
                                    <div key= 'index' className= 'listItem'>
                                        <p>{item.commentName + '   .   ' + item.commentPublcTime.slice(0, 10)}</p>
                                        <div>{item.commentContext}</div>
                                    </div>
                                )
                            })
                        }

                    </style.comList>
                    <ParticlesBg type="cobweb" bg={true}/>
                </style.DetailWrapper>
                <style.bottom>
                    <style.bottomInner>
                        <style.ipWrapper 
                            className= {isFocus ? 'focused' : ''}
                        >
                            <style.textArea placeholder= '请输入评论'
                                className= {isFocus ? 'focused' : ''}
                                onClick= {()=> handleComFocus(isFocus)}  
                                onChange= {handleComChange}
                                value= {thisCom}
                            ></style.textArea>
                            <style.comChoBox
                            >
                                <button className= 'publish'
                                    onClick = {() => handlePublishCom(thisCom, id, userId)}
                                >发布</button>
                                <button className= 'cancel'
                                    onClick = {cancelComFocus}
                                >取消</button>
                            </style.comChoBox>
                        </style.ipWrapper>
                        <style.LikeBox>
                            {`${likeCount}人点赞`}
                            {handleIsLike(isLike,clickLike,author, userId, id, title)}
                        </style.LikeBox>
                    </style.bottomInner>       
                </style.bottom>
            </div>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id, this.props.userId);
        this.refs.canvas.lastChild.style.position = 'fixed'
        // this.refs.canvas.lastChild.style.left = '25%'
        this.props.getComList(this.props.match.params.id)
        if(!this.props.islogin) {
            if(window.localStorage.getItem('userName')) {
                this.props.doGetLog(window.localStorage.getItem('userName'), window.localStorage.getItem('userToken'), window.localStorage.getItem('useremail'));
            }
        }
    }
}
const mapStateToProps = (state) => ({
    id:state.getIn(['detail', 'id']),
    author:state.getIn(['detail', 'author']),
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    isLike: state.getIn(['detail', 'isLike']),
    likeCount: state.getIn(['detail', 'likeCount']),
    isFocus: state.getIn(['detail', 'comFocused']),
    userId:state.getIn(['login', 'id']),
    thisCom: state.getIn(['detail', 'thisCom']),
    comList: state.getIn(['detail', 'comList']),
    islogin: state.getIn(['login', 'login']),
    personName: state.getIn(['detail', 'personName']),
    email:state.getIn(['detail', 'email'])
})
const mapDispatchToProps = (dispatch) => ({
    getDetail(id, user){
        dispatch(action.getDetail(id,user));
    },
    handleIsLike(isLike,clickLike,author, userId, id, title){
        if(isLike){
            return(
                <svg onClick= {()=> clickLike(isLike,author, userId, id, title)} t="1572230307112" className="likeIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2048" width="40px" height="40px"><path d="M257.8432 841.472H175.104a69.9904 69.9904 0 0 1-69.8368-69.9392v-368.64A69.9392 69.9392 0 0 1 175.104 332.8h99.6352a33.9968 33.9968 0 0 1 33.9456 35.2256L291.84 808.96a33.9968 33.9968 0 0 1-33.8944 32.5632zM200.6528 400.7936a27.648 27.648 0 0 0-27.5968 27.5456v317.696a27.6992 27.6992 0 0 0 27.5968 27.5968 25.6 25.6 0 0 0 25.6-24.5248l12.4416-321.8432a25.6 25.6 0 0 0-25.6-26.4704z m-25.6 0M918.6816 434.176a6.2464 6.2464 0 0 1 0 1.3824l-0.6656 6.144v1.0752l-66.56 300.1344a7.8848 7.8848 0 0 0 0 1.536 101.9904 101.9904 0 0 1-101.7344 97.024H398.6944a71.68 71.68 0 0 1-71.68-74.3424l14.0288-365.2608a71.68 71.68 0 0 1 71.68-69.0688H430.08a10.24 10.24 0 0 0 9.5232-6.7072l54.784-153.6a115.968 115.968 0 0 1 224.0512 55.4496l-13.3632 93.2864a10.24 10.24 0 0 0 10.24 11.5712h101.5808a101.9392 101.9392 0 0 1 101.7856 101.376z" fill="#d81e06" p-id="2049"></path></svg>
            )
        }else{
            return(
                <svg onClick= {()=> clickLike(isLike,author, userId, id, title)}  t="1572179322826" className="likeIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2066" width="40px" height="40px"><path d="M257.8432 875.0592H175.104a69.9904 69.9904 0 0 1-69.8368-69.9392v-368.64A69.9392 69.9392 0 0 1 175.104 366.592h99.6352a33.9968 33.9968 0 0 1 33.9456 35.2256L291.84 842.496a33.9968 33.9968 0 0 1-33.8944 32.5632zM200.6528 434.3808a27.648 27.648 0 0 0-27.5968 27.5456v317.696a27.6992 27.6992 0 0 0 27.5968 27.5968 25.6 25.6 0 0 0 25.6-24.5248L238.5408 460.8a25.6 25.6 0 0 0-25.6-26.4704z m-25.6 0M749.1072 875.0592H398.6944a71.68 71.68 0 0 1-71.68-74.3424l14.0288-365.2608a71.68 71.68 0 0 1 71.68-68.864H430.08a10.24 10.24 0 0 0 9.5232-6.7072l54.784-153.6a116.0192 116.0192 0 0 1 224.0512 55.4496l-13.3632 93.2864a10.24 10.24 0 0 0 10.24 11.5712h101.5808a101.9392 101.9392 0 0 1 101.8368 101.1712 6.2464 6.2464 0 0 1 0 1.3824l-0.6656 6.144v1.1264l-66.56 300.0832a7.8848 7.8848 0 0 0 0 1.536 101.9392 101.9392 0 0 1-101.7344 97.024z m-351.5392-142.1824a71.68 71.68 0 0 0 71.68 74.3424h280.0128A34.0992 34.0992 0 0 0 783.36 773.12l0.768-6.8096v-1.1264l66.56-298.0352a9.6256 9.6256 0 0 0 0-3.6352 34.1504 34.1504 0 0 0-33.6896-29.1328h-179.8144a10.24 10.24 0 0 1-10.24-11.5712l24.3712-170.6496a48.0768 48.0768 0 0 0-47.7184-54.9888 48.2304 48.2304 0 0 0-45.3632 32L487.5264 427.6224a10.24 10.24 0 0 1-9.5744 6.7584 71.68 71.68 0 0 0-71.68 68.8128z m-2.8672 74.3424" fill="#666666" p-id="2067"></path></svg>                
            )
        }
    },
    clickLike(isLike,author, userId, id, title){
        dispatch(action.handleLike(isLike, userId, id))
        // dispatch(action.changeLike(isLike));
    },
    handleComFocus(isFocus) {
        dispatch(action.handleComFocus(isFocus))
    },
    cancelComFocus() {
        dispatch(action.cancelComFocus())
    },
    handleComChange(e) {
        dispatch(action.setCom(e.target.value))
    },
    handlePublishCom(com, id, userId) {
        dispatch(action.publishCom(com, id, userId))
    },
    getComList(id) {
        dispatch(action.getComList(id))
    },
    doGetLog(name, id, email) {
        dispatch( LoginAction.changeLogState(name, id, email))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));