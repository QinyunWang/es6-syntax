const parseData = input => {
  var output = []
  const { data, column } = input
  for (let value of data) {
    let item = {}
    for (let [index, field] of value.entries()) {
      item[column[index].name] = field
    }
    output.push(item)
  }
  return output
}

export { parseData }
