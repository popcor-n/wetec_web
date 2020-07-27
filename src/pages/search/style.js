import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  height:300px;
  z-index:0;
`;
export const List = styled.div`
  width:625px;
  margin-left:15px;
  padding-top:30px;
  float:left;
`
export const ListItem = styled.div`
  margin:10px 0;
  border-radius: 10px;
  background:#fff;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  box-shadow: 0 0 14px 0 rgba(0,0,0,.08);
  a{
    text-decoration: none;
    :hover{
      text-decoration:underline;
    }
  }
  .listPic{
    display:block;
    width:100px;
    height:100px;
    float:right;
    border-radius:10px;
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
    margin-left:10px
  }
  p{
    font-size:13px;
    line-height:24px;
    color:#999;
    margin-left: 10px;
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