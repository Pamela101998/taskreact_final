import { SET_FORM_WORD } from './dictionaryTypes';
import { CLEAR_FORM_WORD } from './dictionaryTypes';


const initialState = {
    formWords: {
        español: '',
        ingles: '',
        portugues: '',
    },
};

const dictionaryReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        
        case SET_FORM_WORD : {
            return {
                ...state,
                formWords: action.payload
            }
        }
      

            case CLEAR_FORM_WORD:
                return {
                    ...state,
                    formWords: {
                        español: '',
                        ingles: '',
                        portugues: '',
                    },
                };
        default:
            return state;
    }
};

export default dictionaryReducer;