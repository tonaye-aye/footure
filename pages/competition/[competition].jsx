import { useState } from 'react'
import { useRouter } from 'next/router'
import Default from '@layouts/default'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Competition() {
  const router = useRouter()
  const { competition } = router.query

  const competitionTitle = (text) => {
    let arr = text.split('-')
    if (arr[0] === 'womens') {
      arr[0] = "women's"
    }
    return arr.join(' ')
  }

  const discourseCSS =
    'flex justify-between w-full px-4 py-2 text-sm font-sans font-medium text-left text-blue-100 bg-blue-900 rounded-xl hover:bg-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 transition ease-in duration-300'

  return (
    <Default title="Home">
      <main className="w-full max-w-5xl mx-auto">
        <section className="px-4">
          <h1 className="py-12 font-bold text-white text-xl lg:text-3xl capitalize">
            {competitionTitle(competition)}
          </h1>
          <div className="w-full p-2 mx-auto bg-white rounded-xl">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className={discourseCSS}>
                    <span>Fixtures</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Some text here.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className={discourseCSS}>
                    <span>Results</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </section>
      </main>
    </Default>
  )
}
