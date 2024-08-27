const Cabecera = ({unit, title}) =>{
    return (
        <div className="cabecera"> 
            <b>
                {unit}
                {title}
            </b>
        </div>
    );
}

export default Cabecera;