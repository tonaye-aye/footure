import ListItems from '@components/Listitems'

export default function CompetitionDetails({ competition, fixtures, results }) {
  let fixturesArr = fixtures.filter(({ league }) => {
    return league.toLowerCase() === competition
  })
  let resultsArr = results.filter(({ league }) => {
    return league.toLowerCase() === competition
  })

  return (
    <>
      {fixturesArr.length === 0 ? (
        <h1 className="p-3 font-sans font-semibold text-sm text-red-800 bg-gray-200 rounded-xl mb-2">
          No Fixtures today
        </h1>
      ) : (
        fixturesArr.map(({ league, matches }, idx) => (
          <div key={idx}>
            <h1 className="p-3 font-sans font-semibold text-sm text-blue-800 bg-blue-100 rounded-xl">
              Fixtures
            </h1>
            <ListItems league={league} matches={matches} />
          </div>
        ))
      )}
      {resultsArr.length === 0 ? (
        <h1 className="p-3 font-sans font-semibold text-sm text-red-800 bg-gray-200 rounded-xl mt-2">
          No Results today
        </h1>
      ) : (
        resultsArr.map(({ league, matches }, idx) => (
          <div key={idx}>
            <h1 className="p-3 font-sans font-semibold text-sm text-blue-800 bg-blue-100 rounded-xl">
              Results
            </h1>
            <ListItems league={league} matches={matches} />
          </div>
        ))
      )}
    </>
  )
}
