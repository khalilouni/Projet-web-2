import {useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom'
import axios from "axios";
import 'github-markdown-css'
import {URL} from "../../constantes";

const GestionEmployes = () => {
    const [employes,setEmployes] = useState([])
    const [show, setShow] = useState(false);
    const [showEfface, setShowEfface] = useState(false);
    const [idEfface,setidEfface] = useState('')
    const [idUtilisateur,setId] = useState('');
    const [privilegeId,setPrivilege] = useState('')
    const isAffichage = localStorage.getItem('privilege')

    const handleClose = () => setShow(false);
    const handleSave = () => {
        setShow(false)
        axios.put(`${URL}/api/v1/crm/employe/update/${idUtilisateur}`,{
            idPrivilege:`${privilegeId}`
        })
            .then(res => {
                console.log(res.data);
            })
    };
    const handleModifier = (id) => {
        setShow(true)
        setId(id)
    }
    const onChangePrivilege = (e) => {
        const idPrivilege = e.target.value
        setPrivilege(idPrivilege)
    }

    const handleEffaceClose = () => {
        setShowEfface(false)
    }


    const handleEffacer = (id) => {
        setShowEfface(true)
        setidEfface(id)
    }

    const handleEffaceConfirmer =() => {
        setShowEfface(false)
        axios.get(`${URL}/api/v1/crm/employe/delete/${idEfface}`).then(res => {
           console.log(res.data)

        })
    }

    useEffect(()=> {
        axios.get(`${URL}/api/v1/crm/employe`)
            .then( res => {
                setEmployes(res.data.data.utilisateurInfo)
            })
    },[])
    return (
        <div className="markdown-body" style={{ padding: '20px' }}>
            <h1>Tableau De Gestion Des Employés</h1>
            <table>
                <thead>
                <tr role="row">
                    <th colSpan="1">ID</th>
                    <th colSpan="1">Nom De L'Utilisateur</th>
                    <th colSpan="1">Nom</th>
                    <th colSpan="1">Prénom</th>
                    <th colSpan="1">Courriel</th>
                    <th colSpan="1">Anniversaire</th>
                    <th>Adresse</th>
                    <th colSpan="1">Telephone</th>
                    <th colSpan="1">Cellulaire</th>
                    <th>Privilege</th>
                    { isAffichage==='1'?<th>Opération</th>:null}

                </tr>
                </thead>
                <tbody>
                {
                    employes.map((item,index) => {
                      return  <tr key={index}>
                            <td key={index+1}>{item.id}</td>
                            <td key={index+2}>{item.utilisateur.name}</td>
                            <td key={index+3}>{item.nom}</td>
                            <td key={index+4}>{item.prenom}</td>
                            <td key={index+5}>{item.courriel}</td>
                            <td key={index+6}>{item.anniversaire}</td>
                            <td key={index+7}>{item.adresse}</td>
                            <td key={index+8}>{item.telephone}</td>
                            <td key={index+9}>{item.cellulaire}</td>
                            <td key={index+10}>{item.utilisateur.privilegeId}</td>
                          { isAffichage==='1'?
                            <td key={index+11}>
                                <ButtonGroup className="mb-2">
                                    <Button onClick={()=>handleModifier(item.utilisateur.id)}>Modifier</Button>
                                    <Button onClick={()=>handleEffacer(item.utilisateur.id)}>Effacer</Button>
                                </ButtonGroup>
                            </td>:null}
                        </tr>
                    })
                }
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modification De Privilege</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Select
                        aria-label="select privilege"
                        onChange={onChangePrivilege.bind(this)}
                    >
                        <option>Selectez Une Privilege</option>
                        <option value="1">Administrateur</option>
                        <option value="2">Employé</option>
                        <option value="3">Client</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={showEfface} onHide={handleEffaceClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Veuillez confirmer la suppression de l'utilisateur.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEffaceClose}>
                        Ferme
                    </Button>
                    <Button variant="primary" onClick={handleEffaceConfirmer}>
                        Confirmer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default GestionEmployes
