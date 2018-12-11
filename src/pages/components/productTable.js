import React from 'react'
import {compose, branch, renderComponent} from 'recompose';
import Loader from "./loader";

const ProductCell = (props) => {
  const {_id, manufacturer, unit_name, unit_cost, characteristic} = props.productToChange;
  return !props.isProductCollapsed ?
    <tr>
      <td><div className="scrollable">{props.product.manufacturer}</div></td>
      <td><div className="scrollable">{props.product.unit_name}</div></td>
      <td><div className="scrollable">{props.product.unit_cost}</div></td>
      <td><div className="scrollable">{props.product.characteristic}</div></td>
      <td onClick={() => props.changeProductToChange(props.product)}><div>Edit</div></td>
      <td onClick={() => props.deleteFromDb(props.product._id)}><div>Delete</div></td>
    </tr>
    :
    <tr>
      <td><div><input type="text" value={manufacturer} onChange={e => props.changeProductToChange({
        ...props.productToChange,
        manufacturer: e.target.value
      })} className="table_input"/></div></td>
      <td><div><input type="text"  value={unit_name} onChange={e => props.changeProductToChange({
        ...props.productToChange,
        unit_name: e.target.value
      })} className="table_input"/></div></td>
      <td><div><input type="text"  value={unit_cost} onChange={e => props.changeProductToChange({
        ...props.productToChange,
        unit_cost: e.target.value
      })} className="table_input"/></div></td>
      <td><div><input type="textarea"  value={characteristic} onChange={e => props.changeProductToChange({
        ...props.productToChange,
        characteristic: e.target.value
      })} className="table_input"/></div></td>
      <td onClick={() => props.changeProductToChange({})}><div>Cancel</div></td>
      <td onClick={() => props.updateInDb(_id, manufacturer, unit_name, unit_cost, characteristic)}><div>Save</div></td>
    </tr>
};

const ProductTable = ({loadingSave, filters, productToChange, products, deleteFromDb, changeProductToChange, updateInDb,
  changeManufacturer, changeUnitName, changeUnitCost, changeCharacteristic, addFilter}) => (
  <div className="db_table">
    <h3 className="text-center">Products</h3>
    <div className='filter_input'>
      <input type='text' name='manufacturer' onChange={e => addFilter({
        ...filters,
        manufacturer: e.target.value
      })}/>
      <input type='text' name='unit_name' onChange={e => addFilter({
        ...filters,
        unit_name: e.target.value
      })}/>
      <input type='number' name='unit_cost' onChange={e => addFilter({
        ...filters,
        unit_cost: e.target.value
      })}/>
      <input type='text' name='characteristic' onChange={e => addFilter({
        ...filters,
        characteristic: e.target.value
      })}/>
    </div>
    <table className="table table-bordered">
      <colgroup>
        <col className="ten"/>
        <col className="ten"/>
        <col className="seven"/>
        <col className="sixtyfive"/>
        <col className="five"/>
        <col className="five"/>
      </colgroup>
      <thead>
      <tr>
        <th className="text-center">Manufacturer</th>
        <th className="text-center">Product Name</th>
        <th className="text-center">Product Price</th>
        <th className="text-center">Characteristic</th>
        <th className="text-center">Edit</th>
        <th className="text-center">Delete</th>
      </tr>
      </thead>
      <tbody className="text-left">
      {products.map((product) => (
        <ProductCell
          product={product}
          key={product._id}
          productToChange={productToChange}
          isProductCollapsed={product._id === productToChange._id}
          deleteFromDb={deleteFromDb}
          changeProductToChange={changeProductToChange}
          updateInDb={updateInDb}
          changeManufacturer={changeManufacturer}
          changeUnitName={changeUnitName}
          changeUnitCost={changeUnitCost}
          changeCharacteristic={changeCharacteristic}
        />
      ))}
      </tbody>
    </table>
  </div>
);

export default compose(
  branch(
    props => props.loadingSave,
    renderComponent(Loader)
  )
)(ProductTable);