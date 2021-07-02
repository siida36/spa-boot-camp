export default function reducer(state={
    desc: "",
    texts: [],
  }, action) {

    switch (action.type) {
      case "HELLO_WORLD": {
        console.log("Hello World!@reducer")
        return {...state, desc:action.payload+" from reducer"};
      }
      case "FETCH_TEXTS": {
        return {...state, fetching: true};
      }
      case "FETCH_TEXTS_REJECTED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "FETCH_TEXTS_FULFILLED": {
        return {
          ...state,
          // desc: action.payload
          texts: action.payload
        };
      }
    }

    return state;
}
