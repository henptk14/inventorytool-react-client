import axios from "axios";
import { GET_ERRORS } from "./types";

export const addNewEntry = (product, history) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/product",
      product
    );
    console.log(history);
    history.push("/addNewEntry");
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
