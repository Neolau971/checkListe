import React, { useState } from "react"
import { CheckCircleTwoTone } from '@ant-design/icons';
import { listeInterface } from "../interface/liste.inteface";

type ItemProps = {
    itemListe: listeInterface
}

const ItemListe: React.FC<ItemProps> = ({ itemListe }) => {

    const [isCheck, setIsCheck] = useState(false)

    const handleClickCheck = () => {
        setIsCheck(!isCheck)
    }

    return ( 
        <div onDoubleClick={handleClickCheck} style={{padding: '15px', border: 'solid 0.01em', borderColor: 'lightgrey'}}>
            {itemListe.elementListe} 
            {isCheck && <CheckCircleTwoTone style={{paddingLeft: '5px'}} twoToneColor="#52c41a" />}
        </div>
    )
}

export default React.memo(ItemListe);