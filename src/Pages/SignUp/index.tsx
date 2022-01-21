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
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState('');
  const [Birthdate, setBirthdate] = useState("");
  const [CPF, setCPF] = useState("");
  const [Zip, setZip] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");

  const [completeAddress, setCompleteAddress] = useState([]);
  const formRef = useRef<FormHandles>(null);

  var d = new Date();
  d.setTime(d.getTime() + 5 * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();

  const LocalStorage = async () => {
    localStorage.setItem("Nome", Name);
    localStorage.setItem("Senha", Password);
    localStorage.setItem("Email", Email);
    localStorage.setItem("Data de Nascimento", Birthdate);
    localStorage.setItem("CPF", CPF);
    localStorage.setItem("CEP", Zip);
    localStorage.setItem("Address", Address);
    localStorage.setItem("City", City);
    localStorage.setItem("State", State);

  
    document.cookie = "Nome" + "=" + Name + "; " + expires;
    document.cookie = "Email" + "=" + Email + ";" + expires; 
    document.cookie = "Senha" + "=" + Password + ";" + expires;
    document.cookie = "Data de Nascimento" + "=" + Birthdate + "; " + expires; 
    document.cookie = "CPF" + "=" + CPF + "; " + expires;
    document.cookie = "CEP" + "=" + Zip + "; " + expires;
    document.cookie = "Address" + "=" + Address + "; " + expires;
    document.cookie = "City" + "=" + City + "; " + expires;
    document.cookie = "State" + "=" + State + "; "  + expires;
  };

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
    console.log(City)
    console.log(Address)
    console.log(State)
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
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input         
              onKeyUp={clearError}
              name="email"
              type="text"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              onKeyUp={clearError}         
              name="password"
              type="password"
              placeholder="Senha"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <InputMask      
              onKeyUp={clearError}       
              mask="999.999.999-99"
              name="cpf"
              placeholder="CPF"
              value={CPF}
              onChange={(e) => setCPF(e.target.value)}
            />

            <InputMask     
              onKeyUp={clearError}   
              mask="99/99/9999"
              name="birthdate"
              placeholder="Data de Nascimento"
              value={Birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
            
            <InputMask         
              onKeyUp={clearError}
              mask="99999-999"
              name="cep"
              placeholder="Cep"
              value={Zip}    
              onChange={(e) => setZip(e.target.value)}
            />
        
            <Input      
              onKeyUp={clearError}   
              name="address"
              type="string"
              placeholder="Endereço"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              defaultValue={Address}
            />
            <Input      
              onKeyUp={clearError}   
              name="city"
              type="string"
              placeholder="Cidade"
              value={City}
              onChange={(e) => setCity(e.target.value)}
              defaultValue={City}
            />
            <Input          
              name="state"
              type="string"
              placeholder="Estado"
              value={State}
              onChange={(e) => setState(e.target.value)}
              defaultValue={State}
            />
        
          </PersonalData>
            <Button
            type="submit"
            onClick={LocalStorage}
            >
              Register 
            </Button>  
            <Link className="link" to="signin">Você tem conta? Conecte-se</Link>      
        </Form>
      </Content>
    </Container>
  );
};

