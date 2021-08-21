export function isObject(ref) {
  return !!ref && typeof ref === 'object'
}

export function remove(collection, ref, prop = 'id') {
  const index = isObject(ref)
    ? collection.findIndex(item => item[prop] === ref[prop])
    : ref
  if (index > -1) {
    return collection.splice(index, 1).pop()
  }
}

export function moveElementFromTo(arr, from, to, prop = 'id') {
  const indexTo = isObject(to)
    ? arr.findIndex(item => item[prop] === to[prop])
    : to
    const indexFrom = isObject(from)
    ? arr.findIndex(item => item[prop] === from[prop])
    : from
  arr.splice(indexTo, 0, arr.splice(indexFrom, 1)[0])
}
