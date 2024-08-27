const Footer = ({year, module}) => {
    return(

        <>
            <div className="footeer">
            ©  {year}
                {module}
                USIP
            </div>
        </>
    );

};

export default Footer;