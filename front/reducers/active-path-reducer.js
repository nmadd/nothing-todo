const activePath = (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PATH':
      console.log('Active path payload', action.payload);
      return action.payload
    default:
      return state
  }
}

export default activePath;
