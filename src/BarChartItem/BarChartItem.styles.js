import styled from 'styled-components';

export const BarWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.48em;
`;

export const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0.35em 0;
`;

export const Label = styled.label`
  color: Blue;
  transition: none;
  font-size: 16px;
  line-height: 1em;
`;

export const Total = styled.div`
  color: red;
  transition: none;
  font-size: 14px;
  line-height: 1em;
`;

export const Bar = styled.div`
  width: 100%;
  height: 3px;
  background-color: #CCC;
  position: relative;
  overflow: hidden;

  &:after {
    position: absolute;
    display: block;
    content: '';
    height: 3px;
    top: 0;
    left: 0;
    background-color: white;
  }
`;
