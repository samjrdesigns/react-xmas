import { useState } from 'react';
import './App.css';
import MerryChristmas from './MerryChristmas';

function App() {

  // Extract query parameters with default values
  const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    console.log(window.location.search);
    console.log(params);
    console.log(params.get('dark'));
    return {
      name: params.get('greeting') || 'Champ',
      tileSize: params.get('tile') || '20',
      tiers: params.get('foliage') || '7',
      trunkRows: params.get('trunkh') || '4',
      trunkCols: params.get('trunkw') || '5',
      dark: params.get('dark') === 'true' ? true : false
    };
  };

  const initialParams = getQueryParams();
  console.log(initialParams)

  const [name, setName] = useState(initialParams.name);
  const [tiers, setTiers] = useState(Number(initialParams.tiers));
  const [darkMode, setDarkMode] = useState(initialParams.dark);
  const [trunkRows, setTrunkRows] = useState(Number(initialParams.trunkRows));
  const [trunkCols, setTrunkCols] = useState(Number(initialParams.trunkCols));
  const [tileSize, setTileSize] = useState(Number(initialParams.tileSize));

  const bgColor = darkMode ? 'black' : 'white';
  const width = 2 * tiers + 9;
  const shareUrl = `https://reactxmas.online/?greeting=${name}&tile=${tileSize}&foliage=${tiers}&trunkh=${trunkRows}&trunkw=${trunkCols}&dark=${darkMode}`;

  const style = {
    backgroundColor: `${bgColor}`,
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%'
  }

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    gridTemplateRows: 'auto',
    gridAutoFlow: 'row',
    gap: '10px 10px',
    margin: 'auto',
    padding: '10px',
    width: '710px',
    fontSize: '14px'
  }

  const settingStyle = {
    width: 'auto',
    padding: '0px',
    margin: '0px',
    color: `${darkMode ? 'white' : 'black'}`
  }

  const inputStyle = {
    width: '100px'
  }

  const copyStyle = {
    textAlign: 'center',
    fontSize: '14px',
    marginTop: '20px',
    marginBottom: '40px',
    color: `${darkMode ? 'white' : 'black'}`
  }

  const anchorStyle = {
    color: `${darkMode ? 'white' : 'black'}`
  }

  const shareUrlStyle = {
    textAlign: 'center',
    fontSize: '14px',
    color: `${darkMode ? 'white' : 'black'}`
  }

  const changeName = (e) => {
    setName(e.target.value);
  }

  const changeDarkMode = (e, enable) => {
    e.preventDefault();
    if (darkMode !== enable) {
      setDarkMode(enable);
    }
  }

  const minTiers = 2;
  const maxTiers = 20;

  const changeTiers = (e, delta) => {
    e.preventDefault();
    let newTiers = tiers + delta;

    if (newTiers < minTiers) {
      newTiers = minTiers;
    } else if (newTiers > maxTiers) {
      newTiers = maxTiers;
    }
    setTiers(newTiers);

    const newMaxTrunkCols = 2 * newTiers - 1;
    const newTrunkCols = Math.min(trunkCols, newMaxTrunkCols);
    setTrunkCols(newTrunkCols);
  }

  const minTrunkCols = 1;
  const maxTrunkCols = width - 8;

  const changeTrunkCols = (e, delta) => {
    e.preventDefault();
    let newTrunkCols = trunkCols + delta;

    if (newTrunkCols < minTrunkCols) {
      newTrunkCols = minTrunkCols;
    } else if (newTrunkCols > maxTrunkCols) {
      newTrunkCols = maxTrunkCols;
    }
    setTrunkCols(newTrunkCols);
  }

  const minTrunkRows = 1;
  const maxTrunkRows = 15;

  const changeTrunkRows = (e, delta) => {
    e.preventDefault();
    let newTrunkRows = trunkRows + delta;

    if (newTrunkRows < minTrunkRows) {
      newTrunkRows = minTrunkRows;
    } else if (newTrunkRows > maxTrunkRows) {
      newTrunkRows = maxTrunkRows;
    }
    setTrunkRows(newTrunkRows);
  }

  const minTileSize = 6;
  const maxTileSize = 40;

  const changeTileSize = (e, delta) => {
    e.preventDefault();
    let newTileSize = tileSize + delta;

    if (newTileSize < minTileSize) {
      newTileSize = minTileSize;
    } else if (newTileSize > maxTileSize) {
      newTileSize = maxTileSize;
    }
    setTileSize(newTileSize);
  }

  return (
    <div style={style}>

      <div style={gridContainerStyle}>

        <div style={settingStyle}>
          <div>Greeting: </div>
          <input value={name} onChange={changeName} style={inputStyle}></input>
        </div>

        <div style={settingStyle}>
          <div>Tile Size: </div>
          <div>
            <button onClick={(e) => changeTileSize(e, -2)}>Small</button>
            <button onClick={(e) => changeTileSize(e, +2)}>Big</button>
          </div>
        </div>

        <div style={settingStyle}>
          <div>Foliage Size: </div>
          <div>
            <button onClick={(e) => changeTiers(e, -1)}>Shrink</button>
            <button onClick={(e) => changeTiers(e, +1)}>Grow</button>
          </div>
        </div>

        <div style={settingStyle}>
          <div>Trunk Height: </div>
          <div>
            <button onClick={(e) => changeTrunkRows(e, +1)}>Tall</button>
            <button onClick={(e) => changeTrunkRows(e, -1)}>Short</button>
          </div>
        </div>

        <div style={settingStyle}>
          <div>Trunk Width: </div>
          <div>
            <button onClick={(e) => changeTrunkCols(e, +2)}>Wide</button>
            <button onClick={(e) => changeTrunkCols(e, -2)}>Narrow</button>
          </div>
        </div>

        <div style={settingStyle}>
          <div>Dark Mode: </div>
          <div>
            <button onClick={(e) => changeDarkMode(e, true)}>Enable</button>
            <button onClick={(e) => changeDarkMode(e, false)}>Disable</button>
          </div>
        </div>

      </div>

      <div style={shareUrlStyle}>
        <span>Share: </span>
        <a href={shareUrl} style={anchorStyle}>{shareUrl}</a>
      </div>

      <MerryChristmas width={width} tiers={tiers} trunkRows={trunkRows} trunkCols={trunkCols} name={name} darkMode={darkMode} tileSize={tileSize} />

      <div style={copyStyle}>
        &copy; 2024 by <a href='https://github.com/samjrdesigns/react-xmas' style={anchorStyle} target='_blank' rel='noopener noreferrer'>samjrdesigns</a>
      </div>
    </div>
  );
}



export default App;