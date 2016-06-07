const defaultState = {
  toolbarYPosition: 0,
};

function layoutReducer(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_TOOLBAR_Y':
      return {
        ...state,
        toolbarYPosition: action.data.y,
      };
    default:
      return state;
  }
}


export default layoutReducer;
