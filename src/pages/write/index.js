import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import  * as action from './store/actionCreator'
import * as style from './style'
import * as LoginAction  from '../login/store/actionCreator'
import E from 'wangeditor'
class Write extends Component {
    constructor(){
        super();
        this.state = {
            editorContent:'',
        }
        this.myRef=React.createRef();
    }
    render() {
        if(this.props.login){
            return (
                <style.WriteWrapper>
                    <style.WriteLeft>
                    <Link to = './'>                    
                        <style.WriteBack>
                            回到首页
                        </style.WriteBack>
                    </Link>
                    <style.WriteType ref={this.myRef}>
                        {
                            this.props.typeList.map((item, index)=> {
                                return(
                                    <style.WTypeItem 
                                        id= {index} 
                                        key= {index}                                            
                                        onClick= {(e) => {this.props.choTItem(e,this.myRef)}}
                                    >{item}
                                    </style.WTypeItem>
                                )
                            })
                        }
                    </style.WriteType>
                    <style.Submit onClick= {()=> this.props.publishArticle(this.props.typeList,this.props.chos, this.props.title, this.props.content, this.props.user)} >发布文章</style.Submit>
                        
                    </style.WriteLeft>
                    <style.WriteRight>
                        <style.WriteTitle placeholder= '请输入文章标题' value= {this.props.title}
                            onChange= {this.props.handleTitleChange}
                        ></style.WriteTitle>
                        <style.EditorHead ref="editorElemMenu" className="editorElem-menu">
                        </style.EditorHead>
                        <style.EditorContent
                            ref="editorElemBody" className="editorElem-body">
                        </style.EditorContent>
                    </style.WriteRight>
                    
                </style.WriteWrapper>
      
            )
            
        }else{
            return <Redirect to= './login' />
        }
        
    }
    componentDidMount() {
        if(this.props.login){
            const elemMenu = this.refs.editorElemMenu;
            const elemBody = this.refs.editorElemBody;
            if(this.props.chos){
                this.myRef.current.children[Number(this.props.chos)].classList.add('chose');
            }
            const editor = new E(elemMenu,elemBody);
            let contants;
            editor.customConfig.onchange = (html) => {
                contants = editor.txt.html();
                this.props.handleContentChange(contants)
            }
            editor.customConfig.menus = [
                'head',  // 标题
                'bold',  // 粗体
                'fontSize',  // 字号
                'fontName',  // 字体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'quote',  // 引用
                'emoticon',  // 表情
                'image',  // 插入图片
                'table',  // 表格
                'video',  // 插入视频
                'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
            ]
            editor.customConfig.uploadImgShowBase64 = true
            editor.create();
            editor.txt.html(this.props.content);
        } else {
            if(window.localStorage.getItem('userName')) {
                this.props.doGetLog(window.localStorage.getItem('userName'), window.localStorage.getItem('userToken'), window.localStorage.getItem('useremail'));
            }
        }
    };

}
const mapStateToProps = (state) => ({
    login:state.getIn(['login', 'login']),
    name:state.getIn(['login', 'name']),
    typeList:state.getIn(['write', 'typeList']),
    chos:state.getIn(['write', 'chosedItem']),
    content:state.getIn(['write', 'content']),
    title:state.getIn(['write', 'title']),
    user:state.getIn(['login', 'id'])
});
const mapDispatchToProps = (dispatch) => ({
    choTItem:(e, ref)=> {
        const index = e.target.id;
        dispatch(action.choTypeItem(index));
        ref.current.childNodes.forEach((item, i, obj) => {
            if(item.classList.contains('chose')){
                item.classList.remove('chose')
            }
        })
        ref.current.childNodes[index].classList.add('chose');
    },
    handleContentChange: (contents)=> {
        dispatch(action.setContent(contents));//本来只写了内容区 后加上了其他信息 暂不改名
    },
    handleTitleChange: (e)=> { 
        // console.log(value);
        dispatch(action.setTitle(e.target.value));
    },
    publishArticle:(type,chos,title,content,user)=> {
        if(type && chos && title && content && user){
            dispatch(action.publish(type,chos,title,content,user));
        }
        else
            alert('需要补充文章必填内容哦');
            
    },
    doGetLog(name, id, email) {
        dispatch( LoginAction.changeLogState(name, id, email))
    }
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Write)
