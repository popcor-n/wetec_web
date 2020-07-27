import axios from 'axios'
import * as constants from './constants'

export const changeLogState = (name,id, email)=> ({
    type:constants.ChangeLogState,
    name,
    id,
    email
})
export const setLoginData = (number, pass)=> {
    return(dispatch)=> {
        const data = {
            "useremail": number,
            "password": pass
        }
        axios.post('http://47.94.91.9:8080/user/login', data).then((res) => {
            axios.get(`http://47.94.91.9:8080/user/getuserinfo?email=${number}`).then((ress) => {
            })
        })
    }
}
