import React from 'react';
import {modeldata} from '../../../data/modelList';
import style from '../../style/app.css';

export class Details extends React.Component {
  car;

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.filterCar(this.props.make, this.props.model);
  }

  componentWillReceiveProps(newProps) {
    this.filterCar(newProps.make, newProps.model);
  }

  filterCar(make, model) {
    this.car = modeldata.filter(item => {
      return (parseInt(item.id) === parseInt(model) && parseInt(item.makeId) === parseInt(make))
    })
  }

  render() {
    return (
      <div className={style.pageStyle}>
        name : {this.car[0].name}
        <hr/>
        price: {this.car[0].price}
        <hr/>
        imageUrl: {this.car[0].imageUrl}
      </div>
    )
  }
}

