import React, { Component } from 'react'
import * as style from '../style'
import { connect } from 'react-redux'
import { QRshow, QRdown } from '../store/actionCreator'
import ewmPic from '../../../static/ewm.png'
class Recommend extends Component {
    render() {
        const { rec, qrShow, handleQrShow, handleQrDown } = this.props;
        return (
            <div style= {{position:'relative'}}>
                <style.recWrapper>
                    {
                        rec.map((item, index)=> {
                            return(
                                <style.recItem key= {index} src= {item} />
                            )
                        })
                    }
                </style.recWrapper>
                <style.Propaganda 
                    onMouseEnter = { handleQrShow }
                    onMouseLeave = { handleQrDown }
                >
                    <img className="qrcode" src={`${ewmPic}`} alt="Download index side qrcode" />
                    <div className="info">
                        <div className="title">下载简书手机App</div>
                        <div className="description">随时随地发现和创作内容</div>
                    </div>
                </style.Propaganda>
                <style.bigQR style= {{display: qrShow ? 'block' :'none'}}>
                    <img src={`${ewmPic}`} alt="Download index side qrcode"/>
                </style.bigQR>
            </div>
        )
    }
}
const mapStateToProps = (state)=> ({
  rec:state.getIn(['home', 'recommend']),
  qrShow:state.getIn(['home', 'qrCodeShow'])
})
const mapDispatchToProps = (dispatch)=> {
    return{
        handleQrShow () {
            dispatch(QRshow());
        },
        handleQrDown () {
            dispatch(QRdown());

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
