export const FETCH_COW = 'FETCH_COW';

export const storeCow = (cow) => ({
  type: FETCH_COW,
  payload: cow,
})

export const thunkFetchCow = function (url) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((cow) => dispatch(storeCow(cow)))
  };
}