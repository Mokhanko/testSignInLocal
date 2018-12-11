import React from "react";
import {connect} from 'react-redux'
import {compose, lifecycle, withHandlers, pure, setDisplayName, } from 'recompose';
import {
  loadDb, writeToDb, changeManufacturer, changeUnitName,
  changeUnitCost, changeCharacteristic, deleteFromDb, updateInDb, changeProductToChange,
  addFilter
} from '../reducers/productsReducer'
import {searchProductManufacturer} from '../reducers/productsReducer'
import ProductTable from './components/productTable'


const About = ({products, manufacturer, unit_name, unit_cost, characteristic, loadingSave, productToChange,
  filter_value, filters, loadDb, writeToDb, changeManufacturer, changeUnitName,
  changeUnitCost, changeCharacteristic, deleteFromDb, updateInDb, changeProductToChange, addFilter, addToDb}) => (

  <div className="about">
    <div className="add_db">
      <h2>
        Ad Product to Database
      </h2>
      <form action="#" className="add_db_form">
        <div className="form-group form-group-sm">
          <label htmlFor="manufacturer" className="control-label">Manufacturer</label>
          <input type="text"
                 className="form-control"
                 id="manufacturer"
                 placeholder="Manufacturer"
                 onChange={e => changeManufacturer(e.target.value)}/>
        </div>
        <div className="form-group form-group-sm">
          <label htmlFor="unit_name" className="control-label">Unit Name</label>
          <input type="text"
                 className="form-control"
                 id="unit_name"
                 placeholder="Unit Name"
                 onChange={e => changeUnitName(e.target.value)}/>
        </div>
        <div className="form-group form-group-sm">
          <label htmlFor="unit_cost" className="control-label">Unit Cost</label>
          <input type="number"
                 className="form-control"
                 id="unit_cost"
                 placeholder="Unit Cost"
                 onChange={e => changeUnitCost(e.target.value)}/>
        </div>
        <div className="form-group form-group-md">
          <label htmlFor="unit_cost" className="control-label">Characteristic</label>
          <textarea className="form-control"
                    placeholder="Characteristic"
                    onChange={e => changeCharacteristic(e.target.value)}/>
        </div>
        <button type="submit"
                className="btn btn-default btn-submit"
                onClick={() => addToDb(manufacturer, unit_name, unit_cost, characteristic)}>Submit
        </button>
      </form>
    </div>
    <
      ProductTable
        loadingSave={loadingSave}
        filters={filters}
        productToChange={productToChange}
        products={products}
        deleteFromDb={deleteFromDb}
        changeProductToChange={changeProductToChange}
        updateInDb={updateInDb}
        changeManufacturer={changeManufacturer}
        changeUnitName={changeUnitName}
        changeUnitCost={changeUnitCost}
        changeCharacteristic={changeCharacteristic}
        addFilter={addFilter}
    />
  </div>
);

export default compose(
  connect(
    (state) => ({
      products: searchProductManufacturer(state.products.products, state.products.filter_value,state.products.filters),
      manufacturer: state.products.manufacturer,
      unit_name: state.products.unit_name,
      unit_cost: state.products.unit_cost,
      characteristic: state.products.characteristic,
      loadingSave: state.products.loadingSave,
      productToChange: state.products.productToChange,
      filter_value: state.products.filter_value,
      filters: state.products.filters
    }),
    {
      loadDb,
      writeToDb,
      changeManufacturer,
      changeUnitName,
      changeUnitCost,
      changeCharacteristic,
      deleteFromDb,
      updateInDb,
      changeProductToChange,
      addFilter
    }
  ),
  withHandlers({
    addToDb: props => (a, b, c, d) => {
      props.writeToDb(a, b, c, d)
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadDb()
    }
  }),
  setDisplayName('Build table from MongoDB page'),
  pure
)(About);
