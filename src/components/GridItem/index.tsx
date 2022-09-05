import { Link } from 'react-router-dom'
import iconStarOutline from '../../assets/star-outline.png'
import iconStar from '../../assets/star.png'
import Circle from '../Circle'
import { Item } from './style'


interface ItemProps {
  name: string;
  type: string;
  favoritie: boolean;
  makeFav: (name: string) => void;
}


export default function GridItem({ name, type, favoritie, makeFav }: ItemProps) {
  return (
    <Item>
      <button onClick={() => makeFav(name)}>
        <img src={favoritie === true ? iconStar : iconStarOutline} alt='' />
      </button>

      <Link to={`/profile`} state={{ name: name }}>
        <Circle size={56} />
        <h2>{name}</h2>
        <h3>{type}</h3>
      </Link>
    </Item>
            
  );
}