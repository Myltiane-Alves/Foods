
import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, } from 'react-router-dom';
import { Background, Container, Content } from './styles';
import { database } from '../../firebase/firebase';
import { sign } from 'crypto';

interface SignFormData {
  email: string;
  password: string;
}

export default function SigIn() {
  const { signIn } = useAuth();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = () => {
    async(data: SignFormData): Promise<void> => {
      try {

        await signIn({ email: data.email, password: data.password})
      } catch (err) {

      }
    }
    [signIn, history]
  };

 
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