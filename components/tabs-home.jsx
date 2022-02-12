import { useState } from 'react'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { ChevronUpIcon } from '@heroicons/react/outline'

import { DateHandler } from '@lib/date-handler'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsHome({ fixtures, results }) {
  let [footballData] = useState({
    fixtures,
    results
  })

  const handleDate = (time) => {
    return DateHandler(time)
  }

  return (
    <>
      <Tab.Group>
        <Tab.List className="w-full max-w-sm flex bg-blue-900/50 rounded-md">
          {Object.keys(footballData).map((category, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-md leading-5 font-medium text-blue-200 rounded-md transision ease-in duration-100 capitalize',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-700 ring-blue-700 ring-opacity-60',
                  selected
                    ? 'text-blue-900 bg-white shadow'
                    : 'hover:bg-blue-900'
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
                'bg-blue-100 rounded-xl p-2 pt-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-500 ring-blue-800 ring-opacity-60'
              )}
            >
              {items.map(({ id, league, matches }) => (
                <div
                  key={id}
                  className="relative rounded-xl bg-white hover:bg-gray-200/75 mb-2 cursor-pointer transition duration-500 ease-in-out"
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="py-4 px-3 w-full flex items-center justify-between text-left bg-blue-700 hover:bg-blue-600 rounded-xl transition duration-500 ease-in-out">
                          <h1 className="font-sans text-md text-white">
                            {league}
                          </h1>
                          {open ? (
                            <ChevronUpIcon className="h-5 w-5 text-blue-400" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-blue-400" />
                          )}
                        </Disclosure.Button>
                        <Disclosure.Panel className="py-3 px-4">
                          {matches.map((item, idx) => {
                            const matchCSS = `flex items-center justify-between mt-1 py-2 space-x-3 text-sm font-sans font-normal leading-4 text-gray-900 border-b border-gray-200/75`
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
                                      @{handleDate(item.time)}
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
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <p className="hidden md:absolute top-4 right-5 font-sans text-xs text-gray-200">
        Australian Eastern Standard Time (AEST)
      </p>
    </>
  )
}
