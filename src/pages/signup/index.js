import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import * as style from './style'
import { connect } from 'react-redux'
import * as action from './store/actionCreator'
class Signup extends Component {
    render() {
        if(!this.props.login){
            const { code, email, nick, pass, getCode, handleNumberChange, handleCodeChange, handleNickChange,handlePassChange, signUp } = this.props;
            return (
                <style.LoginWrapper>
                    <style.Logo>
                        <Link to='/'>
                            <style.LogoPic />
                        </Link>
                    </style.Logo>
                    <style.Main>
                        <h4 className='title'>
                            <Link to='/login' className='login'>登录</Link>
                            <b>.</b>
                            <Link className='active' to='/signup'>注册</Link>
                        </h4>
                        <style.Input>
                            <span className="iconfont">
                                <svg t="1571316484141" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2753" width="200" height="200"><path d="M873.8 225.2 150.1 225.2c-28.8 0-52.2 23.4-52.2 52.2l0 469.1c0 28.8 23.4 52.2 52.2 52.2l723.7 0c28.8 0 52.3-23.4 52.3-52.2L926.1 277.5C926.1 248.7 902.6 225.2 873.8 225.2zM885.2 266.1l0 491.8L138.8 757.9 138.8 266.1 885.2 266.1z" p-id="2754"></path><path d="M168.9 327.3 168.9 327.3l314.4 278.2c7.9 6.8 18 10.6 28.7 10.6 10.6 0 20.8-3.8 28.7-10.6L855 327.2c8.9-7.8 9.8-21.4 2-30.2-7.8-8.9-21.4-9.8-30.3-2L512.6 573.2c-0.2 0.1-0.8 0.1-1 0L197.2 295.1c-8.9-7.8-22.4-6.9-30.2 2-3.8 4.3-5.7 9.8-5.3 15.5C162 318.3 164.6 323.6 168.9 327.3z" p-id="2755"></path></svg>
                            </span>
                            <input placeholder='邮箱' type='text' id='number'
                                onChange={handleNumberChange}
                            />
                            <style.GetCodeBt onClick={() => getCode(email)} >获取邮箱验证码</style.GetCodeBt>
                        </style.Input>
                        <style.Input>
                            <span className="iconfont">
                            <svg t="1571316803050" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4235" width="200" height="200"><path d="M895.744 273.28a59.2 59.2 0 0 0-46.72-51.936A1103.36 1103.36 0 0 1 697.92 186.56a561.28 561.28 0 0 1-135.008-78.912 61.76 61.76 0 0 0-72.16 0 354.112 354.112 0 0 1-136.032 78.4 507.264 507.264 0 0 1-146.944 36.32 55.04 55.04 0 0 0-46.208 51.936S160 404.64 160 519.36C160 727.04 405.056 928 527.616 928c122.528 0 330.24-141.76 363.456-405.504 8.32-155.776 2.56-248.704 2.56-248.704l2.112-0.544z m-133.44 160.416l-256 241.44c-11.52 10.976-29.12 12.704-42.56 4.16l-6.72-5.728-141.248-146.912a35.264 35.264 0 0 1 51.904-47.776L484 600.896l230.528-218.08a35.264 35.264 0 1 1 47.776 51.936v-1.056z" p-id="4236"></path></svg>
                            </span>
                            <input placeholder='验证码' type='text' id='code' 
                                onChange={handleCodeChange}
                            />
                        </style.Input>
                        <style.Input>
                            <span className="iconfont">
                            <svg t="1571316725083" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3489" width="200" height="200"><path d="M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" p-id="3490"></path></svg>
                            </span>
                            <input placeholder='你的昵称' type='text' id='nick' 
                                onChange={handleNickChange}
                             />
                        </style.Input>
                        <style.Input>
                            <span className="iconfont">&#xe620;</span>
                            <input placeholder='密码' type='password' id='password' 
                                onChange={handlePassChange}
                             />
                        </style.Input>
                        <style.Button onClick= {()=>signUp(code, email, nick, pass)}>注册</style.Button>
                    </style.Main>
                </style.LoginWrapper>
            )
        }else{
            return(
                <Redirect to= '/' />
            )
        }

    }
}
const mapStateToProps = (state) => ({
    email: state.getIn(['signup', 'email']),
    code: state.getIn(['signup', 'code']),
    nick: state.getIn(['signup', 'nick']),
    pass: state.getIn(['signup', 'pass']),
    login:state.getIn(['login', 'login']),
});
const mapDispatchToProps = (dispatch) => ({
    handleNumberChange: (e) => {
        dispatch(action.setNumberChange(e.target.value))
    },
    handleCodeChange: (e) => {
        dispatch(action.setCodeChange(e.target.value))
    },
    handleNickChange: (e) => {
        dispatch(action.setNickChange(e.target.value))
    },
    handlePassChange: (e) => {
        dispatch(action.setPassChange(e.target.value))
    },
    getCode: (number) => {
        dispatch(action.getCode(number))
    },
    signUp:(code, email, nick, pass)=> {
        dispatch(action.signUp(code, email, nick, pass))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Signup)


