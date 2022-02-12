import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function DropDown({ fixtures, results }) {
  const [competitions, setCompetitions] = useState([])

  const checkCompeition = (comp) => {
    if (competitions.includes(comp)) return
    setCompetitions([comp, ...competitions])
  }

  useEffect(() => {
    fixtures.forEach(({ league }) => {
      checkCompeition(league)
    })
    results.forEach(({ league }) => {
      checkCompeition(league)
    })
  })

  return (
    <div className="text-right z-50">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 font-sans text-sm font-medium text-white leading-5 bg-blue-900/25 hover:bg-blue-900/50 rounded-md shadow-lg bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 tracking-wider">
            Filter
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-white"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {competitions.map((comp, idx) => (
              <div key={idx} className="px-1 py-1">
                <Link
                  href={`/competition/${comp
                    .toLowerCase()
                    .replace(/\s/g, '-')
                    .replaceAll("'", '')}`}
                >
                  <a className="font-sans hover:bg-blue-200 text-gray-900 flex rounded-md items-center w-full px-2 py-2 text-sm">
                    {comp}
                  </a>
                </Link>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
