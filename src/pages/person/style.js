import styled from 'styled-components';
import message from '../../static/message.png'

export const ListItem = styled.div`
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  a{
    text-decoration: none;
    :hover{
      text-decoration:underline;
    }
  }
  .listPic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
  button {
    position: relative;
    flex-shrink: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;user-select: none;
    transition: all .2s cubic-bezier(.645,.045,.355,1);
    font-size: 14px;
    padding: 4px 12px;
    border: 1px solid #999;
    outline: none;
    margin-right:20px;
    color: #fff;
      background-color: #ec7259;
      border-color: #ec7259;
  }
`;
export const ListInfo = styled.div`
  width:500px;
  float:right;
  h3{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
  }
  p{
    font-size:13px;
    line-height:24px;
    color:#999;
  }
`;
export const ListMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  margin:30px 0;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
`;
export const PersonWrapper = styled.div`
  width:1000px;
  margin:0 auto;
  height:300px;
  z-index:0; 
`
export const PersonLeft = styled.div`
  width:625px;
  margin-left:15px;
  padding-top:30px;
  float:left;
  span {
    font-size: 20px;
    font-family: monospace;
  }
`
export const PersonHeader = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 20px;
  box-shadow: 0 0 14px 0 rgba(0,0,0,.08);
  boder-radius: 10px;
  span{
    position: relative;
    top: 40%;
    font-size: 25px;
    color: #ea6f5a;
    margin: 30px;
    &.email{
        color: #888;
        font-size: 20px
    }
  }
`
export const Pic = styled.div`
  background-image:url(${message});
  width: 300px;
    height: 50px;
    position: relative;
    float: right;
    top: 60%;
    right: 10%;
    background-repeat: no-repeat;
`
export const PersonRight = styled.textarea`
    height: 400px;
    padding: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #efefef;
    background-image:   linear-gradient(#e7e6e6 1px, transparent 0),
                        linear-gradient(90deg, #e7e6e6 1px, transparent 0);
    background-size: 21px 21px, 21px 21px;
    background-position: center;
    :before, :after {
        content: '';
    position: absolute;
    z-index: 0;
    transform: translateX(-50%);
    display: inline-block;
    background-color: #fff;
    height: 28px;
    box-shadow: 68px 0 0 0 #fff, 
                calc(68px * 2) 0 0 0 #fff, 
                calc(68px * 3) 0 0 0 #fff, 
                calc(68px * 4) 0 0 0 #fff, 
                calc(68px * 5) 0 0 0 #fff, 
                -68px 0 0 0 #fff, 
                calc(68px * -2) 0 0 0 #fff, 
                calc(68px * -3) 0 0 0 #fff, 
                calc(68px * -4) 0 0 0 #fff, 
                calc(68px * -5) 0 0 0 #fff;
    }
    width: 100%;
    height: 400px;
    outline: none;
    border: none;
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: 0 0 14px 0 rgba(0,0,0,.08);
    font-size: 15px;
    font-family: serif;
`
export const RightWrapper = styled.div`
    width: 33%;
    float: right;
`
export const BtReback = styled.button`
    position: relative;
    flex-shrink: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;user-select: none;
    transition: all .2s cubic-bezier(.645,.045,.355,1);
    font-size: 14px;
    padding: 4px 12px;
    border: 1px solid #999;
    outline: none;
    margin-right:20px;
    color: #888;
    background-color: #fff;
    border-color: #ec7259;
    float: right;
    margin-top: 20px; 
`