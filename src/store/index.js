import { createStore } from 'redux';
import { maxBy, minBy } from 'csssr-school-utils';

import { reducer } from './reducer';
import data from '../products.json';
import { getCategories } from '../utils';

const minPrice = minBy(obj => obj.price, data).price;
const maxPrice = maxBy(obj => obj.price, data).price;
const categories = getCategories(data);
const activeCategory = window.location.pathname.substr(1);
window.history.replaceState({}, '', window.location.pathname);

export const initialState = {
  minPrice,
  maxPrice,
  discount: 0,
  categories,
  activeCategory,
};

export const store = createStore(reducer, initialState);
