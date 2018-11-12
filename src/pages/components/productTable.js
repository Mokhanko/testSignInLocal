import React from 'react'




const ProductCell = (props) => {
  const {_id, manufacturer, unit_name, unit_cost, characteristic} = props.productToChange;
  return !props.isProductCollapsed ?
    <tr>
      <td>{props.product.manufacturer}</td>
      <td>{props.product.unit_name}</td>
      <td>{props.product.unit_cost}</td>
      <td>{props.product.characteristic}</td>
      <td onClick={() => props.changeProductToChange(props.product)}>Edit</td>
      <td onClick={() => props.deleteFromDb(_id)}>Delete</td>
    </tr>
    :
    <tr>
      <td><input value={manufacturer} onChange={e => props.changeProductToChange({
        ...props.productToChange,
        manufacturer: e.target.value
      })}/></td>
      <td><input value={unit_name} onChange={e => props.changeProductToChange({
        ...props.productToChange,
        unit_name:e.target.value
      })}/></td>
      <td><input value={unit_cost} onChange={e => props.changeProductToChange({
        ...props.productToChange,
        unit_cost:e.target.value
      })}/></td>
      <td><input value={characteristic} onChange={e => props.changeProductToChange({
        ...props.productToChange,
        characteristic:e.target.value})}/></td>
      <td onClick={() => props.changeProductToChange({})}>Cancel</td>
      <td onClick={() => props.updateInDb(_id, manufacturer, unit_name, unit_cost, characteristic)}>Save</td>
    </tr>
};

const ProductTable = (props) => {
  console.log("Table",props);
  return (
    <table className="table table-bordered" style={{width: "400px"}}>
      <thead>
      <tr>
        <th className="text-center">Manufacture</th>
        <th className="text-center">Product Name</th>
        <th className="text-center">Product Price</th>
        <th className="text-center">Characteristic</th>
      </tr>
      </thead>
      <tbody className="text-center">
      {props.products.map((product) => (
        <ProductCell
          product={product}
          key={product._id}
          productToChange={props.productToChange}
          isProductCollapsed={product._id === props.productToChange._id}
          deleteFromDb={props.deleteFromDb}
          changeProductToChange={props.changeProductToChange}
          updateInDb={props.updateInDb}
          changeManufacturer={props.changeManufacturer}
          changeUnitName={props.changeUnitName}
          changeUnitCost={props.changeUnitCost}
          changeCharacteristic={props.changeCharacteristic}
        />
      ))}
      </tbody>
    </table>
  )
};

export default ProductTable;