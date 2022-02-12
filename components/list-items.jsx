import Link from 'next/link'
import { DateHandler } from '@lib/date-handler'

export default function ListItems({ league, matches }) {
  return (
    <>
      {matches.map((item, idx) => {
        const matchCSS = `flex items-center justify-between p-3 rounded-xl text-sm font-sans leading-4 text-gray-900 hover:bg-blue-100/50`
        if ('time' in item) {
          return (
            <Link
              href={`/competition/${league
                .toLowerCase()
                .replace(/\s/g, '-')
                .replaceAll("'", '')}`}
              key={idx}
            >
              <a className={matchCSS}>
                <div className="flex flex-col space-y-2">
                  <p>{item.home}</p>
                  <p>{item.away}</p>
                </div>
                <div className="text-md leading-none text-blue-500 p-1.5 bg-gray-200/50 rounded-md">
                  @{DateHandler(item.time)}
                </div>
              </a>
            </Link>
          )
        } else {
          return (
            <Link
              href={`/competition/${league
                .toLowerCase()
                .replace(/\s/g, '-')
                .replaceAll("'", '')}`}
              key={idx}
            >
              <a className={matchCSS}>
                <div className="flex flex-col space-y-2">
                  <p>{item.home.team}</p>
                  <p>{item.away.team}</p>
                </div>
                <div className="text-md leading-none text-blue-500 p-1.5 bg-gray-200/50 rounded-md">
                  {item.home.goals}:{item.away.goals}
                </div>
              </a>
            </Link>
          )
        }
      })}
    </>
  )
}
