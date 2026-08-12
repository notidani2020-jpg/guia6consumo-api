import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function UserDetailScreen({ route }) {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>

      <Text style={styles.sectionHeader}>CONTACTO</Text>
      <View style={styles.sectionCard}>
        <View style={styles.row}><Text style={styles.label}>Correo</Text><Text style={styles.value}>{user.email}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Teléfono</Text><Text style={styles.value}>{user.phone}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Sitio web</Text><Text style={styles.value}>{user.website}</Text></View>
      </View>

      <Text style={styles.sectionHeader}>DIRECCIÓN</Text>
      <View style={styles.sectionCard}>
        <View style={styles.row}><Text style={styles.label}>Calle</Text><Text style={styles.value}>{user.address.street}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Suite</Text><Text style={styles.value}>{user.address.suite}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Ciudad</Text><Text style={styles.value}>{user.address.city}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Código postal</Text><Text style={styles.value}>{user.address.zipcode}</Text></View>
      </View>

      <Text style={styles.sectionHeader}>COMPAÑÍA</Text>
      <View style={styles.sectionCard}>
        <View style={styles.row}><Text style={styles.label}>Nombre</Text><Text style={styles.value}>{user.company.name}</Text></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fc', padding: 16 },
  headerCard: { backgroundColor: '#eef0f8', padding: 20, borderRadius: 16, alignItems: 'center', marginBottom: 20 },
  avatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#3A24EC', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 28 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  username: { fontSize: 14, color: '#3A24EC' },
  sectionHeader: { fontSize: 12, fontWeight: 'bold', color: '#3A24EC', marginBottom: 8, marginTop: 10 },
  sectionCard: { backgroundColor: '#eef0f8', borderRadius: 16, padding: 14, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  label: { fontSize: 13, color: '#666' },
  value: { fontSize: 13, color: '#111', fontWeight: '500' }
});