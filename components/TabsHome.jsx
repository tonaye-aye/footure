import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsHome({ fixtures, results }) {
  let [footballData] = useState({
    fixtures,
    results
  })

  return (
    <section className="px-4">
      <Tab.Group>
        <Tab.List className="w-full max-w-sm flex p-1 space-x-1 bg-blue-900/50 rounded-xl">
          {Object.keys(footballData).map((category, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-md leading-5 font-medium text-blue-200 rounded-lg transision ease-in duration-100 first-letter:capitalize',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-500 ring-blue-800 ring-opacity-60',
                  selected
                    ? 'text-blue-900 bg-white shadow'
                    : 'hover:bg-gray-900/50 hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(footballData).map((items, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-500 ring-blue-800 ring-opacity-60'
              )}
            >
              <ul>
                {items.map(({ id, league, matches }) => (
                  <li
                    key={id}
                    className="relative p-3 rounded-md hover:bg-gray-100 cursor-pointer"
                  >
                    <h1 className="font-sans font-bold text-lg text-blue-600">
                      {league}
                    </h1>
                    {matches.map((item, idx) => {
                      const matchCSS = `flex items-center justify-between mt-1 py-2 space-x-3 text-sm font-sans font-normal leading-4 text-gray-900 border-b border-gray-200/75`
                      if ('time' in item) {
                        return (
                          <ul key={idx} className={matchCSS}>
                            <li className="flex flex-col space-y-2">
                              <p>{item.home}</p>
                              <p>{item.away}</p>
                            </li>
                            <li className="text-md leading-none text-blue-500 p-1.5 bg-gray-200/50 rounded-md">
                              @{item.time}
                            </li>
                          </ul>
                        )
                      } else {
                        return (
                          <ul key={idx} className={matchCSS}>
                            <li className="flex flex-col space-y-2">
                              <p>{item.home.team}</p>
                              <p>{item.away.team}</p>
                            </li>
                            <li className="text-md leading-none text-blue-500 p-1.5 bg-gray-200/50 rounded-md">
                              {item.home.goals}:{item.away.goals}
                            </li>
                          </ul>
                        )
                      }
                    })}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  )
}
