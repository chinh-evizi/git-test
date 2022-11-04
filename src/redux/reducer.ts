import React from "react";

type Props = {};
const initValue = {
  isAuth: false,
};

const reducer = (state: Props = initValue, action: any) => {
  const { type, payload } = action;
  console.log(action);
  
  switch (type) {
    case "GET_LOGIN":
      {
        console.log("get login reducer");
        return {
          ...state,
          isAuth: payload,
        };
      }
      break;

    default:
      break;
  }
  return state;
};

export default reducer;
