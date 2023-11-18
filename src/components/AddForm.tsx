import {useState} from 'react';
import type {ChangeEvent, Dispatch, FormEvent, SetStateAction} from 'react';
import findMaxID from "@/utills/findMaxID";
import type Product from "@/types/product";


interface Prop {
    setMyDataState : Dispatch<SetStateAction<Product[]>>
}

function AddForm({setMyDataState} : Prop) {
    const [nameState, setNameState] = useState("")
    const [priceState, setPriceState] = useState("")
    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNameState(e.target.value)
    }

    const changePriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPriceState(e.target.value)
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        setMyDataState((prevState : Product[]) => {
            let result: Product = {
                name: nameState,
                price: Number(priceState),
                ID: findMaxID(prevState) + 1
            }
            return [
                ...prevState,
                result
            ]
        })

        setNameState("")
        setPriceState("")
    }


    return (
        <form className={"mb-8 border p-12"} onSubmit={submitHandler}>
            <input className={"border mr-3"} type="text" value={nameState} name={"name"} placeholder={"name"}
                   onChange={changeNameHandler}/>
            <input className={"border mr-3"} type="number" value={priceState} name={"price"} placeholder={"price"}
                   onChange={changePriceHandler}/>
            <input className={"bg-blue-400 text-white rounded p-2"} type="submit" value={"add a product"}/>
        </form>
    );
}

export default AddForm;