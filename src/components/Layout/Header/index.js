import React from 'react';

import mealsImage from '../../../assets/meals.jpeg';

import styles from './style.module.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="Meals Image" />
      </div>
    </React.Fragment>
  );
};

export default Header;