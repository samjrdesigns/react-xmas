const TreeEdge = (props) => {
  const tileSize = Number(props.tileSize);
  const left = (props.side === 'left') ? `${tileSize}px` : '0px'
  const right = (props.side === 'right') ? `${tileSize}px` : '0px'
  

  const style = {
    width: '0',
    height: '0',
    borderLeft: `${left} solid transparent`,
    borderRight: `${right} solid transparent`,
    borderBottom: `${tileSize}px solid DarkGreen`,
    display: 'inline-block',
    margin: '1px',
    verticalAlign: 'top'
  }

  return (
    <div style={style}/>
  )

}

export default TreeEdge;