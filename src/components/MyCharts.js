import React from 'react';
import { VictoryChart, VictoryLine, VictoryPie } from 'victory';

export default function MyCharts() {
  return (
    <div className="my-charts">
      <h3>Line Chart</h3>
      <VictoryChart minDomain={{ y: 0, x: 0 }} maxDomain={{ y: 10, x: 6.5 }}>
        <VictoryLine
          style={{
            data: { stroke: 'green' },
          }}
          data={[
            { x: 0, y: 3 },
            { x: 1, y: 2 },
            { x: 2, y: 6 },
            { x: 3, y: 4 },
            { x: 4, y: 2 },
            { x: 5, y: 7 },
            { x: 6, y: 9 },
          ]}
        />
      </VictoryChart>
      <h3>Pie Chart</h3>
      <VictoryPie
        cornerRadius={5}
        innerRadius={80}
        padAngle={1}
        colorScale={['red', 'green', 'blue', 'orange', 'purple']}
        data={[
          { x: '25%', y: 25 },
          { x: '30%', y: 30 },
          { x: '10%', y: 10 },
          { x: '20%', y: 20 },
          { x: '15%', y: 15 },
        ]}
      />
    </div>
  );
}
