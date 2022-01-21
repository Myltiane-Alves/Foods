
import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, } from 'react-router-dom';
import { Background, Container, Content } from './styles';


export default function SigIn() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const formRef = useRef<FormHandles>(null);

  var d = new Date();
  var expires = "expires=" + d.toUTCString();

  const LocalStorage = async () => {
    localStorage.setItem("Senha", password);
    localStorage.setItem("Email", email);

    document.cookie = "Email" + "=" + email + ";" + expires;
    document.cookie = "Senha" + "=" + password + ";" + expires;
  }

  const handleSubmit = () => {

    setEmail('');
    setPassword('');   
  }

  return (
    <Container>
      <Background />
      <Content>
        <a href="/" className="logo">
           HEALTHY FOODS
        </a>
        <Form ref={formRef} onSubmit={handleSubmit} >
          <h1>Login</h1>
        
          <input
           name="email"
           placeholder="E-mail" 
           value={email}  
           onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            name="password"
            type="password"
            placeholder="Password"
            value={password}  
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={LocalStorage}><a>Login  </a></button>
          <a href="#senha">Forgot password</a>
          <Link className="link" to="signup"> Register </Link>
        </Form>
      </Content>
    </Container>
  );
}