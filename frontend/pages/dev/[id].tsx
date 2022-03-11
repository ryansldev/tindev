import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import styles from './index.module.css';

interface Dev {
  _id: string;
  name: string;
  dev: string;
  bio: string;
  avatar: string;
  likes: string[];
  dislikes: string[];
}

const Main: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [devs, setDevs] = useState<Dev[]>([]);

  const loadDevs = async () => {
    const { data } = await api.get('/devs', {
      headers: {
        user: `${id}`
      }
    });

    setDevs(data);
  }

  useEffect(() => {
    if(!id) {
      return;
    }

    loadDevs();
  }, [id]);

  const handleDislike = async (targetDevId: string) => {
    await api.post(`/devs/${targetDevId}/dislikes`, {
      headers: {
        user: id
      }
    });

    setDevs(devs.filter(dev => dev._id !== targetDevId));
  }

  const handleLike = async (targetDevId: string) => {
    await api.post(`/devs/${targetDevId}/likes`, null, {
      headers: {
        user: `${id}`
      }
    });

    setDevs(devs.filter(dev => dev._id !== targetDevId));
  }

  return (
    <div>
      <Head>
        <title>Tindev - main</title>
      </Head>

      <main className={styles.mainContainer}>
        <Image src='/logo.svg' alt='tindev' width='100' height='100' />
        { devs.length > 0 &&
          <ul>
            { devs.map((dev) => {
              return (
                <li key={dev._id}>
                  <img src={dev.avatar} alt={dev.name}/>
                  <footer>
                    <strong>{dev.name}</strong>
                    <p>{dev.bio}</p>
                  </footer>

                  <div className={styles.buttons}>
                    <button type='button' onClick={() => handleDislike(dev._id)}>
                      <div><Image src='/dislike.svg' alt='Dislike' width='20' height='20' /></div>
                    </button>

                    <button type='button' onClick={() => handleLike(dev._id)}>
                      <div><Image src='/like.svg' alt='Like' width='20' height='20' /></div>
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        }
      </main>
    </div>
  )
}

export default Main