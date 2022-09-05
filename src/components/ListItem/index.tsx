import { Link } from 'react-router-dom'
import iconStarOutline from '../../assets/star-outline.png'
import iconStar from '../../assets/star.png'
import Circle from '../Circle'
import { Item } from './style'


interface ItemProps {
  name: string;
  created: string;
  favoritie: boolean;
  makeFav: (name: string) => void;
}


export default function ListItem({ name, created, favoritie, makeFav }: ItemProps) {
  return (
    <Item>
      <button onClick={() => makeFav(name)}>
        <img src={favoritie === true ? iconStar : iconStarOutline} alt='Icon Start' />
      </button>

      <Link to={`/profile?name=${name}`}>
        <div>
          <Circle size={28} />
          <h2>{name}</h2>
        </div>
        <h3>{created}</h3>
      </Link>
    </Item>
            
  );
}