import axios from "axios";

export function helloWorld() {
  console.log("Hello world!");
  return { type: 'HELLO_WORLD'};
}

export function helloWorldWithParameter(param) {
  console.log(param);
  return { type: 'HELLO_WORLD', payload: param};
}

export function fetchTexts(param) {
  return function(dispatch) {
    dispatch({type: "FETCH_TEXTS"});
    axios.post("http://localhost:5000/fuga", {text: param})
      .then((response) => {
        dispatch({type: "FETCH_TEXTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TEXTS_REJECTED", payload: err})
      });
  };
}