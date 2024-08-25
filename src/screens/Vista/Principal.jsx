import Cabecera from "./_componentess/Cabecera";
import Cuerpo from "./_componentess/Cuerpo";
import Footer from "./_componentess/Footer";


import React from 'react';

const Principal = () => {
    return (
        <>
            <header className="App-header">
                <Cabecera 
                    unit="Módulo 7: " 
                    title="DESARROLLO FRONTED CON REACTJS" 
                />
                <Cuerpo />
                <Footer />
                
               
               
            </header>
        </>
    );
};
export default Principal;



   
