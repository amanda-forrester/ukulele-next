import Link from 'next/link';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/find-by-chords'>
            <a>Find by chords</a>
          </Link>
        </li>
        <li>
          <Link href='/discover-a-song'>
            <a>Discover a song</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
