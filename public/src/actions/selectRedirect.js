export const CHANGE_REDIRECT = 'CHANGE_REDIRECT';

export const selectRedirect = (redirect) => ({
  type: CHANGE_REDIRECT,
  payload: {redirect: redirect}
})