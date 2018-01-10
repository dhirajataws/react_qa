import {store} from '../../store/configureStore';
import {CHANGE_SELECTION} from '../../actions/selectMake'
import expect from 'expect';
import {makedata} from '../../../../data/makeList';

describe('store', () => {
  it('should fetch car model details', () => {
    store.dispatch({
      type: CHANGE_SELECTION,
      payload: makedata
    })
    const actual = store.getState();
    expect(actual.selectedMake.length).toEqual(5);
  })
})


