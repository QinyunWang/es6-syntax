const parseData = input => {
  var output = []
  const { data, column } = input
  for (const value of data) {
    var item = {}
    for (const [index, field] of value.entries()) {
      item[column[index].name] = field
    }
    output.push(item)
  }
  return output
}

export { parseData }
