import Image from "next/image";
import portrett from "/images/portrett.png";
import Bio from "../components/Bio";
import Header from "../components/Header";
import Link from "next/link";
import { Title } from "../components/Title";
import { TracingBeam } from "../components/TracingBeam";
import ProjectList from "../../public/images/Projects";


export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-20 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1">
          <Title></Title>
        </div>

        <div className="flex flex-col items-center mb-20 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1">
        <h2 className="my-5 text-xl">
            Mine <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 inline-block text-transparent bg-clip-text">prosjekter</span>
        </h2>
      </div>
      <TracingBeam className="px-6">
          <ProjectList></ProjectList>
      </TracingBeam>

        <div className="mt-20 mb-20 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
          <Bio />
          <div className="flex flex-col items-center justify-center mb-10">
          <Image
                className="rounded-full md:ml-10 lg:ml-20"
                src={portrett}
                alt="portrett"
                width={250}
                height={75}
                priority
              />
          </div>
        </div>
      
    </main>
    <footer className="flex flex-col items-center my-20 max-w-5xl mx-auto">
      <Link href={"mailto:elias.goldmann.b@gmail.com"} className="text-sm"> elias.goldmann.b@gmail.com</Link>
      <Link href={"tel:+4740720276"} className="text-sm">+47 407 20 276</Link>
     </footer>
    </>
  );
}
