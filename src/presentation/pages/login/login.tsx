import React from 'react'
import Styles from './login-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form action="" className={Styles.form}>
        <h2> Login </h2>

        <Input type="email" name="email" placeholder="Digite seu e-mail" id="email"/>

        <Input type="password" name="password" placeholder="Digite sua senha secreta" id="password"/>

        <button type="submit" className={Styles.submit}>
          Entrar
        </button>
        <span className={Styles.link}>
          Criar conta
        </span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
