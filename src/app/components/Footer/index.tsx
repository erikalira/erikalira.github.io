import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaFreeCodeCamp,
  FaSpotify,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div id="contact" className="pt-16 text-white">
      <div className="my-4 text-4xl bg-gray-700 px-4 py-8">
        Contact
        <div className="flex gap-2 justify-center">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/erikalira/"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/erikalira"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            href="https://www.freecodecamp.org/erika"
            aria-label="FreeCodeCamp"
          >
            <FaFreeCodeCamp />
          </Link>
          <Link
            target="_blank"
            href="https://open.spotify.com/user/12142197717"
            aria-label="Spotify"
          >
            <FaSpotify />
          </Link>
        </div>
      </div>
    </div>
  );
}
