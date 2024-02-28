import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import styles from "./src/styles/style.js";

import Cabecalho from "./src/components/Cabecalho.js";
import Corpo from "./src/components/Corpo.js";
import Rodape from "./src/components/Rodape.js";

export default function App() {
  return (
    <View style={styles.container}>

      {/*  cabeçalho */}
      <Cabecalho />

      {/*  corpo */}
      <Corpo/>

      {/*  Rodape */}
      <Rodape/>
    </View>
  );
}