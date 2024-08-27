import Cabecera from "./_componentess/Cabecera";
import Cuerpo from "./_componentess/Cuerpo";
import Footer from "./_componentess/Footer";


import React from 'react';

const LandingPage = () => {
    return (
        <>
        <div>
            <header>
                <Cabecera 
                    unit="Módulo 7: " 
                    title="DESARROLLO FRONTED CON REACTJS" 
                />
            </header>
            <section>
                   <Cuerpo
                        tema1="Componentes funcionales y de clase"
                        tema2="Uso de React Hooks como useState y useEffect"
                        tema3="Creación de custom Hooks como useForm"
                        tema4="Gestión de variables de estado con useState"
                        tema5="Gestión de estado global con Redux"
                        tema6="Integración de Redux con React"
                        tema7="Manejo de Formularios en React"
                        tema8="Publicando nuestra Pagina con GitHub Pages"
                   />
            </section>  
                 
                 <Footer
                        year="2024 " 
                        module="Módulo 7 "
                   />
            </div>   
        </>
    );
};
export default LandingPage;



   
