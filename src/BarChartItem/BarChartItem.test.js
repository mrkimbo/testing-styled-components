import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import BarChartItem from "./BarChartItem";
import { Bar, BarWrapper, Label, Legend, Total } from './BarChartItem.styles';

describe('<BarChartItem/>', () => {
  let props;
  const createComponent = () => shallow(<BarChartItem {...props}/>);
  
  beforeEach(() => {
    props = {
      name: 'Test Item',
      percentage: 0,
    };
  });
  
  it('should match snapshot', () => {
    expect(createComponent()).toMatchSnapshot();
  });
});

describe('[Styles]', () => {
  it('<Bar/> should match snapshot', () => {
    expect(shallow(<Bar/>)).toMatchSnapshot();
  });
  
  it('<BarWrapper/> should match snapshot', () => {
    expect(shallow(<BarWrapper/>)).toMatchSnapshot();
  });
  
  it('Label should match snapshot', () => {
    expect(shallow(<Label/>)).toMatchSnapshot();
  });
  
  it('<Legend/> should match snapshot', () => {
    expect(shallow(<Legend/>)).toMatchSnapshot();
  });
  
  it('<Total/> should match snapshot', () => {
    expect(shallow(<Total/>)).toMatchSnapshot();
  });
});
