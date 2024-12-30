import { useState, useMemo } from 'react';
import AppContext from './AppContext'

const AppProvider = ({children}) => {

  // State Variables
  const [visible, setVisible] = useState(false);
  const [greeting, setGreeting] = useState('Champ');
  const [foliage, setFoliageState] = useState(7);
  const [darkMode, setDarkMode] = useState(false);
  const [trunkHeight, setTrunkHeightState] = useState(4);
  const [trunkWidth, setTrunkWidthState] = useState(3);
  const [tileSize, setTileSizeState] = useState(20);

  // Colors
  const ornamentColors = ["Red", "Yellow", "Aquamarine", "Lime", "DarkOrange"];
  const foliageColor = darkMode ? "DarkGreen" : "ForestGreen";
  const skyColorA = darkMode ? "MediumBlue" : "LightBlue";
  const skyColorB = darkMode ? "Blue" : "LightSkyBlue";
  const grassColor = darkMode ? "LimeGreen" : "LawnGreen";
  const starColor = darkMode ? "Gold" : "Orange";
  const trunkColor = darkMode ? "Brown" : "Brown";
  const frameColor = darkMode ? "Peru" : "SaddleBrown";
  
  // Other Settings
  const baseUrl = "https://reactxmas.online/";
  const skyLines = 3;
  const marginSides = 3;
  const grassLines = 3;

  const mosaicWidth = useMemo(() => {
    return (2 * foliage + 2 * marginSides + 3)
  }, [foliage]);

  const minFoliage = 2;
  const maxFoliage = 20;

  const setFoliage = (newFoliage) => {
    newFoliage = getBoundValue(newFoliage, minFoliage, maxFoliage);
    const newMaxTrunkWidth = (newFoliage * 2) + 1
    setFoliageState(newFoliage);
    setTrunkWidthState(getBoundValue(trunkWidth, minTrunkWidth, newMaxTrunkWidth));
  };

  const minTrunkHeight = 1;
  const maxTrunkHeight = 15;

  const setTrunkHeight = (newHeight) => {
    setTrunkHeightState(getBoundValue(newHeight, minTrunkHeight, maxTrunkHeight));
  };

  const minTrunkWidth = 1;
  const maxTrunkWidth = mosaicWidth - 8;

  const setTrunkWidth = (newWidth) => {
    setTrunkWidthState(getBoundValue(newWidth, minTrunkWidth, maxTrunkWidth));
  };

  const minTileSize = 6;
  const maxTileSize = 40;

  const setTileSize = (newSize) => {
    setTileSizeState(getBoundValue(newSize, minTileSize, maxTileSize));
  };

  const value = {
    visible, setVisible,
    greeting, setGreeting,
    foliage, setFoliage,
    darkMode, setDarkMode,
    trunkHeight, setTrunkHeight,
    trunkWidth, setTrunkWidth,
    tileSize, setTileSize,
    mosaicWidth, skyLines,
    marginSides, grassLines,
    foliageColor, trunkColor,
    grassColor, starColor,
    skyColorA, skyColorB,
    frameColor, ornamentColors,
    baseUrl
  };

  const getBoundValue = (value, lowerBound, upperBound) => {
    if (isNaN(value) || isNaN(lowerBound) || isNaN(upperBound))
      return undefined;

    let newValue = value;
    newValue = Math.max(lowerBound, newValue);
    newValue = Math.min(upperBound, newValue);
    
    return newValue;
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;