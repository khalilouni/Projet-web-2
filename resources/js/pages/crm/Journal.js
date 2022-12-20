import Table from '../../components/Table'
import {useEffect,useState, useMemo} from 'react'
import 'github-markdown-css'
import axios from "axios";
import {URL} from "../../constantes";

const Journal =() => {


    const [connexionInfos,setConnexion] = useState([])
    const fetchConnexion = async () => {
        return axios.get(`${URL}/api/v1/crm/journal`).then((res) => {
            const resp = res.data.data.connexionInfo.connexions
            setConnexion(resp)
        })
    }

    const data = useMemo(
        () => {
            return [...connexionInfos]
        },
        [connexionInfos]
    )

    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id'
            },
            {
                Header: 'Nom',
                accessor: 'name'
            },
            {
                Header: 'Courriel',
                accessor: 'email'
            },
            {
                Header: 'IP DE CONNEXION',
                accessor: 'conn[0].ip'
            },
            {
                Header: 'DATE DE CONNEXION',
                accessor: 'conn[0].date'
            },

        ],
        []
    )

    useEffect(() => {
        axios.get(`${URL}/api/v1/crm/journal`)
            .then(res => {
                const resultats = res.data.data.connexionInfo
                const nouveau = resultats.map((item,index)=> {
                    let max = item.connexions.length -1
                    if(!(max<0)) {
                     let conn = [item.connexions[max]]
                        return {...item,'conn':conn}
                  }
                    else {
                        return {...item,'conn': [{ip:'jamais connecté',date: 'jamais connecté'}]}
                    }
                })
                setConnexion(nouveau)
            })
    }, [])

    return(
        <div className="markdown-body" style={{ padding: '20px' }}>
            <h1>Tableau De Connexion</h1>
           <Table columns={columns} data={data}></Table>
        </div>
    )
}

export default Journal
