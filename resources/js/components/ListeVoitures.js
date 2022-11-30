import { useState } from 'react'
import axios from 'axios'

const ListeVoitures = () => {

    const [courriel,setCourriel] = useState('');
    const [nomDeUtilisateur,setNomDeUtilisateur] = useState('');
    const [motDePasse,setMotDePasse] = useState('');

    const surSoumettre = (e) => {
       e.preventDefault();
       let donneesUtilisateur = {}
       donneesUtilisateur.name = nomDeUtilisateur
       donneesUtilisateur.email = courriel
       donneesUtilisateur.password = motDePasse

      axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/api/v1/register',
          data: donneesUtilisateur,
      })
          .then(res => {
              console.log(res.data);
          })

    }

    return (
       <div></div>
    );
}

export default ListeVoitures;
