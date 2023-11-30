import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Auth() {
  const [login, setLogin] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const correctLogin = 'testLogin22';
  const correctPassword = 's#dDA23@44#Ds';
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login === correctLogin && password === correctPassword) {
      navigate('/main');
      setLogin('');
      setPassword('');
    }
    if (login !== correctLogin) {
      setLogin('');
      setIsLogin(true);
    }
    if (password !== correctPassword) {
      setPassword('');
      setIsPassword(true);
    }
  };

  return (
    <div className="text-success">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
              setIsLogin(false);
            }}
          />

          {isLogin && (
            <Form.Text className="text-danger">Is not valid login'</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsPassword(false);
            }}
          />

          {isPassword && (
            <Form.Text className="text-danger">Is not valid password</Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Auth;
