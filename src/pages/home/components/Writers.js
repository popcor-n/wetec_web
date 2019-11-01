import React, { Component } from 'react'
import * as style from '../style'
import { connect } from 'react-redux'
class Writers extends Component {
    render() {
        const {writer} = this.props;
        return (
            <style.writerWrapper className= 'writer'>
                <style.writerTitle>
                    <span>推荐作者</span>
                    <a className= 'pageChange'>
                    <span  className="iconfont spin">&#xe673;</span>    
                    换一批</a>
                </style.writerTitle>
                <style.writerList>

                {
                     writer.map((item, index) =>{
                        return (
                            <li key= {index}>
                                <a href= {`${item.get('personUrl')}`} target="_blank" rel="noopener noreferrer" className="avatar">
                                    <img src= {`${item.get('picUrl')}`}/>
                                </a> 
                                <a className="follow" state="0">关注</a> 
                                <a href= {`${item.get('personUrl')}`} target="_blank" rel="noopener noreferrer" className="name">
                                    {`${item.get('name')}`}
                                </a> 
                                <p>写了{`${item.get('wordCount')}`}k字 · {`${item.get('likeCount')}`}k喜欢</p>
                            </li>
                        )
                    }) 
                }
                </style.writerList>
            </style.writerWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    writer:state.getIn(['home', 'writer'])
})

export default connect(mapStateToProps, null)(Writers)
