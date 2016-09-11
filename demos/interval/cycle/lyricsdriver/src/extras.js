import xs from 'xstream'

const makeIntervalDriver = (ceil, interval) => () => {
  return xs.periodic(1500).startWith(-1).map(n => (n + 1) % ceil)
}

export default makeIntervalDriver
