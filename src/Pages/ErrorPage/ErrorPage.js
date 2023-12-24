import React from 'react'
import logo from '../../assets/logo.png'
import error from '../../assets/errorImage.png'
import { Section, Titulo, Button } from './errorPageStyle'
import { goToHome } from '../../routes/cordinator'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <Section>
      <div className='container'><img className='logo' src={logo} alt=''/></div>
      <Titulo>
          <div>
            <h1>Ops! Erro 404.</h1>
            <h2>Parece que não encontramos a página que você procura.</h2>
            <Button onClick={()=> goToHome(navigate)}>Voltar à página inicial</Button>
          </div>
          <div className='ditto'><img src={error} alt="img" /></div>
      </Titulo>
    </Section>
  )
}

export default ErrorPage
