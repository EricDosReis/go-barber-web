import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Go Barber" />

      <form>
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já estou cadastrado</Link>
      </form>
    </>
  );
}
