import styled from 'styled-components'
export const WriteWrapper = styled.div`
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:0px;
  background:#fff;
  z-index:1;
  height:100%;
  overflowY: hidden;
  
`;
export const EditorHead = styled.div`
  backgroundColor: #f1f1f1;
  border: 1px solid #ccc;
  width:100%;
  float:right;
  height:4%;
  box-sizing:border-box;
`;
export const EditorContent = styled.div`
  display:inline-block;
  padding: 0 10px;
  height:89%;
  width:100%;
  border: 1px solid #ccc;
  border-top:none;
  float:right;
  box-sizing:border-box;  
  
`;
export const WriteLeft = styled.div`
  background-color: #404040;
  height:100%;
  width:20%;
  display:inline-block;
  float:left
`;
export const WriteRight = styled.div`
  position:absolute;
  top:0;
  right:0;
  width:80%;
  height:100%;
  overflowY:hidden;
`;
export const WriteTitle = styled.input`
  border:none;
  width:100%;
  outline:none;
  height:7%;
  font-size:20px;
  color:#757575;
  padding-left:10px;
  box-sizing:border-box;
`;
export const WriteBack = styled.div`
  font-size: 15px;
  padding: 9px 0;
  color: #ec7259;
  border: 1px solid rgba(236,114,89,.8);
  border-radius: 20px;
  margin:100px auto;
  width:200px;
  text-align:center;
`;
export const WriteType = styled.ul`
  width:75%;
  border-radius:20px;
   .chose{
    background-color: #666;
  }
`;
export const WTypeItem = styled.li`
  border-radius:20px;
  position:relative;
  line-height: 40px;
  list-style: none;
  font-size: 15px;
  color: #f2f2f2;
  background-color: #404040;
  padding: 0 15px;
  cursor: pointer;
  padding-left:50px;
`;
export const Submit = styled.div`
  font-size: 15px;
  padding: 9px 0;
  color: #ec7259;
  border: 1px solid rgba(236,114,89,.8);
  border-radius: 20px;
  margin:100px auto;
  width:200px;;
  text-align:center;
`;

