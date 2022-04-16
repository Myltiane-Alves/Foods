
import React from 'react';

interface SignInCredentials {
    email: string;
    password: string;
}

interface User {
    name: string;
    cpf: string;
    birthDate: string;
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number?: string;
    email: string;
    password: string;
}