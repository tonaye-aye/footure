import { useState } from 'react'
import ListItems from '@components/list-items'
import DropDown from '@components/dropdown'

// headless UI + Icons
import { Tab } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { ChevronUpIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsHome({ fixtures, results }) {
  let [footballData] = useState({
    fixtures,
    results
  })

  return (
    <>
      <Tab.Group>
        <div className="w-full flex items-center justify-between mb-3">
          <Tab.List className="max-w-fit flex gap-1 rounded-md">
            {Object.keys(footballData).map((category, idx) => (
              <Tab
                key={idx}
                className={({ selected }) =>
                  classNames(
                    'w-full px-4 py-2 text-sm leading-5 font-medium text-white rounded-md shadow-lg capitalize tracking-wider',
                    'bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                    selected
                      ? 'bg-blue-700/75'
                      : 'bg-blue-900/25 hover:bg-blue-900/50'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <DropDown fixtures={fixtures} results={results} />
        </div>
        <Tab.Panels>
          {Object.values(footballData).map((items, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-2 flex flex-col gap-2',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-500 ring-blue-800 ring-opacity-60'
              )}
            >
              {items.map(({ id, league, matches }) => (
                <div
                  key={id}
                  className="relative cursor-pointer transition duration-500 ease-in-out"
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="p-3 w-full flex items-center justify-between text-left text-blue-800 bg-blue-100 hover:bg-blue-200 rounded-lg transition duration-500 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                          <h1 className="font-sans font-semibold text-sm">
                            {league}
                          </h1>
                          {open ? (
                            <ChevronUpIcon className="h-5 w-5 text-blue-400" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-blue-400" />
                          )}
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <ListItems league={league} matches={matches} />
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
    </>
  )
}
