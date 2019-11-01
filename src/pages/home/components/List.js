import React, { Component } from 'react'
import * as style from '../style'
import { connect } from 'react-redux'
import { getMoreList } from '../store/actionCreator'
import { Link } from 'react-router-dom'
class List extends Component {
    render() {
        const { list, listPage, clickMore } = this.props;
        return (
                <div className= 'listItem'>
                {
                    list.map((item,index)=> {
                    return(
                        <Link key= {index} to= {`/detailPage/${item.get('id')}`}>
                            <style.ListItem>
                                <img className= "listPic" src= {item.get('imgUrl')} alt= '' />
                                <style.ListInfo>
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('content')}</p>
                                </style.ListInfo>
                            </style.ListItem>
                        </Link>
                    )
                })}
                <style.ListMore
                    onClick= { ()=> clickMore(listPage) }
                >阅读更多</style.ListMore>
            </div>
        )
    }
}
const mapStateToProps = (state)=> ({
    list:state.getIn(['home','articleList']),
    listPage:state.getIn(['home','listPage'])
})
const mapDispatchToProps = (dispatch)=> ({
    clickMore(page) {
        dispatch(getMoreList(page));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(List)
