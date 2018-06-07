import { combineReducers } from 'redux'
import categoriesReducer from './categoriesReducer'

const state = combineReducers({
  state: 'state',
  categories: categoriesReducer
})

export default state
