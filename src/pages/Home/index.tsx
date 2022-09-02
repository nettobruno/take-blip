import { useState, useEffect } from 'react';
import { SquaresFour, Rows, Plus } from 'phosphor-react';
import Header from '../../components/Header';
import { Container, Grid, List, Circle, AddButton } from './style';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface ItemsData {
  created: string;
  name: string;
  type: string;
}

export default function Home() {
  const [typeInfoExibition, setTypeInfoExibition] = useState('grid');
  const [profiles, setProfiles] = useState<ItemsData[]>([]);

  async function getItems() {
    await api.get('bots').then((response) => {
      setProfiles(response.data);
    });
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
   <>
      <Header />

      <Container>
        <div className="inline">
          <h1>My chatbots</h1>

          <div className='actions'>
            <form action="">
              <input type="search" name="search" id="search" placeholder="search" />

              <button>Order by name</button>
              <button>Order by creation</button>
            </form>

            <div className='buttons-set-exibition'>
              <button onClick={() => setTypeInfoExibition('grid')}>
                <SquaresFour size={32} color={typeInfoExibition === 'grid' ? '#6E7B91' : '#D2DFE6'}/>
              </button>
              
              <button onClick={() => setTypeInfoExibition('list')}>
                <Rows size={32} color={typeInfoExibition === 'list' ? '#6E7B91' : '#D2DFE6'} />
              </button>
            </div>
          </div>
        </div>

        <AddButton>
          <Plus size={20} color="#F8FBFB" />
        </AddButton>

        {typeInfoExibition === 'grid' && (
          <Grid>
            {profiles?.map((profile) => (
              <Link to={`/profile?name=${profile.name}`}>
                <Circle size={56} />
                <h2>{profile.name}</h2>
                <h3>{profile.type}</h3>
              </Link>
            ))}
          </Grid>
        )}

        {typeInfoExibition === 'list' && (
          <List>
            {profiles?.map((profile) => (
              <Link to={`/profile?name=${profile.name}`}>
                <div>
                  <Circle size={28} />
                  <h2>{profile.name}</h2>
                </div>
                <h3>{profile.created}</h3>
              </Link>
            ))}
          </List>
        )}
      </Container>  
   </>
  );
}