import React, {useState} from "react"; 
import{
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import {buscarCalendarioPorID} from "../../services/calendarioService"

const CalendarioScreen = ({user, irAAñadirEvento, irAEliminarEvento}) => {
    
  const calendario = buscarCalendarioPorID(user.calendario_id)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendario de ingresos y gastos</Text>
      <Calendar style={styles.calendar}

      />

      <Button title="Añadir evento" onPress={irAAñadirEvento}/>

      <Button title="Eliminar evento" onPress={irAEliminarEvento}/>
    </View>
  )


};

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda la pantalla
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    width: '95%',   // ancho casi total
    height: '80%',  // ocupa la mayor parte de la altura
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 15,
  },
});

export default CalendarioScreen;