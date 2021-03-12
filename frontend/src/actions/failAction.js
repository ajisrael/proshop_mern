export const dispatchFail = (type, error, dispatch) => {
  dispatch({
    type,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
};
