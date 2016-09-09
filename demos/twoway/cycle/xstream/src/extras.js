const focusDriver = (selector) => (stream)=> stream.addListener({
  next: ()=> document.querySelector(selector).focus(),
  error: ()=> {},
  complete: ()=> {}
});

export default focusDriver