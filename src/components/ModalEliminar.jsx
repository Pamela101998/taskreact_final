import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { clearDictionaryWord } from '../redux/dictionary/dictionaryActions';
import ModalSuccess from './ModalSuccess';

const ModalEliminar = ({ visible, message, message2, onClose }) => {
    const [wordDelete, setModalAvisoVisible] = useState(false);

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(''); 

    const formWords = useSelector(state => state.librito.formWords); 

    
    const showModalAviso = () => {
        setModalAvisoVisible(true);
    };

    const closeModalAviso = () => {
        setModalAvisoVisible(false);
    };

    console.log(formWords)
    if (!visible) {
        return null;
    }
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const compararPalabra = () => {
        return Object.values(formWords).some(word => word === inputValue);
    };

    const onDeletee = () => {
        if(compararPalabra()){
            dispatch(clearDictionaryWord()); 
            showModalAviso(); 

        }else{
            alert('Palabra no encontrada')
        }
    }
    return (
        <div className="modal-overlay">


            <motion.div
                className="notification-success"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <h1>TRADUCTOR USIP</h1>
                    <p>{message} Que palabra desea eliminar del diccionario</p>
                    <h2>Puede escribir su palabra en ESPAÑOL, INGLÉS, PORTUGUÉS</h2>
                    <p>{message2}</p>
                    <h3>Palabra:</h3>
                    <input 
                        type="text" 
                        className="text-input" 
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Escribe aquí..."
                    />
                    <button 
                        style={{ marginLeft: '20px' }}
                        onClick={() => onDeletee(inputValue)}>
                        Eliminar
                    </button>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
            <ModalSuccess visible={wordDelete} onClose={closeModalAviso} />
        </div>
    );
};

export default ModalEliminar;