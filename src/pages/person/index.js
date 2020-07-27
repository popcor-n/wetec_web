import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as style from './style'
import * as action from './store/actionCreator'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import * as LoginAction  from '../login/store/actionCreator'

class Person extends Component {
    render() {
        const { list, listPage, clickMore, pName, pEmail, uEmail, handleDel, isMine, backValue, handleValueChange, userId  } = this.props;
        return (
            <style.PersonWrapper>
                <style.PersonHeader>
                    <span>{pName}</span>
                    <span className= 'email'>{this.props.match.params.useremail}</span>
                    <style.Pic />
                </style.PersonHeader>
                <style.PersonLeft>
                    <span>发表的文章</span>
                    <div className= 'listItem'>
                        {
                            list.map((item,index)=> {
                            return(
                                    <style.ListItem key= {index}>
                                        <Link to= {`/detailPage/${item.id}`}>
                                            <img className= "listPic" src= {item.imgUrl} alt= '' />
                                            <style.ListInfo>
                                                <h3>{item.title}</h3>
                                                <p>{item.content}</p>
                                            </style.ListInfo>
                                        </Link>
                                        {handleDel(pEmail, uEmail, item.id, window.localStorage.getItem('userToken'))}
                                    </style.ListItem>
                            )
                        })}
                        <style.ListMore
                            onClick= { ()=> clickMore(listPage) }
                        >阅读更多</style.ListMore>
                    </div>
                </style.PersonLeft>
                {isMine(pEmail, uEmail, backValue, handleValueChange, userId)}
            </style.PersonWrapper>
        )
    }
    componentDidMount() {
        this.props.getList(this.props.list, this.props.match.params.useremail);
        this.props.setpEmail(this.props.match.params.useremail);
        this.props.getUser(this.props.match.params.useremail);
        if(!this.props.login)
            this.props.doGetLog(window.localStorage.getItem('userName'), window.localStorage.getItem('userToken'), window.localStorage.getItem('useremail'));
    }
}

const mapStateToProps = (state)=> ({
    list:state.getIn(['person','articleList']),
    listPage:state.getIn(['person','listPage']),
    pName: state.getIn(['person', 'userName']),
    pEmail:state.getIn(['person', 'userEmail']),
    login:state.getIn(['login','login']),
    uEmail: state.getIn(['login', 'email']),
    backValue:state.getIn(['person', 'backValue']),
    userId: state.getIn(['login', 'id'])
})
const mapDispatchToProps = (dispatch)=> ({
    clickMore(page) {
        // dispatch(getMoreList(page));
    },
    getList(list, email) {
        if(!list.size){
            dispatch(action.getList(email));
        }
    },
    getUser(email) {
        dispatch(action.getUser(email))
    },
    doGetLog(name, id, email) {
        dispatch( LoginAction.changeLogState(name, id, email))
    },
    setpEmail(email) {
        dispatch(action.setpEmail(email))
    },
    handleDel(pemail, uemail, id, user) {
        if(pemail === uemail) {
            return(
                <button
                    onClick= {()=>dispatch(action.deleteArt(id, user, uemail))}
                >删除文章</button>
            )
        }
    },
    isMine(pEmail, uEmail, backValue, handleValueChange, userId) {
        if(pEmail === uEmail) {
            return(
                <style.RightWrapper>
                    <style.PersonRight placeholder= '欢迎给我们反馈 ☺'
                        onChange={handleValueChange}
                        value= {backValue}
                    ></style.PersonRight>
                    <style.BtReback
                        onClick={() => dispatch(action.publichBack(backValue, userId))}
                    >
                        提交
                    </style.BtReback>
                </style.RightWrapper>
            )
        }
    },
    handleValueChange(e) {
        dispatch(action.handleValueChange(e.target.value))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Person))
