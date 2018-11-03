import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { BarChartWrapper } from './BarChart.styles';

import BarChart from "./BarChart";

const generateData = (item, idx, arr) => ({
  name: `item${idx}`,
  totalCount: Math.abs(arr.length - idx),
});

describe('<BarChart/>', () => {
  const dummyData = new Array(2).fill(null).map(generateData);
  const createComponent = (serializer = shallow) => serializer(
    <BarChart data={dummyData}/>
  );
  
  it('should match shallow snapshot', () => {
    expect(createComponent()).toMatchSnapshot();
  });
});

describe('[Styles]', () => {
  it('<BarChartWrapper/> should match snapshot', () => {
    expect(shallow(<BarChartWrapper/>)).toMatchSnapshot();
  });
});
