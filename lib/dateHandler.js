export const DateHandler = (time) => {
  let d = new Date()
  let utc = d.toUTCString()
  let arr = utc.split(' ')
  let utcTime = arr[4].split(':')

  // swap UTC time with match time
  let matchTime = time.split(':')
  utcTime[0] = matchTime[0]
  utcTime[1] = matchTime[1]
  let newTime = utcTime.join(':')

  // put new utc time back into string
  arr[4] = newTime
  let newUtc = arr.join(' ')

  // convert new UTC date back to Sydney time
  let syd = new Date(newUtc)
  let sydHours = syd.getHours()
  let sydMinutes = syd.getMinutes()
  if (sydHours < 10) {
    sydHours = `0${sydHours}`
  }
  if (sydMinutes === 0) {
    sydMinutes = `${sydMinutes}0`
  }
  return `${sydHours}:${sydMinutes}`
}
