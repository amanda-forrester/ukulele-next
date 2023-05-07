import { NextApiRequest, NextApiResponse } from 'next';
import { getSongsByChord } from '../../../queries/queries'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const chord = req.query.chord as string;
    try {
      const songs = await getSongsByChord(chord);
      res.json(songs);
    } catch (error) {
      console.error("Error getting songs:", error);
      res.status(500).json({ error: "Could not get songs" });
    }
}
