import { useContext } from 'react';
import AppContext from './AppContext';

const TileStarLittlePoint = (props) => {

  const { tileSize, starColor } = useContext(AppContext);

  const halfTile = tileSize / 2;
  const rotation = () => {
    if (props.direction === 'NE') {
      return 0;
    } else if (props.direction === 'SE') {
      return 90;
    } else if (props.direction === 'SW') {
      return 180;
    } else if (props.direction === 'NW') {
      return 270;
    }
  }

  const parentStyle = {
    margin: '1px',
    display: 'inline-block',
    transform: `rotate(${rotation()}deg)`,
    verticalAlign: 'top'
  }

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '0px'
  }

  const squareStyle = {
    width: `${halfTile}px`,
    height: `${halfTile}px`,
    backgroundColor: `${starColor}`
  }

  return (
    <div style={parentStyle}>
      <div style={gridContainerStyle}>
        <div />
        <div />
        <div style={squareStyle}/>
        <div />
      </div>
    </div>
  )
}

export default TileStarLittlePoint;