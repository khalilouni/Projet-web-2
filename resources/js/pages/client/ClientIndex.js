import {useContext,useState,useEffect} from "react"
import {Context} from "../../components/LangueWrapper"
import Auth from "../../route/Auth"
import {URL} from "../../constantes";
import axios from 'axios'

const ClientIndex = ( ) => {
    const context = useContext(Context)
    const {nomAuthed} = Auth()
    axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("tk");
    useEffect(() => {
        axios({
            url: `${URL}/api/v1/user`,
        })
            .then(res => {
                console.log(res.data)
            })
    },[])

    return(
        <main className='container'>
            <h2>Espace de gestion client</h2>
            <h4>Bienvenue cher {nomAuthed}</h4>
        </main>
    )
}

export default ClientIndex
