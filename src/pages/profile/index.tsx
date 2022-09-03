import Header from '../../components/Header';
import { ChatCircle } from 'phosphor-react';
import { Container, Grid, Circle, Footer } from './style';
import illustration from '../../assets/illustration.png'
import iconMessageReceived from '../../assets/message-received.png'
import iconMessageSend from '../../assets/message-send.png'
import iconUserActive from '../../assets/user-active.png'

// interface ItemsData {
//   created: string;
//   name: string;
//   type: string;
// }

// interface LocationState {
//   name: {
//     name: string;
//   };
// }

export default function Profile() {
  // const location = useLocation();
  // const [profiles, setProfiles] = useState<ItemsData[]>([]);  

  // useEffect(() => {
  //   const { name }  = location.state as LocationState;

  //   api.get(`/${name}/details`).then((response) => {
  //     console.log(response.data);
  //     setProfiles(response.data);
  //   });
  //   console.log(name)
  // }, []);

  return (
   <>
      <Header />

      <Container>
        <header>
          <div className="user">
            <div className="circle">
              <ChatCircle size={32} color="#B9CBD3" />
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
              <img src={iconUserActive} alt="" />
            </Circle>

            <hgroup>
              <h2>1.000</h2>
              <h3>Usuários ativos</h3>
            </hgroup>
          </div>
          
          <div className='item3'>
            <Circle color='green'>
              <img src={iconMessageReceived} alt="" />
            </Circle>

            <hgroup>
              <h2>1.000</h2>
              <h3>Mensagens recebidas</h3>
            </hgroup>
          </div>

          <div className='item4'>
            <Circle color='darkBlue'>
              <img src={iconMessageSend} alt="" />
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