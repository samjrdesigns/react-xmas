import { useContext } from 'react';
import TileSquare from "./TileSquare";
import AppContext from './AppContext';

const RowsTrunk = (props) => {
  
  const { trunkHeight, trunkWidth, mosaicWidth, trunkColor } = useContext(AppContext);
  const numBg = Math.floor((mosaicWidth - trunkWidth) / 2);

  const bgElems1 = Array.from({ length: numBg }).map((_, index) => (
    <TileSquare key={index} color={props.bgColor1} />
  ));

  const bgElems2 = Array.from({ length: numBg }).map((_, index) => (
    <TileSquare key={index} color={props.bgColor2} />
  ));

  const trunkElems = Array.from({ length: trunkWidth }).map((_, index) => (
    <TileSquare key={index} color={trunkColor} />
  ));

  const trunkRows = Array.from({ length: trunkHeight }).map((_, index) => (
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

export default RowsTrunk;