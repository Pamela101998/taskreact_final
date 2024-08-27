const Cuerpo = ({tema1, tema2, tema3, tema4, tema5, tema6, tema7, tema8}) =>{
    return (
        <div className="body">
              <div className="section">
               
                    <h4>Bienvenido</h4>
                    
                </div>
                <p>Este módulo se centra en el uso de <b>React</b>, 
                    incluyendo la creación de <b>componentes</b>, 
                    el manejo de <b>hooks</b>, y el uso de <b>Redux</b> </p>
                <div className="section">
                    <h4>Temas</h4>
                    
                </div>
               
                    <ul>
                        <li>{tema1}</li>
                        <li>{tema2}</li>
                        <li>{tema3}</li>
                        <li>{tema4}</li>
                        <li>{tema5}</li>
                        <li>{tema6}</li>
                        <li>{tema7}</li>
                        <li>{tema8}</li>

                    </ul>
                    <div className="section">
                      <h4>Recursos Adicionales</h4>
                    </div>
                    <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos</p>
                </div>
        
    );
};

export default Cuerpo;

