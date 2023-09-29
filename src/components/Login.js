import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./styles/Login.css";
import logo from '../logo.svg';

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
            password: password_e !== null && password_e !== undefined && password_e.length > 0 && password_e !== placeholder,
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
        <Container>
            <Row>
                <Col className="col bg">
                <div className="text-end">
                        <img src={logo} alt="Logo"/>
                    </div>
                </Col>
                <Col  className="col">
                    

                    <h2 className="fw-bold text-center pt-5 mb-5 py-5"> Bienvenido</h2>
                    
                    <Form >
                    
                    <Row>
                        <Form.Label className="formLabel">Correo Electrónico </Form.Label>
                        <Form.Control className="custom-input" type="email" placeholder="Correo electrónico" style={{ color: 'white' }} onChange={handleEmailChange} isInvalid={touched.email && !validationState.email}/>
                    </Row>
                    <br />
                    <Row>
                        <Form.Label className="formLabel">Contraseña </Form.Label>
                        <Form.Control className="custom-input" type="password" placeholder="Contraseña" style={{ color: 'white' }} onChange={handlePasswordChange} isInvalid={touched.password && !validationState.password}/>
                    </Row>
                    <br />
                    
                    <br />
                    <Row>
                        <Col> 
                        <Button className="custom-button" size="lg" onClick={clickSubmit} disabled={!(validationState.email && validationState.password)}>Iniciar sesion</Button>{' '}
                        </Col>
                    </Row>              
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;