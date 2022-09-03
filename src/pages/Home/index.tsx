import { useState, useEffect } from 'react';
import { SquaresFour, Rows, Plus } from 'phosphor-react';
import Header from '../../components/Header';
import { Container, Grid, List, Circle, AddButton } from './style';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import iconStarOutline from '../../assets/star-outline.png';

interface ItemsData {
  created: string;
  name: string;
  type: string;
}


export default function Home() {
  const [typeInfoExibition, setTypeInfoExibition] = useState('grid');
  const [profiles, setProfiles] = useState<ItemsData[]>([]);  
  const [search, setSearch] = useState('')
  const [filterDate, setFilterDate] = useState<ItemsData[]>([]); 
  const [filterName, setFilterName] = useState<ItemsData[]>([]); 


  async function getItems() {
    await api.get('bots').then((response) => {
      // response.data.map(item => setProfiles({ ...item, favorite: false }));
      setProfiles(response.data)
    });
  }

  function filteredName() {
    setFilterDate([]);

    const filter = profiles.sort((objA, objB) => objB.name.localeCompare(objA.name));

    setFilterName(filter)
  }

  function filteredDate() {
    setFilterName([]);

    const filter = profiles.sort(
      (objA, objB) => Number(new Date(objB.created)) - Number(new Date(objA.created)),
    );

    setFilterDate(filter);
  }

  const filtered = search.length > 0
    ? profiles.filter(profile => profile.name.includes(search))
    : [];

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
            <input
              type='text'
              name='search'
              placeholder='Buscar...'
              onChange={e => setSearch(e.target.value)}
              value={search} 
            />

            <button className='button-action' onClick={() => filteredName()}>Order by name</button>
            <button className='button-action' onClick={() => filteredDate()}>Order by creation</button>

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
            {filterDate.length > 0 || filterName.length > 0 || search.length > 0 ? '' : profiles.map(({ name, type }) => (
              <Link to={`/profile`} state={{ name: name }}>
                <img src={iconStarOutline} alt="" />
                <Circle size={56} />
                <h2>{name}</h2>
                <h3>{type}</h3>
              </Link>
            ))}

            {filterDate && search.length <= 0 ? filterDate.map(({ name, type }) => (
              <Link to={`/profile`} state={{ name: name }}>
                <img src={iconStarOutline} alt="" />
                <Circle size={56} />
                <h2>{name}</h2>
                <h3>{type}</h3>
              </Link>
            )) : ''}

            {filterName && search.length <= 0 ? filterName.map(({ name, type }) => (
              <Link to={`/profile`} state={{ name: name }}>
                <img src={iconStarOutline} alt="" />
                <Circle size={56} />
                <h2>{name}</h2>
                <h3>{type}</h3>
              </Link>
            )) : ''}

            {search.length > 0 ? (
                filtered.map(({ name, type }) => {
                  return (
                    <Link to={`/profile`} state={{ name: name }}>
                      <img src={iconStarOutline} alt="" />
                      <Circle size={56} />
                      <h2>{name}</h2>
                      <h3>{type}</h3>
                    </Link>
                  )
                })
            ): ''} 
          </Grid>
        )}

        {typeInfoExibition === 'list' && (
          <List>
            {filterDate.length > 0 || filterName.length > 0 || search.length > 0 ? '' : profiles.map((profile) => (
              <Link to={`/profile?name=${profile.name}`}>
                <img src={iconStarOutline} alt="" />
                <div className="line">
                  <div>
                    <Circle size={28} />
                    <h2>{profile.name}</h2>
                  </div>
                  <h3>{profile.created}</h3>
                </div>
              </Link>
            ))}

            {filterDate && search.length <= 0 ? filterDate.map((profile) => (
              <Link to={`/profile?name=${profile.name}`}>
                <img src={iconStarOutline} alt="" />
                <div className="line">
                  <div>
                    <Circle size={28} />
                    <h2>{profile.name}</h2>
                  </div>
                  <h3>{profile.created}</h3>
                </div>
              </Link>
            )) : ''}

            {filterName && search.length <= 0 ? filterName.map((profile) => (
              <Link to={`/profile?name=${profile.name}`}>
                <img src={iconStarOutline} alt="" />
                <div className="line">
                  <div>
                    <Circle size={28} />
                    <h2>{profile.name}</h2>
                  </div>
                  <h3>{profile.created}</h3>
                </div>
              </Link>
            )) : ''}

            {search.length > 0 ? (
                filtered.map(filter => {
                  return (
                    <Link to={`/profile?name=${filter.name}`}>
                      <img src={iconStarOutline} alt="" />
                      <div className="line">
                        <div>
                          <Circle size={28} />
                          <h2>{filter.name}</h2>
                        </div>
                        <h3>{filter.created}</h3>
                      </div>
                    </Link>
                  )
                })
            ): ''} 
          </List>
        )}
      </Container>  
   </>
  );
}