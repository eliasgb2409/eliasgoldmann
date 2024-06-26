"use client"
import Image from "next/image";
//import lokaletips from "./lokaletips.png"
//import bastionen from "./bastionen.png"
//import openai from "./openai.png"
//import dhis2 from "./dhis2.png"
//import amadeus from "./amadeus.png"
import Link from "next/link";

export default function ProjectList(){
    return(
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {projectContent.map((item, index) =>(
                <div key={index}>
                    <p className="text-xl mt-10 mb-4 font-bold">
                        {item.title}
                    </p>
                    <p>
                        <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 inline-block text-transparent bg-clip-text">{item.details}</span>
                    </p>
                    <div className="text-base mt-3 prose prose-sm dark:prose-invert">
                        {item?.image && (
                            <img
                            src={item.image}
                            alt="project-image"
                            height={item.height}
                            width={item.width}
                            className="rounded-lg object-obtain mb-12"
                            />
                        )}
                        {item.description}
                    </div>
                    <div>
                      <br />
                      {item.link}
                    </div>
                </div>
            ))}

        </div>
    )
}

const projectContent = [

  {
    title: "Arcade Analytics",
    height: 400,
    width: 400,
    details: "Next.js, React, TypeScript, TailwindCSS, RESTful API, Web-scraping",
    description: (
      <>
        <p>
        Dette prosjektet presenterer en dynamisk og interaktiv nettside designet 
        for å fremheve trendene innen videospill, med spesielt fokus på de mest 
        populære spillene, som bestemmes av Steam's "Top Sellers" liste. 
        Ved å integrere både direkte data fra Steam's API og raffinert informasjon gjennom 
        web-scraping, tilbyr denne plattformen en omfattende oversikt over de 100 mest solgte spillene, 
        inkludert oppdatert statistikk om antall aktive spillere.

        Nedenfor er link til nettsiden:
        </p>
      </>
    ),
    image:
      "./arcade.png",
      //dhis2,
    link: (
        <Link href={"https://arcade-analytics.vercel.app/"} className="underline" target="_blank">Link til nettside</Link>
    )
  },

    {
      title: "DHIS2",
      height: 400,
      width: 400,
      details: "JavaScript, React, HTML, CSS, RESTful API",
      description: (
        <>
          <p>
            I emnet IN5320 - Development in Platforms Ecosystems, utviklet 
            gruppen min og jeg en webapplikasjon for DHIS2 platformen.
            Basert på en casebeskrivelse brukte vi React, DHIS2-apputviklingsplattformen, 
            DHIS2 UI-biblioteket og styleguide, RESTful API for å hente relevant data 
            og UiO-git for utvikling og koordinering.

            Githuben for prosjektet er på en privat konto knyttet til Universitet. Ta kontakt 
            om du vil ta en titt. 
          </p>
        </>
      ),
      image:
        "./dhis2.png",
        //dhis2,
      link: (
          <Link href={"https://github.uio.no/eirikjl/IN5320_project"} className="underline" target="_blank">Github</Link>
      )
    },
    {
      title: "Oslo - Lokale tips",
      height: 150,
      width: 150,
      details: "Kotiln, Jetpack Compose, Android Studio, Figma, RESTful API",
      description: (
        <>
          <p>
            I emnet IN2000 - Software Engineering med prosjektarbeid, utviklet teamet mitt en app for turisme i Oslo. Appen skulle 
            fremheve "lokale" tips for ting å gjøre i vår kjære hovedstad. Oslo - 
            Lokale tips tilbyr informasjon om en rekke restauranter, badeplasser, 
            parker, utesteder, osv. Den vil vise åpningstider, badetemperatur, 
            værvarsling og skreddersydde lister for aktiviter.
            <br/><br/>
            Githuben for prosjektet er på en privat konto knyttet til Universitetet. Jeg viser
            derfor heller protoypen slik at du kan få et bilde av hvordan den så ut og dens 
            funksjoner.
            Denne Figma-prototypen er designet for å vise frem de interaktive komponentene 
            i brukergrensesnittet. For å identifisere hvilke elementer som er klikkbare, 
            klikker du bare hvor som helst på skjermen (ideelt sett i midten). 
            De klikkbare komponentene vil bli uthevet, slik at du enkelt kan utforske 
            og samhandle med prototypens funksjonalitet.
          </p>
        </>
      ),
      image:
        "./lokaletips.png",
        //lokaletips,
      link: (
        <Link href={"https://www.figma.com/proto/oDHP55eSlvzvY4YX45yGM8/Wireframe?page-id=0%3A1&node-id=1-189&viewport=491%2C327%2C0.08&scaling=scale-down&starting-point-node-id=1%3A409"} className="underline" target="_blank">Figma-link</Link>
      )
    },
    {
        title: "AI-recipies (WIP)",
        height: 300,
        width: 300,
        details: "Typescript, React, Tailwind CSS, OpenAI-API",
        description: (
          <>
            <p>
                Jeg har fått muligheten til å være en del av årets kull i Netligh 
                Tech CollEDGE. Dette er et karriereprogram der jeg lære mer om hvordan 
                det er å jobbe som IT konsulent, samt utvikle mine teknologiske og personlige 
                ferdigheter. I løpet av programmet lærer vi React/Next, Typescript, 
                Tailwind CSS, Docker og bruk av OpenAI APIet.
            </p>
            <br />
            <p>
                Gjennom karriereprogrammet har vi hatt flere workshops. En av workshoppene
                besto av å lage en liten nettside som tar imot ingredienser fra brukeren
                og generer oppskrifter ved hjelp av OpenAI sitt API. 
            </p>
          </>
        ),
        image:
          "./openai.png",
          //openai,
        link: (
          <Link href={""} className="underline pointer-events-none" target="_blank">Coming soon</Link>
        )
      },
    {
      title: "Bastionen (WIP)",
      details: "Figma",
      height: 200,
      width: 200,
      description: (
        <>
          <p>
            Lyn er mitt lokale fotballag og som et sideprosjekt har jeg forsøkt å 
            designe en ny nettside for Lyns supporterklubb, Bastionen. Jeg har fokusert 
            på brukervennelighet, fargebruk og ekstra funksjonalitet. Nedenfor finner 
            du en link til førsteutkastet til nettsidens design.
          </p>
        </>
      ),
      image:
        "./bastionen.png",
        //bastionen,
      link: (
        <Link href={"https://www.figma.com/proto/zuD8FY68Ngq7DaES2zzfnW/Bastionen---Nettside?page-id=0%3A1&node-id=25-532&viewport=398%2C170%2C0.23&scaling=min-zoom"} className="underline" target="_blank">Figma-fil</Link>
      )
    },
    {
      title: "FOKUS",
      details: "Arduino, Figma",
      height: 300,
      width: 300,
      description: (
        <>
          <p>
            Gruppen min utviklet artefaktet FOKUS som skulle fungere som et mobilhotell i 
            emnet IN1060 - Bruksorientert design. FOKUS hjelper brukeren å legge fra seg 
            telefonen slik at han/hun kan konsentrere seg bedre om arbeidsoppgavene sine.
            Brukeren plasserer mobilen i boksen og stiller inn en timer for ønsket varighet 
            av mobilfri tid. Den angitte tiden vises på en LCD-skjerm. FOKUS benytter en lyssensor 
            i kombinasjon med databehandling for å avgjøre om brukeren har plassert mobilen inne i 
            boksen, eller om den har blitt fjernet. For å gi tilbakemelding til brukeren, er lysdioder 
            og lyd integrert. Dette gir feedback basert på om brukeren har lykkes i å unngå å ta ut 
            mobilen i løpet av det angitte tidsrommet, eller hvis mobilen har blitt tatt ut før 
            den fastsatte tiden har utløpt.
          </p>
        </>
      ),
      image:
        "./amadeus.png",
        //amadeus,
      link: (
        <Link href={"https://www.uio.no/studier/emner/matnat/ifi/IN1060/v21/prosjekter-var-2021/amadeus/"} className="underline" target="_blank">Prosjektbeskrivelse og Github</Link>
      )
    },
  ];