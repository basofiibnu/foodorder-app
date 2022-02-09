import React, { Fragment } from 'react';
import AvailableMeals from './Available';
import MealsSummary from './Summary';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
