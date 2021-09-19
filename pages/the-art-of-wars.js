import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function TheArtOfWars({content}) {

  return (
    <div className="container">
      <Head>
        <title>孙子兵法</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="content guwen">
        <div className="book">
          <Header title="孙子兵法" />
          <hr />
          {content.map((text) => (
            <div key={text.id} className="chapter">
              <h2>{text.Title}</h2>
              <p>{text.Text}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://zjs-cms.herokuapp.com/the-art-of-wars')
  const content = await res.json()
  return {
    props: {
      content,
    },
  }
}

export default TheArtOfWars
