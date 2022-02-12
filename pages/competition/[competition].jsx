import { useRouter } from 'next/router'
import Container from '@layouts/container'

export default function Competition() {
  const router = useRouter()
  const { competition } = router.query

  const competitionTitle = (text) => {
    if (!text) return
    let arr = text.split('-')
    if (arr[0] === 'womens') {
      arr[0] = "women's"
    }
    return arr.join(' ')
  }

  const discourseCSS =
    'flex justify-between w-full px-4 py-2 text-sm font-sans font-medium text-left text-blue-100 bg-blue-900 rounded-xl hover:bg-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 transition ease-in duration-300'

  return (
    <Container title="Home">
      <h1 className="py-12 font-bold text-white text-xl lg:text-3xl capitalize">
        {competitionTitle(competition)}
      </h1>
    </Container>
  )
}
