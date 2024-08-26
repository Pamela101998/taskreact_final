import { SET_FORM_DATA } from './formTypes';
import { SET_USERNAME } from './formTypes';

export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
}

export const setUsername = (formData) => {
    return {
        type: SET_USERNAME, 
        payload: formData.username, 
    }
}