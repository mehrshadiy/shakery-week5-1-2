import {Inter} from 'next/font/google'
import {MyTable} from "@/components/MyTable";
import {product} from "@/components/MyTable";
import {NextFont} from "next/dist/compiled/@next/font";
import AddForm from "@/components/AddForm";
import {useState} from "react";

const inter: NextFont = Inter({subsets: ['latin']})


export default function Home(): JSX.Element {

    const [counter, setCounter] = useState<number>(1)


    return (
        <main
            className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
        >
            <MyTable myData={product} caption={"product 1 list"}/>
            <button className={'p-3 mt-5 border rounded text-green-800'}
            onClick={()=>{
                setCounter(prevState => prevState + 1)
            }}>
                inc counter
            </button>
        </main>
    )
}
