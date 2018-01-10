import {store} from '../../store/configureStore';
import {FETCH_COW} from '../../actions/fetchCow';
import expect from 'expect';


describe('store', () => {

  let cowReview = 'The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016.';

  it('should add car of week into store', () => {
    store.dispatch({
      type: FETCH_COW,
      payload: {
        "modelId": 520,
        "review": cowReview
      }
    })
    const actual = store.getState();
    expect(parseInt(actual.carOfWeek.modelId)).toEqual(520);
    expect(actual.carOfWeek.review === cowReview);
  })

  it('should initialise store with initial data ', () => {
    const actual = store.getState();
    console.log(actual);
    expect(actual.selectedMake).toEqual({});
    expect(actual.selectedModel).toEqual({});
    expect(actual.selectedRedirect.redirect).toEqual(false);
  })
})





