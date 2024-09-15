import Cabeza from "./_component/Cabeza";
import { useState } from 'react';

import ModalAgregar from "../../components/ModalAgregar";
import ModalEliminar from "../../components/ModalEliminar";

const DictionaryPage = ()=>{
    const [word, setModalAddVisible] = useState(false);
    const [word2, setModalDeleteVisible] = useState(false);

    //abri modal para agregar
    const showModalAdd = () => {
        setModalAddVisible(true);
    };
    //cerrar modal para agregar
    const closeModalAdd = () => {
        setModalAddVisible(false);
    };
    
    //abri modal para agregar
    const showModalDelete = () => {
        setModalDeleteVisible(true);
    };
    //cerrar modal para agregar
    const closeModalDelete = () => {
        setModalDeleteVisible(false);
    };


  
    return(
   
        <div className="parrafo"> 
            <header>
                <h1 className="titulo"> 
                    <Cabeza 
                        title="DICTIONARY USIP" 
                    />
                </h1>
            </header>
            <p>
                <span style={{ fontSize: '1.6em'}}>este</span> 
                <span style={{ fontSize: '1.8em',fontWeight: 'bold' }}> modulo (diccionario)</span>  
                <span style={{ fontSize: '1.6em'}}> corresponde</span>  
                <span style={{ fontSize: '1.8em',fontWeight: 'bold' }}>  al recuperatorio del </span> 
                <span style={{ fontSize: '1.8em',color: 'red', fontWeight: 'bold' }}>módulo-7 </span>   
                <span style={{ fontSize: '0.8em', fontFamily: 'Comic Sans MS', fontWeight: 'bold'}}>REACT.JS </span> 
                <span style={{ fontSize: '1.6em', fontWeight: 'bold' }}>URL: </span> 
                <span>https://Pamela101998.github.io/taskreact_final/dictionary</span>
            </p> 

            <div className="container-buttons">
            <div className="button-group">
                <button onClick={showModalAdd}>Agregar Palabra</button>

                <ModalAgregar visible={word} onClose={closeModalAdd} />
            
                <ModalEliminar  visible={word2}  onClose={closeModalDelete} />
                
                <button onClick={showModalDelete}>Eliminar Palabra</button>

            </div>
                <button  style={{ width: '300px' }}>Traducir</button>
            </div>
            
        </div>
    
    )

}
export default DictionaryPage;
