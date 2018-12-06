import React from "react";
import {connect} from 'react-redux'
import {
  loadDb, writeToDb, changeManufacturer, changeUnitName,
  changeUnitCost, changeCharacteristic, deleteFromDb, updateInDb, changeProductToChange,
  addFilter
} from '../reducers/productsReducer'
import {searchProductManufacturer} from '../reducers/productsReducer'
import ProductTable from './components/productTable'

const mapStateToProps = (state) => ({
  products: searchProductManufacturer(state.products.products, state.products.filter_value,state.products.filters),
  manufacturer: state.products.manufacturer,
  unit_name: state.products.unit_name,
  unit_cost: state.products.unit_cost,
  characteristic: state.products.characteristic,
  loadingSave: state.products.loadingSave,
  productToChange: state.products.productToChange,
  filter_value: state.products.filter_value,
  filters: state.products.filters
});

const mapDispatchToProps = dispatch => ({
  loadDb: () => dispatch(loadDb()),
  writeToDb: (man, un, uc, ch) => dispatch(writeToDb(man, un, uc, ch)),
  changeManufacturer: (a) => dispatch(changeManufacturer(a)),
  changeUnitName: (a) => dispatch(changeUnitName(a)),
  changeUnitCost: (a) => dispatch(changeUnitCost(a)),
  changeCharacteristic: (a) => dispatch(changeCharacteristic(a)),
  deleteFromDb: (id) => dispatch(deleteFromDb(id)),
  updateInDb: (id, man, un, uc, ch) => dispatch(updateInDb(id, man, un, uc, ch)),
  changeProductToChange: (id) => dispatch(changeProductToChange(id)),
  addFilter: (filter_value) => dispatch(addFilter(filter_value))
});


class About extends React.Component {

  componentDidMount() {
    this.props.loadDb()
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.loadingSave !== this.props.loadingSave) {
      this.props.loadDb()
    }
  };

  addToDb = (a, b, c, d) => {
    this.props.writeToDb(a, b, c, d)
  };

  render() {
    return (
      <div className="about">
        <div className="add_db">
          <h2>Ad Product to Database</h2>
          <form action="#" className="add_db_form">
            <div className="form-group form-group-sm">
              <label htmlFor="manufacturer" className="control-label">Manufacturer</label>
              <input type="text" className="form-control" id="manufacturer" placeholder="Manufacturer"
                     onChange={e => this.props.changeManufacturer(e.target.value)}/>
            </div>
            <div className="form-group form-group-sm">
              <label htmlFor="unit_name" className="control-label">Unit Name</label>
              <input type="text" className="form-control" id="unit_name" placeholder="Unit Name"
                     onChange={e => this.props.changeUnitName(e.target.value)}/>
            </div>
            <div className="form-group form-group-sm">
              <label htmlFor="unit_cost" className="control-label">Unit Cost</label>
              <input type="number" className="form-control" id="unit_cost" placeholder="Unit Cost"
                     onChange={e => this.props.changeUnitCost(e.target.value)}/>
            </div>
            <div className="form-group form-group-md">
              <label htmlFor="unit_cost" className="control-label">Characteristic</label>
              <textarea className="form-control" placeholder="Characteristic"
                        onChange={e => this.props.changeCharacteristic(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-default btn-submit"
                    onClick={() => this.addToDb(this.props.manufacturer, this.props.unit_name, this.props.unit_cost, this.props.characteristic)}>Submit
            </button>
          </form>
        </div>
        <
          ProductTable
          {...
            this.props
          }
        />
      </div>
    )
      ;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);


//PREVIOUS VERSION
// componentDidMount() {
//   axios.get(`http://localhost:3001/api/v1/two`)
//     .then(res => this.setState({ goods: res.data})).catch(error => console.log(error));
// }
// axios.post(`http://localhost:3001/api/v1/two`, { good })
//   .then(res => {
//     console.log(res);
//     console.log(res.data);
//   })
//   axios({
//     method: 'post',
//     url: "http://localhost:3001/api/v1/two",
//     data: good
//   });
// };
// state = {
//   email: "",
//   password: "",
//   repassword: "",
//   isLogged: false
// }
//
// componentDidMount() {
//   let email = STORAGE.get('zalypa');
//   this.setState({
//     email
//   });
// }
//
// handleUserInput = (e) => {
//   const name = e.target.name;
//   const value = e.target.value;
//   this.setState({[name]: value}, () => this.validateField(name, value));
// }
//
// validateField(fieldName, value) {
//
//   switch (fieldName) {
//     case 'email':
//       let emailValid = this.state.emailError;
//       emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
//       console.log("EmailValid is " + emailValid);
//       this.setState({emailError: !emailValid});
//       break;
//     case 'password':
//       let passwordValid = this.state.passwordError;
//       passwordValid = value.length >= 6;
//       console.log("passwordValid is " + passwordValid);
//       this.setState({passwordError: !passwordValid});
//       break;
//     case 'repassword':
//       let repasswordValid = this.state.repasswordError;
//       repasswordValid = this.state.password === this.state.repassword;
//       console.log("repasswordValid is " + repasswordValid);
//       this.setState({repasswordError: !repasswordValid});
//       break;
//     default:
//       break;
//   }
//
//   console.log("EmailError is " + this.state.emailError);
//   console.log("passwordError is " + this.state.passwordError);
//   console.log("repasswordError is " + this.state.repasswordError);
// }
//
// onSignIn = (e) => {
//   STORAGE.set('zalypa', this.state.email)
// };