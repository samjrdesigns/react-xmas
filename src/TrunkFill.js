const TrunkFill = (props) => {

  const tileSize = Number(props.tileSize);
  const style = {
    width: `${tileSize}px`,
    height: `${tileSize}px`,
    margin: '1px',
    backgroundColor: 'brown',
    display: 'inline-block',
    verticalAlign: 'top',
    fontSize: '0px'
  }

  return (
    <div style={style} />
  )
}

export default TrunkFill;