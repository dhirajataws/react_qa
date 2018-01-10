import {store} from '../../store/configureStore';
import {CHANGE_MODEL_SELECTION} from '../../actions/selectModel'
import expect from 'expect';
import {modeldata} from '../../../../data/modelList';

describe('store', () => {
  it('should fetch car model details', () => {
    store.dispatch({
      type : CHANGE_MODEL_SELECTION,
      payload :modeldata
    })
    const actual = store.getState();
    expect(actual.selectedModel.length).toEqual(11);
  })
})





