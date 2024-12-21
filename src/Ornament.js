const Ornament = (props) => {

  const tileSize = Number(props.tileSize);
  const halfTile = tileSize / 2;
  const borderColor = props.darkMode ? 'white' : 'black';

  const style = {
    width: `${tileSize - 4}px`,
    height: `${tileSize - 4}px`,
    margin: '1px',
    backgroundColor: `${props.color}`,
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

export default Ornament;