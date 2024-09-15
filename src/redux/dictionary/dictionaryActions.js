import { SET_FORM_WORD, CLEAR_FORM_WORD } from './dictionaryTypes';

export const saveDictionaryWord = (formWords) => {
    return {
        type: SET_FORM_WORD,
        payload: formWords,
    };
};

export const clearDictionaryWord = () => {
    return {
        type: CLEAR_FORM_WORD,
    };
};