import { combineReducers } from 'redux'

const initialState = {
  categories: {
    pizza: ['margherita', 'capriciosa', 'hawajska'],
    burgers: ['maly', 'sredni', 'duzy'],
    frites: ['male', 'srednie', 'duze'],
    drinks: ['cola', 'pepsi', 'mirynda']
  }
}

const categories = (state = initialState.categories, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const categoriesReducer = combineReducers({
  categories
})

export default categoriesReducer
