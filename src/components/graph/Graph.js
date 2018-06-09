import React from 'react';
import ReactDOM from 'react-dom';
import {Doughnut} from 'react-chartjs-2';

const data = {
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}],
  labels: [
    'Red',
    'Green',
    'Yellow'
  ]
};

class Graph extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="main-app">
        <h2>Doughnut Example</h2>
        <Doughnut data={data} />
      </div>
    );
  }
}


export default Graph;
