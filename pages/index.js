import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js test app!</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/js/newrelic.js"></script>
      </Head>

      <main>
        <Header title="Welcome to test app!" />
        <p className="description">
          <Link href="/the-art-of-wars">
            <a>孙子兵法</a>
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
