
import { ChatCircle } from 'phosphor-react'
import illustration from '../../assets/illustration.png'
import iconMessageReceived from '../../assets/message-received.png'
import iconMessageSend from '../../assets/message-send.png'
import iconUserActive from '../../assets/user-active.png'
import Header from '../../components/Header'
import { Container, Grid, Circle, Footer } from './style'

export default function Profile() {
  return (
   <>
      <Header />

      <Container data-testid='profile-page'>
        <header>
          <div className='user'>
            <div className='circle'>
              <ChatCircle size={32} color='#B9CBD3' />
            </div>

            <hgroup>
              <h1>Botname</h1>
              <h4>id: botname</h4>
            </hgroup>
          </div>

          <p>Created at 11/09/2019</p>
        </header>

        <Grid>
          <div className='item1'>
            <div>
              <p>Region and idiom</p>
              <p>EUA - English (EN)</p>
            </div>

            <div>
              <p>Timezone</p>
              <p>(UTC - 03:00) Brasília</p>
            </div>
          </div>

          <div className='item2'>
            <Circle color='lightBlue'>
              <img src={iconUserActive} alt='User active icon' />
            </Circle>

            <hgroup>
              <h2>1.000</h2>
              <h3>Usuários ativos</h3>
            </hgroup>
          </div>
          
          <div className='item3'>
            <Circle color='green'>
              <img src={iconMessageReceived} alt='Message received icon' />
            </Circle>

            <hgroup>
              <h2>1.000</h2>
              <h3>Mensagens recebidas</h3>
            </hgroup>
          </div>

          <div className='item4'>
            <Circle color='darkBlue'>
              <img src={iconMessageSend} alt='Message sent icon' />
            </Circle>

            <hgroup>
              <h2>1.000</h2>
              <h3>Mensagens enviadas</h3>
            </hgroup>
          </div>

          <div className='item5'>
            <img src={illustration} alt="" />

            <p>Status account</p>
            <span>Free  </span>

            <button>Update account</button>
          </div>
        </Grid>

        <Footer>
          <p>©2019, BLiP Todos os direitos reservados | Termos de Uso</p>
        </Footer>
      </Container>  
   </>
  );
}