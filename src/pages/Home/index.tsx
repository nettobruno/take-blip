import { useState } from 'react';
import { SquaresFour, Rows, Plus } from 'phosphor-react';
import Header from '../../components/Header';
import { Container, AddButton } from './style';

export default function Home() {
  const [typeInfoExibition, setTypeInfoExibition] = useState('grid');

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
      </Container>  
   </>
  );
}