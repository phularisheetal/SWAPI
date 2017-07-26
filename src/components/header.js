import React from 'react';
import styles from '../../styles/home.css';

const Header = (props) => {
  return <div className={styles.search}>
    <input placeholder="Search Planets" onChange={(event) => {props.getPlanets(event)}}/>
  </div>
}


export default Header;
