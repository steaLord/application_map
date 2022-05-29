const initialState = {
  locos: [],
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ADD":
      return { ...state, locos: action.payload };
    case "DEL":
      return { ...state, locos: action.payload };
    default:
      return state;
  }
};
export default reducer;
