import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Header from '@/presentation/components/login-header/login-header'

const Login: React.FC = () => {
  // TODO Refatorando layout em componentes 04:50
  return (
    <div className={Styles.login}>
      <Header />
      <form action="" className={Styles.form}>
        <h2> Login </h2>

        <label htmlFor="email"> Email </label>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="name@domain.com" id="email"/>
          <span className={Styles.status}>🔴</span>
        </div>

        <label htmlFor="password"> Senha </label>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Sua senha secreta" id="password"/>
          <span className={Styles.status}>🔴</span>
        </div>

        <button type="submit" className={Styles.submit}>
          Entrar
        </button>
        <span className={Styles.link}>
          Criar conta
        </span>

        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}> Erro</span>
        </div>
      </form>

      <footer className={Styles.footer}>
      </footer>
    </div>
  )
}

export default Login
