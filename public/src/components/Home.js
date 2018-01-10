import React from 'react';
import style from '../../style/app.css';
import 'whatwg-fetch';

const url = 'http://localhost:8888/carofweek';

export class Home extends React.Component {

  componentDidMount() {
    this.props.thunkFetchCow(url);
  }

  render() {
    return (
      <div className={style.pageStyle}>
        {this.props.carOfWeek.modelId}
        <hr/>
        {this.props.carOfWeek.review}
      </div>
    )
  }
}
