import React from 'react';
//@ts-ignore
import './App.css';
import AppRouter from './router/AppRouter';

import { api } from "protos";

const x = api.Person.create({
    email: "aneeshsaripalli@gmail.com",
    id: 1234,
    name: "Aneesh Saripalli"
})

console.log(x);

export default () => <AppRouter />