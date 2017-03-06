import xs from 'xstream'

const makeIteratorDriver = arr => () => {
  return xs.periodic(1500).startWith(-1).map(
    n => arr[(n + 1) % arr.length]
  )
}

export default makeIteratorDriver
