import Background from "./Background";
import StarBigPoint from "./StarBigPoint";
import StarLittlePoint from "./StarLittlePoint";
import StarFill from "./StarFill";

const Star = (props) => {
  const width = props.width % 2 === 0 ? props.width + 1 : props.width;
  const middle = Math.floor(width / 2);

  const bgElems1 = Array.from({ length: middle - 1 }).map((_, index) => (
    <Background key={index} color={props.bgColor1} tileSize={props.tileSize} />
  ));

  const bgElems2 = Array.from({ length: middle - 1 }).map((_, index) => (
    <Background key={index} color={props.bgColor2} tileSize={props.tileSize} />
  ));

  return (
    <>
      <div>
        {bgElems1}
        <StarLittlePoint direction='NW' tileSize={props.tileSize} />
        <StarBigPoint direction='N' tileSize={props.tileSize} />
        <StarLittlePoint direction='NE' tileSize={props.tileSize} />
        {bgElems1}
      </div>
      <div>
        {bgElems2}
        <StarBigPoint direction='W' tileSize={props.tileSize} />
        <StarFill tileSize={props.tileSize} />
        <StarBigPoint direction='E' tileSize={props.tileSize} />
        {bgElems2}
      </div>
      <div>
        {bgElems1}
        <StarLittlePoint direction='SW' tileSize={props.tileSize} />
        <StarBigPoint direction='S' tileSize={props.tileSize} />
        <StarLittlePoint direction='SE' tileSize={props.tileSize} />
        {bgElems1}
      </div>
    </>
  )
}

export default Star;