import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Image} from 'react-native';

const image = {uri:'src/assets/images/roxo.jpeg'};

export default function App() {
   btn = () => {
    alert("Logado com sucesso");
   }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        
    <Text style={[styles.login]}>Faça seu login!</Text>

    <TextInput style={styles.input} placeholder="Digite seu email:"/>
    <TextInput style={styles.input} placeholder="Digite sua senha:" secureTextEntry={true}/>
    <Button
    onPress={btn}
    style={styles.button}
    title='Logar'
    />

    <Image
      style={styles.musa}
      source= {{
        uri: 'src/assets/images/musa.png',
      }}
    />
    </ImageBackground>
   </View>
  );
}



//css
const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
  
  input: {
    height:40,
    margin: 12,
    borderWidth: 1,
    padding: 30,
  },

  login: {
     color: 'purple',
     fontSize: 50,
     bottom: 150,
  },
  
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  musa: {
   width: 200,
   height: 200,
  }

  })
   