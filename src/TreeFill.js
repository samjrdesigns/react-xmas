const TreeFill = (props) => {
  const tileSize = Number(props.tileSize);
  const style = {
    width: `${tileSize}px`,
    height: `${tileSize}px`,
    margin: '1px',
    backgroundColor: 'DarkGreen',
    display: 'inline-block',
    verticalAlign: 'top'
  }

  return (
    <div style={style} />
  )
}

export default TreeFill;