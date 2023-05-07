const { createClient } = require('@supabase/supabase-js');
// const dotenv = require('dotenv');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export interface Song {
  song_name: string;
  song_url: string;
  song_artist: string;
  chords: Chord[];
}

export interface Chord {
  song_id: Number;
  chord: string;
}


export async function getSongsByChord(chord_input: string):Promise<Song[]> {
  try {
    const { data: results, error } = await supabase
      .from('ukulele_songs')
      .select('song_name, song_url, song_artist, chords!inner(*)')
      .eq('chords.chord', chord_input);

      console.log('Results:', results);
    console.log('Error:', error);

    if (error) {
      console.log(`Query error!: ${JSON.stringify(error)}`);
      return [];
    }
    console.log(results);
    return results;
  } catch (err) {
    console.log(`Query error!: ${JSON.stringify(err)}`);
    return [];
  }
}




/*const dotenv = require('dotenv');
dotenv.config();


const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

async function getSongsByChord(chord_input) {
    try {
      const query = 'SELECT ukulele_songs.song_name, ukulele_songs.song_url, ukulele_songs.song_artist FROM ukulele_songs INNER JOIN chords ON ukulele_songs.id = chords.song_id WHERE chords.chord = $1';
      const values = [chord_input];
      const results = await pool.query(query, values);
      return results.rows
    } catch(err) {
      console.log(`Query error!: ${JSON.stringify(err)}`);
      return [];
    }
  }
  


module.exports = {
    getSongsByChord
}*/