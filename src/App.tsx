import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Input, Divider, List, Button } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

function App() {

  const [elementAjoute, setElementAjoute] = useState('')
  const [liste, setListe] = useState<string[]>([])

  useEffect(() => {
    setListe(liste)
  },[liste])

  const onChangeElementList = (event: ChangeEvent<HTMLInputElement>) => {
    setElementAjoute(event.currentTarget.value)

  }

  const handleClickAjouter = () => {
    setListe([...liste, elementAjoute])
  }

  const handleClickEffacer = () => {
    setListe([])
  }

  return (
    <div className="App">
      <div style={{display: "flex"}}>
        <Input size="large" placeholder="Ajouter à la liste" onChange={onChangeElementList}/>
        <Button size="large" type="primary" onClick={handleClickAjouter}>Ajouter</Button>
      </div>
      <List
        size="large"
        header={<div>Ma liste</div>}
        bordered
        dataSource={liste}
        renderItem={item => (
          <List.Item>
            <span>{item} <CheckCircleTwoTone twoToneColor="#52c41a" /></span>
          </List.Item>
        )}
      />
      <Divider orientation="center"/>
      <Button size="large" type="primary" onClick={handleClickEffacer}>Effacer la liste</Button>
      <Divider orientation="center"/>
    </div>
  );
}

export default App;
