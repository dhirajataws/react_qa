import {SearchPage} from '../components/SearchPage';
import {connect} from 'react-redux';
import {selectMake} from '../actions/selectMake'
import {selectModel} from '../actions/selectModel'
import {selectRedirect} from "../actions/selectRedirect";

const mapDispatchToProps = (dispatch) => {
  return {
    selectMake: (make) => {
      dispatch(selectMake(make));
    },
    selectModel: (model) => {
      dispatch(selectModel(model));
    },
    selectRedirect: (redirect) => {
      dispatch(selectRedirect(redirect))
    }
  }
}

function mapStateToProps(state, hasProps) {
  return {
    selectedMake: state.selectedMake.make,
    selectedModel: state.selectedModel.model,
    selectedRedirect: state.selectedRedirect.redirect,
  };
}

export const searchPageContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPage);
