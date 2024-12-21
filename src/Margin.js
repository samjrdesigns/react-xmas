import Background from "./Background";

const Margin = (props) => {
  const width = props.width % 2 === 0 ? props.width + 1 : props.width;
  const rows = Number(props.rows);

  const marginRows = Array.from({ length: rows }).map((_, i) => (
    <div key={i}>
      {Array.from({ length: width }).map((_, j) => (
        <Background key={j} color={i % 2 ? props.bgColor1 : props.bgColor2} tileSize={props.tileSize} />
      ))}
    </div>
  ));

  return (
    <>
      {marginRows}
    </>
  )
}

export default Margin;