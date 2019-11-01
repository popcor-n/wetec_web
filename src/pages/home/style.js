import styled from 'styled-components';
export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  height:300px;
  z-index:0;
`;
export const HomeLeft = styled.div`
  width:625px;
  margin-left:15px;
  padding-top:30px;
  float:left;
  ${'' /* border:1px solid black; */}
  .swiper-slide{
      width:625px;
      height:270px;
  }
  .swiper-pagination-ol{
    position: absolute;
    bottom: -2px;
    left: 50%;
    z-index: 15;
    width: 60%;
    margin-left: -30%;
    padding-left: 0;
    list-style: none;
    text-align: center;
    .swiper-pagination-customs{
        width: 25px;
        height: 3px;
        background-color: hsl(73, 25%, 63%);
        transition: .3s ease-in;
        display: inline-block;
        margin: 3px;
        text-indent: -999px;
        border: 1px solid #fff;
        border-radius: 10px;
        ${'' /* cursor: pointer; */}
        border:none;
    }
    .swiper-pagination-customs-active{
        width: 25px;
        height: 2px;
        background-color: #fff;
    }
  }

`;
export const HomeRight = styled.div`
  width:240px;
  float:right;
  padding: 30px 0 0;
  margin-left: 4.16667%;
  position:relative;
  left:-40px;
`;
// list
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
//right
export const recWrapper = styled.div`
  width:280px;
  height:228px;
  margin-top:-4px;
  padding-bottom: 4px;
  min-height: 228px;
  margin-bottom:10px;
`;
export const recItem = styled.img`
  width: 100%;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
`;
export const Propaganda = styled.a`
  display:block;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85; 
  } .info {
    display: inline-block;
    position:relative;
    top:-13px;
    margin-left: 7px;
  }.title {
    font-size: 15px;
    color: #333;
  }.description {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`;
export const bigQR = styled.div`
  width:184px;
  height:184px;
  position:absolute;
  background-color: #fff!important;
  top:44px;
  left:48px;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
  img{
    width:164px;
    height:164px;
    padding:10px;
  }
`;
export const writerWrapper = styled.div`
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
  width:280px;
  height:329.2px;
`;
export const writerTitle = styled.div`
  height:20px;
  span{
    float:left;
    font-size: 14px;
    color: #969696;
  }
  .pageChange{
    float:right;
    display: inline-block;
    font-size: 14px;
    color: #969696;
    .spin{
      position:relative;
      top:3px;
      left:-5px;
    }
  }
`
export const writerList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
  height:295px;
  padding:0;
  li{
    margin-top:15px;
    line-height:20px;
    ${'' /* width:280px; */}
    height:47px;
    .avatar{
      float: left;
      width: 48px;
      height: 48px;
      margin-right: 10px;
      img{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
      }
    }
    .follow{
      float: right;
      margin-top: 5px;
      padding: 0;
      font-size: 13px;
      color: #42c02e;
    }
    .name{
      padding-top: 5px;
      margin-right: 60px;
      font-size: 14px;
      display: block;
      color:#333;
      text-decoration: none;
    }
    p{
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
      margin:0 0 10px;
    }
  }
`;