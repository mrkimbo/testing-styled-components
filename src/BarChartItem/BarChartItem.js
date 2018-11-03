import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Bar, BarWrapper, Label, Legend, Total } from './BarChartItem.styles';

export default class BarChartItem extends PureComponent {
  render() {
    const { name, percentage } = this.props;
    return (
      <BarWrapper>
        <Legend>
          <Label>{name}</Label>
          <Total>{percentage}%</Total>
        </Legend>
        <Bar
          label={name}
          total={percentage}
        />
      </BarWrapper>
    );
  }
}

BarChartItem.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
