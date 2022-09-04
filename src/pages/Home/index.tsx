import { useState, useEffect } from 'react';
import { SquaresFour, Rows, Plus } from 'phosphor-react';
import Header from '../../components/Header';
import { Container, Favorities, Grid, List, Circle, AddButton } from './style';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import iconStarOutline from '../../assets/star-outline.png';
import iconStar from '../../assets/star.png';

interface ItemsData {
  created: string;
  name: string;
  type: string;
  favorite: boolean;
}


export default function Home() {
  const [typeInfoExibition, setTypeInfoExibition] = useState('grid');
  const [profiles, setProfiles] = useState<ItemsData[]>([]);  
  const [search, setSearch] = useState('')
  const [filterDate, setFilterDate] = useState<ItemsData[]>([]); 
  const [filterName, setFilterName] = useState<ItemsData[]>([]); 

  async function getItems() {
    await api.get('/bots').then((response) => {
      const data = response.data.map((item: any) => {
        return { ...item, favorite: false };
      });

      console.log(data);

      setProfiles(data);
    });
  }

  function makeFav(name: string) {
    let allItems = [...profiles];
    let itemIndex = allItems.findIndex((item) => item.name === name);

    allItems[itemIndex].favorite = !allItems[itemIndex].favorite;
    setProfiles(allItems);
  };


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


  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
   <>
      <Header />

      <Container data-testid="home-page">
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
          <>
          <Favorities>
            <h2 className='title-favoritie'>Favorities</h2>
            <Grid>
              {search.length <= 0 ? profiles
              .filter((item) => item.favorite === true)
              .map(({ name, type }) => (
                <div className='block-item'>
                  <button onClick={() => makeFav(name)}>
                    <img src={iconStar} alt="" />
                  </button>
                  <Link to={`/profile`} state={{ name: name }}>
                    <Circle size={56} color={getRandomColor()} />
                    <h2>{name}</h2>
                    <h3>{type}</h3>
                  </Link>
                </div>
              )): ''}

              {search.length > 0 ? (
                filtered
                .filter((item) => item.favorite === true)
                .map(({ name, type }) => {
                  return (
                    <div className='block-item'>
                      <button onClick={() => makeFav(name)}>
                        <img src={iconStar} alt="" />
                      </button>
                      <Link to={`/profile`} state={{ name: name }}>
                        <Circle size={56} color={getRandomColor()} />
                        <h2>{name}</h2>
                        <h3>{type}</h3>
                      </Link>
                    </div>
                  )
                })
              ): ''} 
            </Grid>
          </Favorities>

          <Grid>
            {filterDate.length > 0 || filterName.length > 0 || search.length > 0 ? '' : profiles
            .filter((item) => item.favorite === false)
            .map(({ name, type }) => (
              <div className='block-item'>
                <button onClick={() => makeFav(name)}>
                  <img src={iconStarOutline} alt="" />
                </button>
                <Link to={`/profile`} state={{ name: name }}>
                  <Circle size={56} color={getRandomColor()} />
                  <h2>{name}</h2>
                  <h3>{type}</h3>
                </Link>
              </div>
            ))}

            {filterDate && search.length <= 0 ? filterDate
            .filter((item) => item.favorite === false)
            .map(({ name, type }) => (
              <div className='block-item'>
                <button onClick={() => makeFav(name)}>
                  <img src={iconStarOutline} alt="" />
                </button>
                <Link to={`/profile`} state={{ name: name }}>
                  <Circle size={56} color={getRandomColor()} />
                  <h2>{name}</h2>
                  <h3>{type}</h3>
                </Link>
              </div>
            )) : ''}

            {filterName && search.length <= 0 ? filterName
            .filter((item) => item.favorite === false)
            .map(({ name, type }) => (
              <div className='block-item'>
                <button onClick={() => makeFav(name)}>
                  <img src={iconStarOutline} alt="" />
                </button>
                <Link to={`/profile`} state={{ name: name }}>
                  <Circle size={56} color={getRandomColor()} />
                  <h2>{name}</h2>
                  <h3>{type}</h3>
                </Link>
              </div>
            )) : ''}

            {search.length > 0 ? (
                filtered
                .filter((item) => item.favorite === false)
                .map(({ name, type }) => {
                  return (
                    <div className='block-item'>
                      <button onClick={() => makeFav(name)}>
                        <img src={iconStarOutline} alt="" />
                      </button>
                      <Link to={`/profile`} state={{ name: name }}>
                        <Circle size={56} color={getRandomColor()} />
                        <h2>{name}</h2>
                        <h3>{type}</h3>
                      </Link>
                    </div>
                  )
                })
            ): ''} 
          </Grid>
          </>
        )}

        {typeInfoExibition === 'list' && (
          <>
          <Favorities>
            <h2 className='title-favoritie'>Favorities</h2>
            <List>
              {search.length <= 0 ? profiles
              .filter((item) => item.favorite === true)
              .map(({ name, created }) => (
                <div className='block-item-list'>
                  <button onClick={() => makeFav(name)}>
                    <img src={iconStar} alt="" />
                  </button>
                  <Link to={`/profile?name=${name}`}>
                    <div>
                      <Circle size={28} color={getRandomColor()} />
                      <h2>{name}</h2>
                    </div>
                    <h3>{created}</h3>
                  </Link>
                </div>
              )): ''}

              {search.length > 0 ? (
                filtered
                .filter((item) => item.favorite === true)
                .map(({ name, created }) => {
                  return (
                    <div className='block-item-list'>
                      <button onClick={() => makeFav(name)}>
                        <img src={iconStar} alt="" />
                      </button>
                      <Link to={`/profile?name=${name}`}>
                        <div>
                          <Circle size={28} color={getRandomColor()} />
                          <h2>{name}</h2>
                        </div>
                        <h3>{created}</h3>
                      </Link>
                    </div>
                  )
                })
              ): ''} 
            </List>
          </Favorities>

          <List>
            {filterDate.length > 0 || filterName.length > 0 || search.length > 0 ? '' : profiles
            .filter((item) => item.favorite === false)
            .map(({ name, created }) => (
              <div className='block-item-list'>
                <button onClick={() => makeFav(name)}>
                  <img src={iconStarOutline} alt="" />
                </button>
                <Link to={`/profile?name=${name}`}>
                  <div>
                    <Circle size={28} color={getRandomColor()} />
                    <h2>{name}</h2>
                  </div>
                  <h3>{created}</h3>
                </Link>
              </div>
            ))}

            {filterDate && search.length <= 0 ? filterDate
            .filter((item) => item.favorite === false)
            .map(({ name, created }) => (
              <div className='block-item-list'>
                <button onClick={() => makeFav(name)}>
                  <img src={iconStarOutline} alt="" />
                </button>
                <Link to={`/profile?name=${name}`}>
                  <div>
                    <Circle size={28} color={getRandomColor()} />
                    <h2>{name}</h2>
                  </div>
                  <h3>{created}</h3>
                </Link>
              </div>
            )) : ''}

            {filterName && search.length <= 0 ? filterName
            .filter((item) => item.favorite === false)
            .map(({ name, created }) => (
              <div className='block-item-list'>
                <button onClick={() => makeFav(name)}>
                  <img src={iconStarOutline} alt="" />
                </button>
                <Link to={`/profile?name=${name}`}>
                  <div>
                    <Circle size={28} color={getRandomColor()} />
                    <h2>{name}</h2>
                  </div>
                  <h3>{created}</h3>
                </Link>
              </div>
            )) : ''}

            {search.length > 0 ? (
                filtered
                .filter((item) => item.favorite === false)
                .map(({ name, created }) => {
                  return (
                    <div className='block-item-list'>
                      <button onClick={() => makeFav(name)}>
                        <img src={iconStarOutline} alt="" />
                      </button>
                      <Link to={`/profile?name=${name}`}>
                        <div>
                          <Circle size={28} color={getRandomColor()} />
                          <h2>{name}</h2>
                        </div>
                        <h3>{created}</h3>
                      </Link>
                    </div>
                  )
                })
            ): ''} 
          </List>
          </>
        )}
      </Container>  
   </>
  );
}