import xs from 'xstream'

export default (parent, child, ...dependencies) => sources => {
  let proxies = dependencies.reduce((proxies,dep)=>({
    ...proxies,
    [dep]: xs.create()
  }),{})
  const childsinks = child({...sources,...proxies})
  const sinks = parent({...sources,['childsinks']:childsinks})
  Object.keys(proxies).forEach(proxy => proxies[proxy].imitate(sinks[proxy]))
  return sinks
}
