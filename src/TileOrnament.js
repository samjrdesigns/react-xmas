import { useContext } from 'react';
import AppContext from './AppContext';

const TileOrnament = () => {

  const { tileSize, darkMode, ornamentColors } = useContext(AppContext);

  const halfTile = tileSize / 2;
  const borderColor = darkMode ? 'white' : 'black';
  const colorIdx = Math.floor(Math.random() * ornamentColors.length);

  const style = {
    width: `${tileSize - 4}px`,
    height: `${tileSize - 4}px`,
    margin: '1px',
    backgroundColor: `${ornamentColors[colorIdx]}`,
    borderRadius: `${halfTile}px`,
    display: 'inline-block',
    verticalAlign: 'top',
    border: `2px solid ${borderColor}`,
    fontSize: '0px'
  }
  
  return (
    <div style={style} />
  )
}

export default TileOrnament;