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
  