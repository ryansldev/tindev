import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Login.module.css';

const Home: NextPage = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  function handleSubmit(event: any) {
    event.preventDefault();
    router.push('/main');
  }
  
  return (
    <div>
      <Head>
        <title>Tindev</title>
      </Head>

      <main className={styles.loginContainer}>
        <form onSubmit={handleSubmit}>
          <Image src='/logo.svg' alt='tindev' height='80px' width='80px' />
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder='Digite seu usuário no GitHub'
          />
          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  )
}

export default Home
