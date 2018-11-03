import React, { PureComponent } from 'react';
import { BarChartWrapper } from './BarChart.styles';
import BarChartItem from '../BarChartItem';

// util
const getChannelCount = (items = []) =>
  items.reduce((sum, { totalCount = 0 }) => (sum + totalCount), 0);

class BarChart extends PureComponent {
  render() {
    const { data = [] } = this.props;
    
    // Reorder the object according to the id
    data.sort((a, b) => (a.id > b.id) ? 1 : -1);
    
    // Create percentage data
    const totalChannelCount = getChannelCount(data);
    const renderData = data.map((item) => ({
      ...item,
      percentage: (item.totalCount * 100 / totalChannelCount)
    }));
    
    // Render chart items
    const chartItems = renderData.map((item) => (
      <BarChartItem key={item.name} {...item} />
    ));
    
    return (
      <BarChartWrapper>
        {chartItems}
      </BarChartWrapper>
    );
  }
}

BarChart.displayName = 'BarChart';
BarChart.propTypes = {};
BarChart.defaultProps = {
  data: [],
};

export default BarChart;
