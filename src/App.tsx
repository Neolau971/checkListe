import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Input, Divider, Button } from 'antd';
import Liste from './components/liste.component';

function App() {

  const webLocalStorage = window.localStorage

  const [elementAjoute, setElementAjoute] = useState('')
  const [liste, setListe] = useState<string[]>([])

  useEffect(() => {
    const listeInDb = webLocalStorage.getItem('maListe')?.split(',')
    if (listeInDb) {
      setListe(listeInDb)
    }
  },[webLocalStorage])

  useEffect(() => {
    if (liste.length > 0) {
      webLocalStorage.setItem('maListe', liste.toString())
    }
  },[liste, webLocalStorage])

  const onChangeElementList = (event: ChangeEvent<HTMLInputElement>) => {
    setElementAjoute(event.currentTarget.value)
  }

  const handleClickAjouter = () => {
    setListe([...liste, elementAjoute])
    setElementAjoute('')
  }

  const handleClickEffacer = () => {
    setListe([])
    webLocalStorage.clear()
  }

  return (
    <div className="App">
      <div style={{display: "flex"}}>
        <Input size="large" placeholder="Ajouter à la liste" value={elementAjoute} onChange={onChangeElementList}/>
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
