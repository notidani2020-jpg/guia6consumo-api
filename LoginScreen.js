import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3A24EC" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inicio</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Ionicons name="people" size={60} color="#3A24EC" />
        </View>

        <Text style={styles.welcomeTitle}>Bienvenido a la aplicación</Text>

        <Text style={styles.description}>
          Consulta el directorio de usuarios cargado desde una API remota.
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Users')}
        >
          <Text style={styles.buttonText}>Usuarios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#3A24EC',
    height: 90,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#3A24EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeTitle: { fontSize: 24, fontWeight: 'bold', color: '#111827', textAlign: 'center', marginBottom: 12 },
  description: { fontSize: 15, color: '#6b7280', textAlign: 'center', lineHeight: 22, marginBottom: 40 },
  button: { backgroundColor: '#3A24EC', paddingVertical: 14, paddingHorizontal: 50, borderRadius: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});