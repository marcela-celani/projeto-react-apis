import React from 'react'
import { Container } from './footerStyle'

const Footer = () => {
  return (
    <Container>
      <div>
        <p><i class="fa fa-code" aria-hidden="true" /> Desenvolvido por: Marcela Celani</p>
        <span>
          <a className='black' href="https://github.com/marcela-celani"><i class="fa fa-github" aria-hidden="true" /></a>
          <a className='blue' href="https://www.linkedin.com/in/marcelacelani/"><i class="fa fa-linkedin-square" aria-hidden="true"/></a>
        </span>
      </div> 
    </Container>
  )
}

export default Footer
