import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Input, Divider, Button } from 'antd';
import Liste from './components/liste.component';
import { addElementListe, deleteAllListe, getAllListe } from './api/httpClient';
import { listeInterface } from './interface/liste.inteface';

function App() {

  const [elementAjoute, setElementAjoute] = useState<listeInterface>({elementListe: ''})
  const [liste, setListe] = useState<listeInterface[]>([])

  useEffect(() => {
    handleGetListeApi()
  }, [])

  const onChangeElementList = (event: ChangeEvent<HTMLInputElement>) => {
    setElementAjoute({elementListe: event.currentTarget.value})
  }

  const handleClickAjouter = () => {
    setListe([...liste, elementAjoute])
    handleUpdateListeApi(elementAjoute)
    setElementAjoute({elementListe: ''})
  }

  const handleClickEffacer = () => {
    setListe([])
    deleteAllListe()
  }

  const handleGetListeApi = async () => {
    const res = await getAllListe();
    setListe(res)
  }

  const handleUpdateListeApi = async (listeToSave: listeInterface) => {
    addElementListe(listeToSave)
  }

  return (
    <div className="App">
       <div style={{display: "flex"}}>
        <Input size="large" placeholder="Ajouter à la liste" value={elementAjoute.elementListe} onChange={onChangeElementList}/>
        <Button size="large" type="primary" onClick={handleClickAjouter}>Ajouter</Button>
      </div>
      <Liste liste={liste}/>
      <Divider orientation="center"/>
      <Button size="large" type="primary" onClick={handleClickEffacer}>Effacer la liste</Button>
      <Divider orientation="center"/> 
    </div>
  );
}

export default React.memo(App);