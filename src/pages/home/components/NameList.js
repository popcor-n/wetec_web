import React, { Component } from 'react'
import * as style from '../style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NameList extends Component{
    render() {
        const { nameList } = this.props;
        return (
            <div className= 'listItem'>
                {
                    nameList.map((item,index)=> {
                    return(
                        <Link key= {index} to= {`/person/${item.get('email')}`}>
                            <style.NameListItem>
                                {/* <img className= "listPic" src= {item.get('imgUrl')} alt= '' /> */}
                                <div id= {'pic'+index} className= 'pic'>
                                    <div className= 'innerPic' />
                                </div>
                                <div className= 'itemName'>{item.get('name')}</div>
                            </style.NameListItem>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = (state)=> ({
    nameList:state.getIn(['home','nameList']),
})
const mapDispatchToProps = (dispatch)=> ({
    // clickMore(page) {
    //     dispatch(getMoreList(page));
    // }
})
export default connect(mapStateToProps, mapDispatchToProps)(NameList)