import styled from 'styled-components';
export const DetailWrapper = styled.div`
  width:620px;
  margin:0 auto;
  padding-bottom:100px;
`
export const Header = styled.div`
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
  bottom:100px;
  .likeIcon{
    position:relative;
    top:10px;
    margin-left:10px;
    cursor:pointer;
  }
`;