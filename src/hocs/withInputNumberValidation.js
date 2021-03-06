import React from 'react';
import { toInt } from 'csssr-school-utils';

export default InputNumberComponent => {
  class withInputNumberValidation extends React.Component {

    handleChange = event => {
      const newValue = toInt(event.target.value);

      if (newValue !== this.props.value) {
          this.props.onChange(this.props.name, newValue);
      }
    };

    render() {
      return <InputNumberComponent {...this.props} onChange={this.handleChange} />;
    }
  }

  return withInputNumberValidation;
};