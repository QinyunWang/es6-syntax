const inject = (items, sections) => {
  let numberOfSections = sections.length 
  var slicedSubArray = []

  // slice the items array to sub arrays which will add sections to middle
  slicedSubArray.push(items.slice(0, sections[0].index))
  for (let i=0; i<=numberOfSections-2; i++) {
    slicedSubArray.push(items.slice(sections[i].index, sections[i+1].index))
  }
  slicedSubArray.push(items.slice(sections[numberOfSections-1].index, items.length))

  let result = []
  for (let [index, section] of sections.entries()) {
    if (slicedSubArray[index].length!=0) {
      result.push(...slicedSubArray[index])
    }
    result.push(section.content)
  }
  if (slicedSubArray[slicedSubArray.length-1].length!=0) {
    result.push(...slicedSubArray[slicedSubArray.length-1])
  }
  return result
}
export { inject }
