
import React from 'react';

import logRenderComponent from '../../hocs/logRenderComponent';
import InputNumber from '../InputNumber/InputNumber';
import InputDiscount from '../InputDiscount/InputDiscount';
import style from './Filter.module.css';


class Filter extends React.Component {

  // handleChange = (name, value) => {
  //   this.props.handleFilter({[name]: value });
  // };

  handleChangeMin = value => {
    this.props.handleFilter({ minPrice: value });
  };
  handleChangeMax = value => {
    this.props.handleFilter({ maxPrice: value });
  };
  handleChangeDiscount = value => {
    this.props.handleFilter({ discount: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4 className={style.filter_title}>Цена</h4>
        <div className={style.filter_row}>
          <div className={style.filter_price}>
            <label className={style.filter_label} htmlFor="from">от</label>
            <InputNumber name="minPrice" value={this.props.minPrice} onChange={this.handleChangeMin} />
          </div>
          <div className={style.filter_price}>
            <label className={style.filter_label} htmlFor="to">до</label>
            <InputNumber name="maxPrice" value={this.props.maxPrice} onChange={this.handleChangeMax} />
          </div>
        </div>
        <InputDiscount title="Скидка" name="discount" value={this.props.discount} onChange={this.handleChange} />
      </form>
    )
  }

};


export default logRenderComponent(Filter);