import Background from "./Background";
import TrunkFill from "./TrunkFill";

const Trunk = (props) => {
  const width = props.width % 2 === 0 ? props.width + 1 : props.width;
  const rows = Number(props.rows);
  const cols = Number(props.cols);
  const numBg = Math.floor((width - cols) / 2);

  const bgElems1 = Array.from({ length: numBg }).map((_, index) => (
    <Background key={index} color={props.bgColor1} tileSize={props.tileSize} />
  ));

  const bgElems2 = Array.from({ length: numBg }).map((_, index) => (
    <Background key={index} color={props.bgColor2} tileSize={props.tileSize} />
  ));

  const trunkElems = Array.from({ length: cols }).map((_, index) => (
    <TrunkFill key={index} tileSize={props.tileSize} />
  ));

  const trunkRows = Array.from({ length: rows }).map((_, index) => (
    <div key={index}>
      {index % 2 === 0 ? bgElems2 : bgElems1}
      {trunkElems}
      {index % 2 === 0 ? bgElems2 : bgElems1}
    </div>
  ));

  return (
    <>
      {trunkRows}
    </>
  )
}

export default Trunk;