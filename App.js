import React,{useState,useEffect} from 'react';

import { View,StyleSheet, Button, Text } from 'react-native';

function App(){
  const [contador, setContador] = useState(0);
  useEffect(()=>{
    alert('Criou app');
  },[]);

  useEffect(()=>{
alert('Atualizou o contador app')
  },[contador]);

  return(

  <View style ={styles.container}>
    <Text style={styles.texto}>Contador: {contador}</Text>
<Button title="Incremento" onPress={()=>setContador(contador+1)}/>

  </View>
  )
}

const styles = StyleSheet.create({

container: {
  flex:1,
  justifyContent:'center',
  alignItems:'center',

},
});

export default App;