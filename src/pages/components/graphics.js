import React from 'react';
import { Line as L } from 'react-chartjs-2';
import moment from 'moment';
import connect from "react-redux/es/connect/connect";
import {compose, branch, renderComponent, withHandlers, setDisplayName, lifecycle} from 'recompose';
import './styles.css'
import Loader from "./loader";
import {cryptoSelector, onChangeCryptoData} from '../../reducers/cryptoReducer'


const Line = ({crypto = false, array}) => (
    <div>
      <h2 className="text-center">Line compare graphics</h2>
      <L data={array(crypto)}/>
    </div>
);



export default compose(
  connect(
    state => ({
      crypto: cryptoSelector(state.cryptoData.cData, state.cryptoData.dataLoad)
    }),
    {
      onChangeCryptoData
    }
  ),
  withHandlers({
    array: props => arr => {
      const array = (arr && Object.keys(arr).map(o => arr[o])) || [] ;
      return {
        labels: (array && array[0] && array[0].Data.map(a => moment.unix(a.time).format('DD-MM-YYYY'))) || [],
        datasets: (array || []).map((i, a) => ({
          label: props.label[a],
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192, 1)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: `rgba(${255 / a | 0},${255 / a | 0},${255 / a | 0},1)`,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: i.Data.map(a => a.close) || [],
          datasetKeyProvider: i.Data.map(a => a.time) || []
        }))
      }
    },
  }),
  branch(
    props => props.loadingData,
    renderComponent(Loader)
  ),
  branch(
    props => props.crypto.length === 0,
    renderComponent(() => 'NO DATA')
  ),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (prevProps.label !== this.props.label) {
       this.props.onChangeCryptoData([]);
      }
    }
  }),
  setDisplayName('Graphic with data')
)(Line);

