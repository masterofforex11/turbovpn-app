import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [connected, setConnected] = useState(false);

  const toggleConnection = () => {
    setConnected(!connected);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Turbo<Text style={styles.cyan}>VPN</Text></Text>
        <Text style={styles.subtitle}>@turbovpn10</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>وضعیت اتصال</Text>
        <Text style={[styles.statusText, connected ? styles.connected : styles.disconnected]}>
          {connected ? 'متصل شد (Connected)' : 'قطع است (Disconnected)'}
        </Text>
        <Text style={styles.serverInfo}>سرور: فرانسه (France 🇫🇷)</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, connected ? styles.btnConnected : styles.btnDisconnected]}
        onPress={toggleConnection}
      >
        <Text style={styles.buttonText}>{connected ? 'قطع اتصال' : 'اتصال سریع'}</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>طراحی شده با React Native & Expo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060913',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
  },
  cyan: {
    color: '#00f0ff',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 14,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#0f172a',
    borderRadius: 20,
    padding: 24,
    width: '85%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  cardTitle: {
    color: '#94a3b8',
    fontSize: 14,
    marginBottom: 8,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  connected: {
    color: '#10b981',
  },
  disconnected: {
    color: '#f43f5e',
  },
  serverInfo: {
    color: '#64748b',
    fontSize: 12,
    marginTop: 6,
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#00f0ff',
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  btnConnected: {
    backgroundColor: '#10b981',
  },
  btnDisconnected: {
    backgroundColor: '#0284c7',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#475569',
    fontSize: 12,
  },
});
