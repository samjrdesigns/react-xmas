import Background from "./Background";
import Ornament from "./Ornament";
import TreeEdge from "./TreeEdge";
import TreeFill from "./TreeFill";

const TreeTier = (props) => {
  const width = props.width % 2 === 0 ? props.width + 1 : props.width;
  const tier = Number(props.tier);
  const middle = Math.floor(width / 2);
  const seed = Number(props.seed);

  let divsFirstLine = [];

  for (let i = 0; i < width; i++) {
    if ((i > (middle - tier)) && (i < (middle + tier))) {
      divsFirstLine.push(<TreeFill key={i} tileSize={props.tileSize} />);
    } else if (i === (middle - tier)) {
      divsFirstLine.push(<TreeEdge key={i} side='left' tileSize={props.tileSize} />);
    } else if (i === (middle + tier)) {
      divsFirstLine.push(<TreeEdge key={i} side='right' tileSize={props.tileSize} />);
    } else {
      divsFirstLine.push(<Background key={i} color={props.bgColor2} tileSize={props.tileSize} />);
    }
  }

  let divsSecondLine = [];
  let ornamentIdx = seed;
  //console.log('length', props.ornamentColors.length);

  for (let j = 0; j < width; j++) {
    if (j < middle - tier - 1 || j > middle + tier + 1) {
      divsSecondLine.push(<Background key={j} color={props.bgColor1} tileSize={props.tileSize} />);
    } else if (j === middle - tier - 1) {
      divsSecondLine.push(<TreeEdge key={j} side='left' tileSize={props.tileSize} />);
    } else if (j === middle + tier + 1) {
      divsSecondLine.push(<TreeEdge key={j} side='right' tileSize={props.tileSize} />);
    } else if ((j - (middle - tier)) % 2 === 0) {
      divsSecondLine.push(<Ornament key={j} color={props.ornamentColors[ornamentIdx]} tileSize={props.tileSize} darkMode={props.darkMode} />);
      ornamentIdx = (ornamentIdx + 1) % props.ornamentColors.length;
      // console.log(ornamentIdx);
    } else {
      divsSecondLine.push(<TreeFill key={j} tileSize={props.tileSize} />);
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

export default TreeTier;