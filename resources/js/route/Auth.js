import { set } from "lodash";
import React, { useState, createContext, useContext,useEffect } from "react";
import { Navigate } from 'react-router-dom';

const AuthContext = createContext(null);

function getInitialState() {
    return !!localStorage.getItem('tk')
}

function getInitialNomAuthed() {
    return localStorage.getItem('nomAuthed')
}

function getInitialPrivilegeState() {
    return localStorage.getItem('privilege')
}
/**
 * Hook personnalisé, la fonction renvoie la valeur de contexte, y compris l'état authentifié,
 * la connexion, la fonction de déconnexion pour modifier l'état authentifié
 */
function useAuth() {
    const [authed, setAuthed] = useState(getInitialState);
    const [nomAuthed,setNomAuthed] = useState(getInitialNomAuthed)
    const [privilege, setPrivilege] = useState(getInitialPrivilegeState)

    return {
        authed,
        nomAuthed,
        login(nom, privilegeId) {
            return new Promise((res) => {
                setAuthed(true);
                setNomAuthed(nom);
                console.log('set privilege', privilegeId);
                setPrivilege(privilegeId);
                localStorage.setItem('privilege', privilegeId);
                res();
            });
        },
        logout() {
            return new Promise((res) => {
                setAuthed(false);
                localStorage.removeItem('tk')
                localStorage.removeItem('privilege')
                setPrivilege(null);
                res();
            });
        },
        privilege,
        setPrivilege
    };
}

// Transmettez la valeur de contexte au fournisseur de contexte et renvoyez le composant pour diffuser la valeur de contexte
export function AuthProvider({ children }) {
    const auth = useAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// renvoie la valeur de contexte
export default function AuthConsumer() {
    return useContext(AuthContext);
}

/**
 * Encapsuler le composant d'interception, si connecté, renvoyer le composant enfants inclus;
 * Non connecté, renvoyez le composant <Navigate to="/connexion" /> pour accéder à la page de connexion.
 */
export function RequireAuth({ children }) {
    const { authed } = AuthConsumer();
    console.log(authed)
    return authed === true ? (
        children
    ) : (
        <Navigate to="/connexion" replace />
    );
}
