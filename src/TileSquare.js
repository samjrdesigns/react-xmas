import { useContext } from "react";
import AppContext from './AppContext';

const TileSquare = (props) => {

  const { tileSize } = useContext(AppContext);
  
  const fillStyle = {
    width: `${tileSize}px`,
    height: `${tileSize}px`,
    margin: '1px',
    backgroundColor: `${props.color}`,
    display: 'inline-block'
  }

  return (
    <div style={fillStyle} />
  )
}

export default TileSquare;