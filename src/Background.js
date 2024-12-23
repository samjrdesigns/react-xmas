const Background = (props) => {
  const tileSize = Number(props.tileSize);
  const style = {
    width: `${tileSize}px`,
    height: `${tileSize}px`,
    margin: '1px',
    backgroundColor: `${props.color}`,
    display: 'inline-block',
    verticalAlign: 'top'
  }
  return (
    <div style={style} />
  )

}

export default Background;