import { combineReducers } from 'redux'
import main from './main'
import oneItem from './oneItem'
import likes from './likes'


export default combineReducers({
    main,
    oneItem,
    likes
})