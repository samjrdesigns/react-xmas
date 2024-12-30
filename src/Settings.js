import { useEffect, useContext } from 'react';
import AppContext from './AppContext';

const Settings = () => {

  const {
    setVisible, baseUrl,
    greeting, setGreeting,
    foliage, setFoliage,
    darkMode, setDarkMode,
    trunkHeight, setTrunkHeight,
    trunkWidth, setTrunkWidth,
    tileSize, setTileSize
  } = useContext(AppContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    const greeting = params.get('greeting');
    const tile = params.get('tile');
    const foliage = params.get('foliage');
    const trunkh = params.get('trunkh');
    const trunkw = params.get('trunkw');
    const dark = params.get('dark');

    if (greeting) {
      setGreeting(greeting);
    }

    if (tile && !isNaN(parseInt(tile))) {
      setTileSize(tile);
    }
    
    if (foliage && !isNaN(parseInt(foliage))) {
      setFoliage(foliage);
    }

    if (trunkh && !isNaN(parseInt(trunkh))) {
      setTrunkHeight(trunkh);
    }

    if (trunkw && !isNaN(parseInt(trunkw))) {
      setTrunkWidth(trunkw);
    }

    if (dark) {
      setDarkMode(dark === 'true');
    }

    // Now that all the search params have been processed, show the mosaic
    setVisible(true);

  }, []);

  const shareUrl = baseUrl +
    `?greeting=${greeting}` +
    `&tile=${tileSize}` +
    `&foliage=${foliage}` +
    `&trunkh=${trunkHeight}` +
    `&trunkw=${trunkWidth}` +
    `&dark=${darkMode}`;

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    gridTemplateRows: 'auto auto',
    gridAutoFlow: 'column',
    gap: '3px 10px',
    margin: 'auto',
    padding: '10px',
    width: '710px',
    fontSize: '14px',
    color: `${darkMode ? 'white' : 'black'}`,
    fontWeight: 'bold'
  }

  const settingStyle = {
    /*width: 'auto',
    padding: '0px',
    margin: '0px'*/
  }

  const inputStyle = {
    width: '100px',
    textAlign: 'center'
  }

  const btnStyle = {
    width: '55px'
  }

  const anchorStyle = {
    color: `${darkMode ? 'white' : 'black'}`
  }

  const shareUrlStyle = {
    textAlign: 'center',
    fontSize: '14px',
    color: `${darkMode ? 'white' : 'black'}`
  }

  const changeGreeting = (e) => {
    setGreeting(e.target.value);
  }

  const changeDarkMode = (e, enable) => {
    e.preventDefault();
    if (darkMode !== enable)
      setDarkMode(enable);
  }

  const changeFoliage = (e, delta) => {
    e.preventDefault();
    setFoliage(foliage + delta);
  }

  const changeTrunkWidth = (e, delta) => {
    e.preventDefault();
    setTrunkWidth(trunkWidth + delta);
  }

  const changeTrunkHeight = (e, delta) => {
    e.preventDefault();
    setTrunkHeight(trunkHeight + delta);
  }

  const changeTileSize = (e, delta) => {
    e.preventDefault();
    setTileSize(tileSize + delta);
  }

  return (
    <>
      <div style={gridContainerStyle}>

        
          <div style={{textAlign: 'center'}}>Greeting: </div>
          <input value={greeting} onChange={changeGreeting} style={inputStyle}></input>
        

          <div style={{textAlign: 'center'}}>Tile Size: </div>
          <div>
            <button style={btnStyle} onClick={(e) => changeTileSize(e, -2)}>Shrink</button>
            <button style={btnStyle} onClick={(e) => changeTileSize(e, +2)}>Grow</button>
          </div>

          <div style={{textAlign: 'center'}}>Foliage Size: </div>
          <div>
            <button style={btnStyle} onClick={(e) => changeFoliage(e, -1)}>Shrink</button>
            <button style={btnStyle} onClick={(e) => changeFoliage(e, +1)}>Grow</button>
          </div>

          <div style={{textAlign: 'center'}}>Trunk Height: </div>
          <div>
            <button style={btnStyle} onClick={(e) => changeTrunkHeight(e, -1)}>Shrink</button>
            <button style={btnStyle} onClick={(e) => changeTrunkHeight(e, +1)}>Grow</button>
          </div>

          <div style={{textAlign: 'center'}}>Trunk Width: </div>
          <div>
            <button style={btnStyle} onClick={(e) => changeTrunkWidth(e, -2)}>Shrink</button>
            <button style={btnStyle} onClick={(e) => changeTrunkWidth(e, +2)}>Grow</button>
          </div>

          <div style={{textAlign: 'center'}}>Dark Mode: </div>
          <div>
            <button style={btnStyle} onClick={(e) => changeDarkMode(e, true)}>On</button>
            <button style={btnStyle} onClick={(e) => changeDarkMode(e, false)}>Off</button>
          </div>

      </div>

      <div style={shareUrlStyle}>
        <span>Share: </span>
        <a href={shareUrl} style={anchorStyle}>{shareUrl}</a>
      </div>
    </>
  )
}

export default Settings;