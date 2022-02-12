export const CompetitionHandler = (text) => {
  if (!text) return
  let arr = text.split('-')
  if (arr[0] === 'womens') {
    arr[0] = "women's"
  }
  return arr.join(' ')
}
