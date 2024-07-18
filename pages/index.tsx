import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Video Dev</title>
        <meta name="description" content="A community for video engineers with a focus on open source" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image src="/logo.svg" alt="Video Dev Logo" width={200} height={200} />
        <h1>Video-Dev</h1>
        <p className={styles.tagline}>
          Just video engineers chatting about video stuff.
        </p>
      </header>
      <main>
        <section className={styles.section}>
          <h2><a href="https://join.slack.com/t/video-dev/shared_invite/zt-2msn14kw7-RG~QcbgeYbmFLeX2NrvzvA">Join the Slack Community</a></h2>
        </section>
      </main>
      <footer className={styles.footer}>
        <section className={styles.links}>
          <a href="https://github.com/video-dev"><Image src="/github-mark.svg" width={35} height={35} alt="Github" /></a>
          <a href="https://demuxed.com"><Image src="/demuxed-mark.svg" width={35} height={35} alt="Demuxed" /></a>
        </section>
      </footer>
    </>
  )
}
