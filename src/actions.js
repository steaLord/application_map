export const add = (locos) => ({
  type: "ADD",
  payload: locos,
});
export const del = (locos) => ({ type: "DEL", payload: locos });
