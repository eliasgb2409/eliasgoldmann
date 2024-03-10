import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import Link from 'next/link';


export default function Header(){
    return(
        <header className="w-full py-5 px-6">
        <div className="flex justify-between items-center max-w-5xl mx-auto animate-fade">
            <Link href={"../"}>
                <h2 className="mt-5 text-2xl">
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 inline-block text-transparent bg-clip-text">EGB</span>
                </h2>
            </Link>
            <div className="flex gap-4 mt-3">
              <a href="mailto:elias.goldmann.b@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaRegEnvelope size={28} />
              </a>
              <a href="https://github.com/eliasgb2409" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/elias-goldmann-brandtzæg-778697167/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaLinkedin size={28} />
              </a>
            </div>
        </div>
      </header>
    )
}