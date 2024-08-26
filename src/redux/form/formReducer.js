import { SET_FORM_DATA } from './formTypes';
import { SET_USERNAME } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            }
        }
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload, 
            };
        default:
            return state;
    }
};

export default formReducer;