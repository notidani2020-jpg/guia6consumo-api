import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

export default function UsersScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#3A24EC" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Lista de Usuarios</Text>
        <Text style={styles.userCount}>{users.length} usuarios</Text>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('UserDetail', { user: item })}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.username}>@{item.username}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fc', padding: 16 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  userCount: { fontSize: 14, color: '#3A24EC', fontWeight: '600' },
  card: { flexDirection: 'row', backgroundColor: '#eef0f8', padding: 14, borderRadius: 16, alignItems: 'center', marginBottom: 12 },
  avatar: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#3A24EC', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  info: { flex: 1 },
  name: { fontSize: 15, fontWeight: 'bold', color: '#111' },
  username: { fontSize: 13, color: '#3A24EC' },
  email: { fontSize: 12, color: '#666' },
  arrow: { fontSize: 22, color: '#888' }
});