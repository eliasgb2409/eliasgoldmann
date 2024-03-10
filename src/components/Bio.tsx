import Link from "next/link"

export default function Bio(){
    return(
        <div className="my-20 max-w-5xl">
            <h2 className="my-5 text-xl">
                Litt om <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 inline-block text-transparent bg-clip-text">meg</span>
            </h2>
            <p className="text-base font-light">
                Våren 2023 ble jeg ferdig med bacheloren min i Informatikk: Design, bruk og 
                interkasjon og jeg har nå startet på master i Informatikk: Programmering 
                og systemarkitektur ved UiO. I løpet av studiet har jeg har jeg gjennomført kurs 
                ved UiO i blant annet algoritmer og datastrukturer, objektorientert programmering, 
                databaser, utvikling av webapplikasjon, smidig utvikling, UX, etisk hacking, 
                samt kunstig intelligens og maskinlæring.
                Jeg behersker programmeringsspråk som 
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 inline-block text-transparent bg-clip-text">
                    Python, Java, Kotlin, JavaScript (React), TypeScript, HTML, CSS, SQL, 
                    Arduino, XML
                </span>
                og verktøy som{" "}  
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 inline-block text-transparent bg-clip-text"> 
                     Figma
                </span>
                {" "}og{" "}
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 inline-block text-transparent bg-clip-text"> 
                    Android Studio.
                </span>
                <br /><br />
                Jeg har også vært svært aktiv 
                i foreningslivet ved institutt for informatikk (Ifi), der jeg blant 
                annet har vært bedriftskontakt ved Navet, samt gjennopprettet sjakkforeningen 
                ved Ifi. <br/><br/>Ved siden av studiet er jeg svært interessert i fotball 
                (United og Lyn), gaming, musikk, sjakk og golf. Gjerne send meg en mail 
                angående jobbrelaterte spørsmål, eller om du vil utfordre meg i et 
                sjakkparti/runde golf (jeg suger i begge deler) :)
            </p>
            <div>   
                <br />
                <Link href={"/cv.pdf"} className="underline" target="_blank">Ta en titt på CV-en min også</Link>
            </div>
        </div>
    )
}