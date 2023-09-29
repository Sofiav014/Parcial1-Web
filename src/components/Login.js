import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import bookLogo from '../bookLogo.png';
import "./styles/Login.css";

function Login() {
    const [formValues, setFormValues] = useState({email:"", password:""})
    const [validationState, setValidationState] = useState({email:false, password:false})
    const [touched, settouched] = useState({email:false, password:false})
    const navigate = useNavigate();

    const handleEmailChange = ((e) => {
        const placeholder = e.target.placeholder;
        const email_e = e.target.value;
        setFormValues({ ...formValues, email: email_e });

        const REGEX = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
        // Check if the email is not null (empty or undefined)
        const valid = REGEX.test(formValues.email)
    
        setValidationState((prevState) => ({ ...prevState, email: valid && email_e !== placeholder }));

        settouched((prevState) => ({ ...prevState, email: true }));
    });

    const handlePasswordChange = ((e) => {
        const placeholder = e.target.placeholder;
        const password_e = e.target.value;
        setFormValues({ ...formValues, password: password_e });
        // Check if the password is not null (empty or undefined)
        setValidationState((prevState) => ({
            ...prevState,
            password: password_e !== null && password_e !== undefined && password_e.length > 5 && password_e !== placeholder,
        }));

        settouched((prevState) => ({ ...prevState, password: true }));
    });

    const clickSubmit = () => {
        // Check if both email and password are not null
        if (validationState.email && validationState.password ) {
          // Perform form submission
          alert(JSON.stringify(formValues));
          navigate('/');
        } else {
          alert('Correo o contraseña incorrectos');
        }
    };

    return (
        <div className="loginB">
        <div className="row g-0 justify-content-center aling-items-center login">

        <div className="col-10 row g-0">

        </div>

        <div className="col-4 aa">
            <img src={bookLogo} alt="Books logo" className="img-fluid"/>

        </div>       
        
        <Form className="col-4 py-4 px-5 mt-5 forms">
            <h2 className="fw-bold text-center"> Tu libreria aliada</h2>       
            <br />
            <Row>
                 <Form.Label className="formLabel">Users name or Email </Form.Label>
                     <Form.Control className="form-control" type="email" placeholder="Correo electrónico"  onChange={handleEmailChange} isInvalid={touched.email && !validationState.email}/>
            </Row>
                     <br />
            <Row>
                         <Form.Label className="formLabel">Contraseña </Form.Label>
                         <Form.Control className="form-control" type="password" placeholder="Contraseña"  onChange={handlePasswordChange} isInvalid={touched.password && !validationState.password}/>
            </Row>
            <Row>
                    <Col className="forgot">
                        <Form.Label className="formLabel">Forgot your password?</Form.Label>
                    </Col>
            </Row>
            <br />
            <Row>
                    <Col> 
                    <Button className="custom-button" size="lg" onClick={clickSubmit} disabled={!(validationState.email && validationState.password)}>Iniciar sesion</Button>{' '}
                    </Col>
            </Row>              
        </Form>  

        </div>
        </div>


    );

}

export default Login;