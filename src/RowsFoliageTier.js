import TileSquare from "./TileSquare";
import TileOrnament from "./TileOrnament";
import TileFoliageEdge from "./TileFoliageEdge";
import AppContext from './AppContext';
import { useContext } from "react";

const RowsFoliageTier = (props) => {

  const { mosaicWidth, ornamentColors, foliageColor } = useContext(AppContext);

  const tier = Number(props.tier);
  const middle = Math.floor(mosaicWidth / 2);
  const seed = Number(props.seed);

  let divsFirstLine = [];

  for (let i = 0; i < mosaicWidth; i++) {
    if ((i > (middle - tier)) && (i < (middle + tier))) {
      divsFirstLine.push(<TileSquare key={i} color={foliageColor} />);
    } else if (i === (middle - tier)) {
      divsFirstLine.push(<TileFoliageEdge key={i} side='left' />);
    } else if (i === (middle + tier)) {
      divsFirstLine.push(<TileFoliageEdge key={i} side='right' />);
    } else {
      divsFirstLine.push(<TileSquare key={i} color={props.bgColor2} />);
    }
  }

  let divsSecondLine = [];
  let ornamentIdx = seed;

  for (let j = 0; j < mosaicWidth; j++) {
    if (j < middle - tier - 1 || j > middle + tier + 1) {
      divsSecondLine.push(<TileSquare key={j} color={props.bgColor1} />);
    } else if (j === middle - tier - 1) {
      divsSecondLine.push(<TileFoliageEdge key={j} side='left' />);
    } else if (j === middle + tier + 1) {
      divsSecondLine.push(<TileFoliageEdge key={j} side='right' />);
    } else if ((j - (middle - tier)) % 2 === 0) {
      divsSecondLine.push(<TileOrnament key={j} color={ornamentColors[ornamentIdx]} />);
      ornamentIdx = (ornamentIdx + 1) % ornamentColors.length;
    } else {
      divsSecondLine.push(<TileSquare key={j} color={foliageColor} />);
    }
  }

  return (
    <>
      <div key={1}>
        {divsFirstLine}
      </div>
      <div key={2}>
        {divsSecondLine}
      </div>
    </>
  )

}

export default RowsFoliageTier;