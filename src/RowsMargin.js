import { useContext } from 'react';
import TileSquare from "./TileSquare";
import AppContext from './AppContext';

const RowsMargin = (props) => {

  const { mosaicWidth } = useContext(AppContext);
  const rows = Number(props.rows);

  const marginRows = Array.from({ length: rows }).map((_, i) => (
    <div key={i}>
      {Array.from({ length: mosaicWidth }).map((_, j) => (
        <TileSquare key={j} color={i % 2 ? props.bgColor1 : props.bgColor2} />
      ))}
    </div>
  ));

  return (
    <>
      {marginRows}
    </>
  )
}

export default RowsMargin;