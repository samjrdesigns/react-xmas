import { useState, useEffect, useContext } from 'react';
import RowsMargin from "./RowsMargin";
import RowsStar from "./RowsStar"
import RowsFoliageTier from "./RowsFoliageTier";
import RowsTrunk from "./RowsTrunk"
import AppContext from './AppContext';

const Mosaic = () => {

  const {
    foliage, tileSize, mosaicWidth, skyLines, grassLines,
    grassColor, skyColorA, skyColorB, frameColor
  } = useContext(AppContext);

  const gridStyle = {
    margin: 'auto',
    textAlign: 'center',
    border: `20px solid ${frameColor}`,
    width: `${mosaicWidth * (tileSize + 2)}px`,
    padding: '5px',
    lineHeight: '0px'
  }

  const [seed, setSeed] = useState(0);

  useEffect(() => {
    // Set an interval to update the seed value
    const interval = setInterval(() => {
      setSeed((prevSeed) => (prevSeed + 1) % 4); // Increment the seed
    }, 1000); // Change every 500 ms

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  let treeTiers = [];

  for (let i = 1; i <= foliage; i++) {
    treeTiers.push(
      <RowsFoliageTier key={i} tier={i} bgColor1={skyColorA} bgColor2={skyColorB} seed={seed} />
    )
  }

  return (
    <>
      <div style={gridStyle}>
        <RowsMargin rows={skyLines} bgColor1={skyColorA} bgColor2={skyColorB} />
        <RowsStar bgColor1={skyColorA} bgColor2={skyColorB} />
        {treeTiers}
        <RowsTrunk bgColor1={skyColorA} bgColor2={skyColorB} />
        <RowsMargin rows={grassLines} bgColor1={grassColor} bgColor2={grassColor} />
      </div>
    </>
  )
}

export default Mosaic;