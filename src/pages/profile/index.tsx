
import { useState, useEffect } from 'react'
import api from '../../services/api'
import illustration from '../../assets/illustration.png'
import iconMessageReceived from '../../assets/message-received.png'
import iconMessageSend from '../../assets/message-send.png'
import iconUserActive from '../../assets/user-active.png'
import Header from '../../components/Header'
import { Container, Grid, Circle, Footer } from './style'

interface ProfileProps {
  analytics: {
    user: {
      total: number;
      actived: number;
    },
    message: {
      received: number;
      sent: number;
    }
  };
  created: string;
  culture: string;
  description: string;
  image: string;
  name: string;
  shortName: string;
  type: string;
  updated: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({
    analytics: {
      user: {
        total: 0,
        actived: 0,
      },
      message: {
        received: 0,
        sent: 0,
      }
    },
    created: '',
    culture: '',
    description: '',
    image: '',
    name: '',
    shortName: '',
    type: '',
    updated: '',
  });  

  async function getProfile() {
    await api.get('eleven/details').then((response) => {
      setProfile(response.data)
    });
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
   <>
      <Header />

      <Container data-testid='profile-page'>
        <header>
          <div className='user'>
            <div>
              <img src={profile.image} alt="" />
            </div>

           
            <hgroup>
              <h1>{profile.name}</h1>
              <h4>id: {profile.shortName}</h4>
           </hgroup>
          </div>

          <p>Created at {new Date(profile.created).toLocaleDateString()}</p>
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
              <h2>{profile.analytics.user.actived}</h2>
              <h3>Usuários ativos</h3>
            </hgroup>
          </div>
          
          <div className='item3'>
            <Circle color='green'>
              <img src={iconMessageReceived} alt='Message received icon' />
            </Circle>

            <hgroup>
              <h2>{profile.analytics.message.received}</h2>
              <h3>Mensagens recebidas</h3>
            </hgroup>
          </div>

          <div className='item4'>
            <Circle color='darkBlue'>
              <img src={iconMessageSend} alt='Message sent icon' />
            </Circle>

            <hgroup>
              <h2>{profile.analytics.message.sent}</h2>
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