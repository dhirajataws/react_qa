import React from 'react';
import {makedata} from '../../../data/makeList';
import {modeldata} from '../../../data/modelList';
import {Redirect} from 'react-router-dom';
import style from '../../style/app.css';
import 'whatwg-fetch';

const url = '/details/';

export class SearchPage extends React.Component {
  searchFromMake;
  selectedMake;
  searchFromModel
  selectedModel;
  filteredModel;

  constructor(props) {
    super(props);

    this.setMake = this.setMake.bind(this);
    this.setModel = this.setModel.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.searchFromMake = makedata;
    this.searchFromModel = modeldata;

    this.initializeMake(this.searchFromMake[0].id);
    this.props.selectMake(this.selectedMake);
    this.filterModel(this.selectedMake);
    this.storeModel(this.filteredModel[0].id);
  }

  componentWillReceiveProps(newProps) {
    this.initializeMake(newProps.selectedMake);
    this.filterModel(newProps.selectedMake);
    this.storeModel(this.filteredModel[0].id);
  }

  handleButtonClick() {
    this.props.selectRedirect(true);
  }

  initializeMake(makeId) {
    this.selectedMake = makeId;
  }

  storeModel(modelId) {
    this.props.selectModel(modelId);
  }

  filterModel(makeId) {
    this.filteredModel = this.searchFromModel.filter(item => {
      return item.makeId === parseInt(makeId)
    })
  }

  setMake(e) {
    this.props.selectMake(e.target.value);
  }

  setModel(e) {
    this.selectedModel = e.target.value;
    this.props.selectModel(this.selectedModel);
  }

  render() {
    if (this.props.selectedRedirect) {
      this.props.selectRedirect(false);
      let redirectPath = `${url}${this.selectedMake}/${this.selectedModel}`;
      return <Redirect push to={redirectPath}/>
    }

    return (
      <div className={style.pageStyle}>
        Car Make : <select onChange={this.setMake}>
        {this.searchFromMake.map((item, i) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
        <hr/>
        Car Model : <select onClick={this.setModel} onChange={this.setModel}>
        {this.filteredModel.map((item, i) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
        <hr/>
        <button onClick={this.handleButtonClick} type="button" disabled={!this.selectedModel}>Details</button>
      </div>
    )
  }
}

