import React, { useState, useEffect } from 'react';
import Margin from "./Margin.js";
import Star from "./Star.js"
import TreeTier from "./TreeTier";
import Trunk from "./Trunk.js"

const MerryChristmas = (props) => {
  const tiers = Number(props.tiers);
  const numMarginLines = 3;
  const width = Number(props.width);
  const trunkRows = Number(props.trunkRows);
  const trunkCols = Number(props.trunkCols);
  const bgColorA = "LightBlue";//"SlateBlue"
  const bgColorB = "LightSkyBlue";//"DarkBlue"
  const ornamentColors = ["Red", "WhiteSmoke", "Aquamarine", "DarkOrange"];
  const darkMode = props.darkMode;
  const tileSize = Number(props.tileSize);

  const borderCss = darkMode ? "20px solid Peru" : "20px solid SaddleBrown"

  const headingStyle = {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '10px',
    fontFamily: 'ChristmasFont',
    fontSize: '60px',
    fontWeight: 'lighter',
    color: `${darkMode ? 'white' : 'black'}`
  }

  const gridStyle = {
    margin: 'auto',
    textAlign: 'center',
    border: `${borderCss}`,
    width: `${width * (tileSize + 2)}px`,
    padding: '5px',
    lineHeight: '0px'
  }

  const [seed, setSeed] = useState(0);

  useEffect(() => {
    // Set an interval to update the seed value
    const interval = setInterval(() => {
      setSeed((prevSeed) => (prevSeed + 1) % ornamentColors.length); // Increment the seed
    }, 200); // Change every 1000ms (1 second)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect only once

  let treeTiers = [];

  for (let i = 1; i <= tiers; i++) {
    treeTiers.push(
      <TreeTier key={i} width={width} tier={i} bgColor1={bgColorA} bgColor2={bgColorB} ornamentColors={ornamentColors} seed={seed} darkMode={darkMode} tileSize={tileSize} />
    )
  }

  return (
    <>
      <h1 style={headingStyle}>0 Merry Christmas, {props.name}! 1</h1>
      <br/>
      <div style={gridStyle}>
        <Margin width={width} rows={numMarginLines} bgColor1={bgColorA} bgColor2={bgColorB} tileSize={tileSize} />
        <Star width={width} bgColor1={bgColorA} bgColor2={bgColorB} tileSize={tileSize} />
        {treeTiers}
        <Trunk width={width} rows={trunkRows} cols={trunkCols} bgColor1={bgColorA} bgColor2={bgColorB} tileSize={tileSize} />
        <Margin width={width} rows={numMarginLines} bgColor1="LawnGreen" bgColor2="LawnGreen" tileSize={tileSize} />
      </div>
      <br/>
      <br/>

    </>
  )
}

export default MerryChristmas;