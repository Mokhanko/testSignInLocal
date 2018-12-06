import React from "react";
import { compose, lifecycle, withStateHandlers, withHandlers, pure, setDisplayName } from 'recompose';
import connect from "react-redux/es/connect/connect";
import Body from "./components/body"
import { loadDataFromCryptoAPI, loadCoins } from '../reducers/cryptoReducer'
import Graphics from './components/graphics'
import { cryptoSelector } from '../reducers/cryptoReducer'




const Contacts = ({
  crypto, loadingData, active, second_active, lim, selects, onChangeActive, onChangeSecondActive, onChangeLim, send
}) =>(
  <Body title={"Contact me"}>
    <select value={active} onChange={onChangeActive}>
      <option value=""></option>
      {selects.map((v, i) => (
        <option key={i} value={v}>{v}</option>
      ))}
    </select>
    <select value={second_active} onChange={onChangeSecondActive}>
      <option value=""></option>
      {selects.map((v, i) => (
        <option key={i} value={v}>{v}</option>
      ))}
    </select>
    <input type='number' value={lim} onChange={onChangeLim}/>
    <button className="btn" onClick={() => send()} disabled={active === second_active}>Get data
    </button>
    <div className="graphics">
      <Graphics crypto={crypto} label={[active, second_active]} loadingData={loadingData}/>
    </div>
  </Body>
);

export default compose(
  connect(
    state => ({
      crypto: cryptoSelector(state.cryptoData.cData, state.cryptoData.dataLoad),
      coins: state.cryptoData.coins,
      loadingData: state.cryptoData.loadingData
    }),
    {
      loadDataFromCryptoAPI,
      loadCoins
    }
  ),
  withStateHandlers(
    {active: '', second_active: '', selects: [], lim: 0},
    {
      onChangeActive: () => event => ({active: event.target.value}),
      onChangeSecondActive: () => event => ({second_active: event.target.value}),
      changeSelects: () => value => ({selects: value}),
      onChangeLim: () => event => ({lim: event.target.value})
    }
  ),
  withHandlers({
    send: props => () => {
      if(props.active !== props.second_active && props.lim !== 0){
        props.loadDataFromCryptoAPI({first: props.active, second: props.second_active, limit: props.lim});
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadCoins();
    },
    componentDidUpdate(prevProps) {
      if (prevProps.coins !== this.props.coins) {
        const selects = this.props.coins && this.props.coins.dat && this.props.coins.dat.Data.map(v => v.CoinInfo.Name);
        this.props.changeSelects(selects)
      }
    }
  }),
  setDisplayName('Build graphics page'),
  pure
)(Contacts);