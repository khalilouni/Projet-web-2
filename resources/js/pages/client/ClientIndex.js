import {useContext} from "react";
import {Context} from "../../components/LangueWrapper";
import Auth from "../../route/Auth";

const ClientIndex = ( ) => {
    const context = useContext(Context);
    const {nomAuthed} = Auth()
    return(
        <main className='container'>
            <h2>Espace de gestion client</h2>
            <h4>Bienvenue cher {nomAuthed}</h4>
        </main>
    )
}

export default ClientIndex
