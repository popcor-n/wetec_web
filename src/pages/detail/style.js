import styled from 'styled-components';
export const DetailWrapper = styled.div`
  width:620px;
  margin:0 auto;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0,0,0,.08);
  border-radius: 15px;
  margin-bottom:20px;
  padding:50px 50px 100px 50px;
  a {
      text-decoration: none
  }
`
export const Header = styled.div`
    margin:50px 0 20px 0;
    line-height:44px;
    font-size:34px;
    color:#333;
    font-weight:bold;
`
export const author = styled.div`
    margin:50px 0 20px 0;
    line-height:44px;
    font-size:34px;
    color:#333;
    font-weight:bold;
`
export const Content = styled.div`
  color:#2f2f2f;
  img{
      max-width:620px;
      height:auto;
  }
  p{
    margin: 0 0 25px;
    font-size:16px;
    font-weight:400;
    line-height:1.7;
    b{
        font-weight:700;
    }
  }
  hr{
    margin: 0 0 20px;
    border: .5px solid #ddd;
    ${'' /* border:0;     */}
    box-sizing: content-box;
    height: 0;

  }
`;
export const LikeBox = styled.div`
  position:fixed;
  right:50px;
  .likeIcon{
    position:relative;
    top:10px;
    margin-left:10px;
    cursor:pointer;
  }
`;
export const bottom = styled.div`
  position: fixed;
  bottom: 0px;
  border-top:1px solid #f0f0f0;
  width: 100%;
  ${'' /* height: 56px; */}
  box-shadow: 0 -2px 10px rgba(0,0,0,.05);
  background: #fff
`
export const bottomInner = styled.div`
  display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: content-box;
    width: 1000px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
`;
export const ipWrapper = styled.div`
  display: flex;
    position: relative;
    height: 40px;
    &.focused{
      height: 60px;
    }
`
export const textArea = styled.textarea`
  display: inline-flex;
  width: 400px;
  resize: none;
  margin-right: 16px;
  padding: 8px 18px;
  border-radius: 18px;
  border: none;
  transition: all .2s cubic-bezier(.19,.4,.17,.85);
  background-color: #f2f2f2;
  overflow: none;
  outline: none;
  font-size: 14px
  &.focused{
      width:460px;
  }
`
export const comChoBox = styled.div`
  button{
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
    margin-right:20px
    &.publish{
      color: #fff;
      background-color: #ec7259;
      border-color: #ec7259;
      
    }
    &.cancel {
      color: #969696;
      background-color: #fff;
      border: 1px solid #999;
    }
  }

`
export const comList = styled.div`
  margin-top:300px;
  h3{
    font-size: 18px;
    font-weight: 500;
    color:#888;
  }
  .listItem {
    p {
      font-family: monospace;
      font-size: 15px
    }
    div{
      font-size: 16px;
      font-family: serif;
      margin-bottom: 50px;
    }
  }

`
export const Author = styled.div`
  margin-bottom: 30px;
  color: #888;
  font-size: 20px;
`