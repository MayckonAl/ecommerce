import { useQuery } from '@apollo/client'
import GET_CARDS from './lib/queries/getCards'
import { initializeApollo } from './lib/apollo'
import Cards from './components/Cards/Cards'

export default function Home() {
  const { data, error, loading } = useQuery(GET_CARDS)

  if (loading) return <p>loading...</p>
  if (error || !data) return <p>Error</p>

  return (
    <div>
      {data.cards.data.map(({ id, attributes }) => {
        return (
          <Cards
            id={id}
            foto={attributes.foto.data.attributes.url}
            description={attributes.description}
            valor={attributes.valor}
            slug={attributes.slug}
          />
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: GET_CARDS
  })
  return {
    props: { initialApolloState: apolloClient.cache.extract() },
    revalidate: 60
  }
}
