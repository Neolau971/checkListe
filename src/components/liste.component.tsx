import React from "react"
import { List } from "antd"
import ItemListe from "./item.component"
import { listeInterface } from "../interface/liste.inteface"

type ListeProps = {
    liste: listeInterface[]
}

const Liste: React.FC<ListeProps> = ({ liste }) => {
    return ( 
        <List
            size="large"
            header={<div style={{fontWeight: 'bold'}}>Ma liste</div>}
            bordered
            dataSource={liste}
            renderItem={item => (
            <List.Item style={{display: 'contents'}}>
                <ItemListe itemListe={item} />
            </List.Item>
            )}
        />
    )
}

export default React.memo(Liste);