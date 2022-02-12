import ListItems from '@components/list-items'

export default function Competition({ competition, fixtures, results }) {
  console.log(fixtures, competition)

  return (
    <>
      {fixtures.map(({ league, matches }) => (
        <>
          {league.toLowerCase() === competition && (
            <>
              <h1 className="p-3 font-sans font-semibold text-sm text-blue-800 bg-blue-100 rounded-xl">
                Fixtures
              </h1>
              <ListItems league={league} matches={matches} />
            </>
          )}
        </>
      ))}
      {results.map(({ league, matches }) => (
        <>
          {league.toLowerCase() === competition && (
            <>
              <h1 className="p-3 font-sans font-semibold text-sm text-blue-800 bg-blue-100 rounded-xl">
                Results
              </h1>
              <ListItems league={league} matches={matches} />
            </>
          )}
        </>
      ))}
    </>
  )
}
