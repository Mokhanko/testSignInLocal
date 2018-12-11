import React from 'react'
import connect from "react-redux/es/connect/connect"
import { Line} from 'react-chartjs-2'
import moment from "moment"
import {compose, withHandlers, setDisplayName, lifecycle} from 'recompose'
import {loadBtc} from "../../reducers/btcReducer"


const LogGraphs = ({array = false}) => (
  <div>
    <h2 className="text-center">BTC price change graphics</h2>
    <Line data={array}/>
  </div>
);

export default compose(
  connect(
    state => ({
      btc: state.btc.btcData
    }),
    {
      loadBtc
    }
  ),
  withHandlers({
    array: props => () => ({
      labels: props.btc && (props.btc || []).map(a => moment(a.time).format('hh:mm')),
      datasets: [{
        label: 'BTC',
        fill: false,
        lineTension: 0.1,
        backgroundColor: `rgba(75,192,192,1)`,
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: `rgba(255,0,0,1)`,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: props.btc && (props.btc || []).map(o => o.currency),
        datasetKeyProvider: props.btc.map(a => a.time) || 'datasetKeyProvider'
      }]
    }),
  }),
  lifecycle({
    componentDidMount() {
      setInterval(() => this.props.loadBtc(), 15000);
    }
  }),
  setDisplayName('BTC start page graphics')
)(LogGraphs);

