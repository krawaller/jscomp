import xs from 'xstream'
const {localStorage} = window

const makeStoreDriver = (key) => (save$) => {
  save$.addListener({
    next: (i) => localStorage.setItem(key, i),
    error: () => {},
    complete: () => {}
  })
  return xs.of(localStorage.getItem(key))
}

export default makeStoreDriver
