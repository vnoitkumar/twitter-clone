import React from 'react';
import SideMenu from '../side-menu';
import { createUseStyles } from 'react-jss';
import { BrowserRouter as Router } from 'react-router-dom';
const useStyles = createUseStyles({
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  main: {
    width: '50%'
    // backgroundColor: '#fff'
  },
  side_bar_right: {
    width: '30%'
    // backgroundColor: '#000'
  }
});

function App() {
  const { container, main, side_bar_right } = useStyles();

  return (
    <Router>
      <div className={container}>
        <SideMenu />
        <main className={main}></main>
        <aside className={side_bar_right}></aside>
      </div>
    </Router>
  );
}

export default App;
