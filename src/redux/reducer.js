import { combineReducers } from 'redux';

import defaultReducer from "./default/defaultReducer";
import productReducer from './product/productReducer';
import formReducer from './form/formReducer';
import dictionaryReducer from './dictionary/dictionary1Reducer';

const rootReducer = combineReducers ({
    default: defaultReducer,
    product: productReducer,
    form: formReducer,
    librito: dictionaryReducer

});

export default rootReducer;