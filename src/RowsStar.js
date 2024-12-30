import { useContext } from 'react';
import TileSquare from "./TileSquare";
import TileStarBigPoint from "./TileStarBigPoint";
import TileStarLittlePoint from "./TileStarLittlePoint";
import AppContext from './AppContext';

const RowsStar = (props) => {
  
  const { mosaicWidth, starColor } = useContext(AppContext);
  const middle = Math.floor(mosaicWidth / 2);

  const bgElems1 = Array.from({ length: middle - 1 }).map((_, index) => (
    <TileSquare key={index} color={props.bgColor1} />
  ));

  const bgElems2 = Array.from({ length: middle - 1 }).map((_, index) => (
    <TileSquare key={index} color={props.bgColor2} />
  ));

  return (
    <>
      <div>
        {bgElems1}
        <TileStarLittlePoint direction='NW' />
        <TileStarBigPoint direction='N' />
        <TileStarLittlePoint direction='NE' />
        {bgElems1}
      </div>
      <div>
        {bgElems2}
        <TileStarBigPoint direction='W' />
        <TileSquare color={starColor} />
        <TileStarBigPoint direction='E' />
        {bgElems2}
      </div>
      <div>
        {bgElems1}
        <TileStarLittlePoint direction='SW' />
        <TileStarBigPoint direction='S' />
        <TileStarLittlePoint direction='SE' />
        {bgElems1}
      </div>
    </>
  )
}

export default RowsStar;