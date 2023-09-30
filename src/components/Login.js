import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, ButtonGroup, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./styles/Login.css";
import { FormattedMessage } from "react-intl";

function Login() {
    const [formValues, setFormValues] = useState({user:"", password:""})
    const [validationState, setValidationState] = useState({user:false, password:false})
    const [touched, settouched] = useState({user:false, password:false})
    const navigate = useNavigate();

    const handleUserChange = ((e) => {
        const placeholder = e.target.placeholder;
        const user_e = e.target.value;
        setFormValues({ ...formValues, user: user_e });

    
        setValidationState((prevState) => ({ ...prevState, user: user_e !== placeholder && user_e !== null && user_e !== undefined && user_e.length > 1}));

        settouched((prevState) => ({ ...prevState, user: true }));
    });

    const handlePasswordChange = ((e) => {
        const placeholder = e.target.placeholder;
        const password_e = e.target.value;
        setFormValues({ ...formValues, password: password_e });
        // Check if the password is not null (empty or undefined)
        setValidationState((prevState) => ({
            ...prevState,
            password: password_e !== null && password_e !== undefined && password_e.length > 1 && password_e !== placeholder,
        }));

        settouched((prevState) => ({ ...prevState, password: true }));
    });

    const clickSubmit = () => {
        const URL = 'http://localhost:3001/login';
        const data = {
            login: formValues.user,
            password: formValues.password,
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };
        fetch(URL, requestOptions).then((response) => response.json()).then((data) => {
            console.log(data);
            if (data.status === 'success') {
                alert('Datos correctos');
                navigate('/cafeList');
            } else {
                alert('Datos incorrectos');
            }
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });

    };

    const handleCancel = () => {
        setFormValues({user:"", password:""})
      };

    return (
        
        <Container className="loginB">
            
            <h4 className="loginText"><FormattedMessage id="login"/></h4>      
                <Container className="containerr">
                    <Row className="justify-content-center">

                    
                <Form className="py-4 px-5 mt-5 forms">
                    
                    <Row>
                        <Form.Label className="formLabel"><FormattedMessage id="user"/></Form.Label>
                        <Form.Control className="form-control" type="text"   onChange={handleUserChange} isInvalid={touched.user && !validationState.user}/>
                    </Row>
                    <Row>
                                <Form.Label className="formLabel"><FormattedMessage id="password"/> </Form.Label>
                                <Form.Control className="form-control" type="password"   onChange={handlePasswordChange} isInvalid={touched.password && !validationState.password}/>
                    </Row>
                    <Row>
                            <Col> 
                            <ButtonGroup>
                            <Button variant="success" size="lg" onClick={clickSubmit}><FormattedMessage id="loginButton"/></Button>
                            <Button variant="danger" size="lg" onClick={handleCancel}><FormattedMessage id="cancel"/></Button>
                            </ButtonGroup>
                            </Col>
                    </Row>              
                </Form>  
                </Row>
                </Container>

        
        </Container>


    );

}

export default Login;