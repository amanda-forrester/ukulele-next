import { Inter } from 'next/font/google'
import { FormEvent, useEffect, useState } from 'react';
import { SongsComponent } from '@/components/SongsComponent';
import { Song } from '@/queries/queries';
import { NavBar } from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [songs, setSongs] = useState<Song[] | undefined>(undefined);
  
  // useEffect(() => {
  //   fetch('/api/songs/Bb').then(res => res.json()).then(data => setSongs(data))
  // }, [])

  const handleSubmit = (event: FormEvent, chord: string) => {
    event.preventDefault();
    fetch(`/api/songs/${chord}`).then(r => r.json()).then((data: Song[]) => {
        setSongs(data);
    }).catch((error) => {
        console.error('Error fetching data:', error);
      }
    );
  };

  return (
    <div className='App'>
      {/*<NavBar />*/}
      <header className='App-header'>
        <h1 className="text-5xl font-semibold text-white shadow-lg shadow-text">
        Ukulele Song Finder
        </h1>
        <br></br>
        <img src='/ukulele_photo.jpg' className='App-logo border-double border-4 border-gray-600 bg-gray-300 px-4 py-2 m-1 rounded-lg' alt='logo' />
        <p>
          Enter the name of a chord to find ukulele songs that contain that chord. Use &quot;b&quot; for flat and &quot;m&quot; for minor.
        </p>
        <SongsComponent songs={songs} onSubmit={handleSubmit} />
      </header>
    </div>
  )
}
