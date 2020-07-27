import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper  = styled.div`
    height:56px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
`;
export const Logo = styled.div`
    height:56px;
    position:absolute;
    top:0;left:20px;
    display:block;
    width:100px;
    background-image:url(${logoPic});
    background-size:340px;
    background-repeat:no-repeat
`;
export const Nav = styled.div`
  position:relative;
  width:960px;
  height:100%;
  margin: 0 auto;
  .slide-enter{
    transition:all .2s ease-in
  }
  .slide-enter-active{
    width:300px;
  }
  .slide-exit{
    width:300px;
    transition:all .2s ease-in      
  }
  .slide-exit-active {
    width:240px
  }
  a {
    text-decoration: none
  }
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
  &.left{
        float:left;
        color:#6f6d6d;
        margin-right:30px;
        &.col{
        color:#ea6f5a;
        }
        font-size:17px;
  }
  &.right{
      float:right;
      color:#969696;
      span{
          ${'' /* Aa */}
          font-size:20px;
          cursor:pointer;
        }
        &.login{
          cursor:pointer;
        }
  }
  a{
    text-decoration:none;
  }
  .logIn{
    color: #969696;
  }
`;
export const NavSearch = styled.input`
  padding: 0 40px 0 20px;
    width: 240px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    outline:none;
    margin-top:9px;
    box-sizing:border-box;
    color:#999;
    &.focused{
        width:300px;
    }
`;
export const Span = styled.span`
  position:relative;
  left:-33px;
  color:#999;
  cursor:pointer;
  border-radius:15px;
  width:30px;
  line-height:30px;
  text-align:center;
  padding:4px;
  font-size:18px!important;
  &.focused{
      background-color:#969696;
      color:#fff;
  }
`;
export const SearchInfo = styled.div`
  position:absolute;
  left:93px;
  top:56px;
  width:210px;
  padding: 0 20px;
  ${'' /* height:159px; */}
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  z-index:2;
  a{
    cursor: pointer;
  }
  :after{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
    box-sizing: border-box;}
`;
export const SearchIfTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;
export const SearchIfSwitch = styled.a`
  float:right;
  font-size:13px;
  color: #969696;
  background-color: transparent;
  border-width: 0;
  padding: 0;
  :hover{
    color: #2f2f2f;
  }
  .spin{
    display:block;
    float:left;
    position:relative;
    top:1px;
    left:-5px;
    font-size:12px;
    transition:all .2s ease-in;
    ${'' /* transform:rotate(50deg); */}
    transform-origin:center center;
  }
`;
export const SearchIfItem = styled.a`
  line-height:20px;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
  margin-right:10px;
  margin-bottom:20px;
  display:block;
  float:left;
  :hover{
    color:#333;
    border-color:#b4b4b4;
  }
`;
export const HeadRight = styled.div`
  position:absolute;
  top:0;
  right:50px;
`;
export const Sign = styled.div`
  position:relative;
  left:100px;
  .signUp{
    margin-left:30px;
  }
`;
export const Button = styled.div`
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    float: right;
    width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
    padding: 6px 12px;
    cursor:pointer;
    box-sizing:border-box;
    &.write-btn{
        float: right;
        width: 100px;
        height: 40px;
        line-height: 24px;
        margin: 8px 12px 0;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;
        span{
            margin-right:10px;
        }
    }    
`;
export const Name = styled.span`
  position:relative;
  left:70px;
  color:#ea6f5a
`;