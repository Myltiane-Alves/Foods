import React, {   FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Container, Content, Background, PersonalData, Input  } from './styles';
import Button from '../../components/Button';
//import Input from '../../components/Input';
import  api  from "../../Services/api";
import InputMask from '../../components/Input/InputMask';


export default function SignUp()  {
  const [name, setName] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState("");
  const [cpf, setCpf] = useState({});
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState({});
  const [city, setCity] = useState({});
  const [state, setState] = useState({});

  const [completeAddress, setCompleteAddress] = useState([]);
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function loadData() {

    }
    loadData();
  }, []);

  const cepValidation = useCallback(async () => {
    const cep = formRef.current
      ?.getFieldValue('cep')
      .replace('-', '')
      .replace('_', '');
    if (cep.length === 8) {
      const response = await api.get(`${cep}/json/`);
      if (response.data) {
        formRef.current?.setFieldValue('city', response.data.localidade);
        formRef.current?.setFieldValue('state', response.data.uf);
        formRef.current?.setFieldValue('address', response.data.bairro);
        formRef.current?.setFieldValue('street', response.data.logradouro);
      }
    }
  }, []);
  
  const clearError = useCallback((e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget?.name;
    if (formRef.current?.getFieldError(name)) {
      formRef.current.setFieldError(name, '');
      if (name === 'cep') {
        formRef.current.setFieldError('state', '');
        formRef.current.setFieldError('uf', '');
      }
    }
  }, []);
  
  const handleSubmit = () => {
      const data = {
        name,
        email,
        password,
        birthdate,
        cpf,
        zip,
        address,
        city,
        state,
      };
      console.log(data);
    

  }


  return (
    <Container>
      <Background />
      <Content>
        
        <a href="/" className="logo">
           HEALTHY FOODS
        </a>
        <Form ref={formRef}  onSubmit={handleSubmit}>
          <h2>Faça seu Cadastro</h2>
          <PersonalData>
            <Input         
              onKeyUp={clearError}
              name="name"
              type="text"
              placeholder="Name"             
              onChange={(e) => setName(e.target.value)}
            />
            <Input         
              onKeyUp={clearError}
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              onKeyUp={clearError}         
              name="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <InputMask      
              onKeyUp={clearError}       
              mask="999.999.999-99"
              name="cpf"
              placeholder="CPF"         
              onChange={(e) => setCpf(e.target.value)}
            />

            <InputMask     
              onKeyUp={clearError}   
              mask="99/99/9999"
              name="birthdate"
              placeholder="Data de Nascimento"         
              onChange={(e) => setBirthdate(e.target.value)}
            />
            
            <InputMask         
              onKeyUp={clearError}
              mask="99999-999"
              name="cep"
              placeholder="Cep"
              value={zip}    
              onChange={(e) => setZip(e.target.value)}
            />
        
            <Input      
              onKeyUp={clearError}   
              name="address"  
              placeholder="Endereço"    
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input      
              onKeyUp={clearError}   
              name="city"       
              placeholder="Cidade"   
              onChange={(e) => setCity(e.target.value)}       
            />
            <Input          
              name="state"       
              placeholder="Estado"      
              onChange={(e) => setState(e.target.value)}
            />
        
          </PersonalData>
            <Button
            type="submit"
            onClick={() => handleSubmit()}
            >
              Register 
            </Button>  
            <Link className="link" to="signin">Você tem conta? Conecte-se</Link>      
        </Form>
      </Content>
    </Container>
  );
};

