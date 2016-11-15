const todo = (state = null, action) => {
  switch (action.type) {
    case 'GET_SINGLE_TODO':
      return action.payload;
    default:
      return state
  }
};

export default todo;
