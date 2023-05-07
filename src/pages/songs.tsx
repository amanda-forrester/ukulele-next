import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FormEvent, useEffect, useState } from 'react';
import { Song } from '@/queries/queries';
import { SongsComponent } from '@/components/SongsComponent';
const inter = Inter({ subsets: ['latin'] })

export default function SongsPage() {
  const [songs, setSongs] = useState<Song[] | undefined>(undefined);
  
  // useEffect(() => {
  //   fetch('/api/songs/Bb').then(res => res.json()).then(data => setSongs(data))
  // }, [])

  const handleSubmit = (event: FormEvent, chord: string) => {
    event.preventDefault();
    fetch(`/api/songs/${chord}`).then(r => r.json()).then((data: Song[]) => {
        setSongs(data);
    }).catch((error) => {
        console.error("Error fetching data:", error);
      }
    );
  };


  return (
    <main>
      <SongsComponent songs={songs} onSubmit={handleSubmit} />
    </main>
  )
}
