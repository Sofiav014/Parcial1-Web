import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Col, Form, Row, ButtonGroup, Container} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./styles/Login.css";

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
            password: password_e !== null && password_e !== undefined && password_e.length > 5 && password_e !== placeholder,
        }));

        settouched((prevState) => ({ ...prevState, password: true }));
    });

    const clickSubmit = () => {
        // Check if both user and password are not null
        if (validationState.user && validationState.password ) {
          // Perform form submission
          alert(JSON.stringify(formValues));
          navigate('/cafeList');
        } else {
          alert('Correo o contraseña incorrectos');
        }
    };

    const handleCancel = () => {
        setFormValues({user:"", password:""})
      };

    return (
        
        <div className="loginB">
            <br />
        <div className="row g-0 justify-content-center  login">

        <div className="col-10 row g-0">
            <h4 className="loginText"> Inicio de sesión</h4>      
        </div>
        <Container className="containerr">
            <Row className="justify-content-center">

            
        <Form className="col-4 py-4 px-5 mt-5 forms">
             
             <br />
             <Row>
                  <Form.Label className="formLabel">Nombre de usuario </Form.Label>
                      <Form.Control className="form-control" type="user"   onChange={handleUserChange} isInvalid={touched.user && !validationState.user}/>
             </Row>
                      <br />
             <Row>
                          <Form.Label className="formLabel">Contraseña </Form.Label>
                          <Form.Control className="form-control" type="password"   onChange={handlePasswordChange} isInvalid={touched.password && !validationState.password}/>
             </Row>
             <br />
             <Row>
                     <Col> 
                     <ButtonGroup>
                     <Button className="login-button" size="lg" onClick={clickSubmit} disabled={!(validationState.user && validationState.password)}>Ingresar</Button>{' '}
                     <Button className="cancel-button" size="lg" onClick={handleCancel}>Cancelar</Button>{' '}
                     </ButtonGroup>
                     </Col>
             </Row>              
         </Form>  
         </Row>
 
        </Container>

        
        </div>
        </div>


    );

}

export default Login;