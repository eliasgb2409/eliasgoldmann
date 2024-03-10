
import Link from "next/link";

interface Boxprops{
    url: string; 
    title: string;
    description: string;

}

export default function Box(props: Boxprops){
    return(
        <Link href={props.url}>
            <div
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-purple-400 hover:bg-gray-100 hover:dark:bg-neutral-800/30"
                >
                <h2 className={`mb-3 text-xl font-semibold`}>
                {props.title}{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    {props.description}
                </p>
            </div>
        </Link>
    )
}