export function helloWorld() {
  console.log("Hello world!");
  return { type: 'HELLO_WORLD'};
}

export function helloWorldWithParameter(param) {
  console.log(param);
  return { type: 'HELLO_WORLD'};
}