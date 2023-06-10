import { Song } from "@/queries/queries";
import React, { FormEvent, useState } from "react";

interface SongComponentProps {
  songs: Song[] | undefined
  onSubmit: (event: FormEvent, chord: string) => void
}

export function SongsComponent({ songs, onSubmit }: SongComponentProps) {
  const [chord, setChord] = useState("");

  const handleInputChange = (event: any) => {
    const input = event.target.value;
    const sanitizedInput = input.replace(/[^A-Za-z0-9\s]/gi, "");
    const capitalizedInput = sanitizedInput.charAt(0).toUpperCase() + sanitizedInput.slice(1).toLowerCase();
    setChord(capitalizedInput);
  };  
  
  return (
    <div>
      <form onSubmit={e => onSubmit(e, chord)}>
        <label>
          Enter a chord:
          <input className="text_box" type="text" value={chord} onChange={handleInputChange} />
        </label>
        <button className="submit_button" type="submit">Submit</button>
      </form>
      { songs // if songs is defined 
        ? songs.length === 0 // ...but there are none
          ? <p>No songs found.</p>
          
          // ...and we found some
          : <ol className="song_list list-decimal"> 
              {songs.map((song) => (
              <li key={song.song_name}>
                <a href={song.song_url} target="_blank" rel="noopener noreferrer" className="underline">{song.song_name} by {song.song_artist}</a> 
              </li>
            ))}
          </ol>
        : null
      }
    </div>
  );
}
