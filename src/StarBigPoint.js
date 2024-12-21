const StarBigPoint = (props) => {
  const tileSize = Number(props.tileSize);
  const halfTile = tileSize / 2;
  const rotation = () => {
    if (props.direction === 'N') {
      return 0;
    } else if (props.direction === 'E') {
      return 90;
    } else if (props.direction === 'S') {
      return 180;
    } else if (props.direction === 'W') {
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
    gap: '0px',
    margin: '0px',
    padding: '0px'
  }

  const leftTriangleStyle = {
    width: '0',
    height: '0',
    borderLeft: `${halfTile}px solid transparent`,
    borderRight: '0px solid transparent',
    borderBottom: `${halfTile}px solid orange`
  }

  const rightTriangleStyle = {
    width: '0',
    height: '0',
    borderLeft: '0px solid transparent',
    borderRight: `${halfTile}px solid transparent`,
    borderBottom: `${halfTile}px solid orange`,
  }

  const squareStyle = {
    width: `${halfTile}px`,
    height: `${halfTile}px`,
    backgroundColor: 'orange'
  }

  return (
    <div style={parentStyle}>
      <div style={gridContainerStyle}>
        <div style={leftTriangleStyle}/>
        <div style={rightTriangleStyle}/>
        <div style={squareStyle}/>
        <div style={squareStyle}/>
      </div>
    </div>
  )
}

export default StarBigPoint;