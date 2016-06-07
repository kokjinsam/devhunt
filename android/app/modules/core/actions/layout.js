export default {
  updateToolbarPosition({ dispatch }, newPosition) {
    dispatch({
      type: 'UPDATE_TOOLBAR_Y',
      data: {
        y: newPosition,
      },
    });
  },
};
