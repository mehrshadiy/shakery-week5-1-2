import {useEffect, useState} from "react";
import AddForm from "@/components/AddForm";
import type Product from "@/types/product";


interface Props {
    myData: Product[],
    caption?: string
}


export function MyTable({caption}: Props) {

    const [refresh, setRefresh] = useState(false)

    console.log('table component body ... ')

    let product : any[] = []
    useEffect(() => {
        product = [
            {ID: 1, name: "product 1", price: 3000},
            {ID: 2, name: "product 2", price: 1000},
            {ID: 3, name: "product 3", price: 500},
            {ID: 4, name: "product 4", price: 2000}
        ]
    }, [refresh])

    const [myDataState, setMyDataState] = useState<Product[] | Array<any>>(product)

    const deleteHandler = (id: number): void => {
        let result = myDataState.filter((item) => {
            return item.ID !== id
        })
        setMyDataState(result)
    }

    const refreshData = () => {
      setRefresh(prevState => !prevState)
    }

    return (
        <>
            <button onClick={refreshData}>
                refresh data
            </button>
            <AddForm setMyDataState={setMyDataState}/>
            <table className={"w-full bg-white text-black text-center"}>
                {
                    // caption !== null ? <caption style={{captionSide: "bottom"}}>{caption}</caption> : ''
                    caption && <caption style={{captionSide: "bottom"}}>{caption}</caption>
                }
                <tbody>
                {
                    myDataState.map((item) => {
                        return (
                            <tr key={item.ID}>
                                <td className={"border"}>
                                    {item.ID}
                                </td>
                                <td className={"border"}>
                                    {item.name}
                                </td>
                                <td className={"border"}>
                                    {item.price}
                                </td>
                                <td className={"border"}>
                                    <button onClick={() => {
                                        deleteHandler(item.ID)
                                    }}>
                                        delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}