import {Home} from '../components/Home';
import {connect} from 'react-redux';
import { thunkFetchCow} from "../actions/fetchCow";

const mapDispatchToProps = (dispatch) => {
  return {
    thunkFetchCow: (url) => {
      dispatch(thunkFetchCow(url))
    }
  }
}

function mapStateToProps(state) {
  return {
    carOfWeek: state.carOfWeek
  };
}

export const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
