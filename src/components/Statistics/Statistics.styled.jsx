import styled from '@emotion/styled'


export const StatisticsList = styled.ul`
  padding-left: 65px;
  padding-right: 65px;
`;

export const StatisticsItem = styled.li`
  background-color: #f0edf0;
  display: block;
  padding: 5px;
  margin-bottom: 10px;
      border-radius: 10px;
  :nth-last-of-type(-n + 2) {
    font-weight: 700;
    background-color: green;
    color: white;
  }
  :nth-last-of-type() {
    margin-bottom: 0px;
  }
`;