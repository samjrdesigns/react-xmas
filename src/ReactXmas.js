import './App.css';
import { useContext } from 'react';
import Mosaic from './Mosaic';
import AppContext from './AppContext';
import Settings from './Settings';

const ReactXmas = () => {

  const { visible, greeting, darkMode } = useContext(AppContext);
  const bgColor = darkMode ? 'black' : 'white';
  const display = visible ? 'block' : 'none';

  const style = {
    backgroundColor: `${bgColor}`,
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    display: `${display}`
  }

  const headingStyle = {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '10px',
    fontFamily: 'ChristmasFont',
    fontSize: '60px',
    fontWeight: 'lighter',
    color: `${darkMode ? 'white' : 'black'}`,
    marginBottom: '15px'
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

  return (
    <div style={style}>
      <Settings />
      <h1 style={headingStyle}>0 Merry Christmas, {greeting}! 1</h1>
      <Mosaic />
      <div style={copyStyle}>
        &copy; 2024 by <a href='https://github.com/samjrdesigns/react-xmas' style={anchorStyle} target='_blank' rel='noopener noreferrer'>samjrdesigns</a>
      </div>
    </div>
  );
}

export default ReactXmas;