import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.placeholderImage}>
           <View style={{width: '100%', height: '100%', opacity: 0.1, backgroundColor: '#000'}} />
        </View>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButtonCircle}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            
            <View style={styles.textWrapper}>
              <Text style={styles.title}>Redefinir senha</Text>
              <Text style={styles.subtitle}>Digite o e-mail associado à sua conta e enviaremos instruções para redefinir sua senha.</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="e-mail@e-mail.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
              <Ionicons name="mail-outline" size={20} color="#666" />
            </View>

            <TouchableOpacity style={styles.actionButton} onPress={() => alert("Link enviado!")}>
              <Text style={styles.actionButtonText}>Redefinir senha</Text>
            </TouchableOpacity>

          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  headerContainer: { height: '35%', backgroundColor: '#F2F2F2', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, overflow: 'hidden', position: 'relative' },
  placeholderImage: { width: '100%', height: '100%', backgroundColor: '#E0E0E0' },
  backButtonCircle: { position: 'absolute', top: 50, left: 24, width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', elevation: 3 },
  contentContainer: { flex: 1, paddingHorizontal: 24, paddingTop: 40 },
  scrollContent: { flexGrow: 1 },
  textWrapper: { alignItems: 'center', marginBottom: 40 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#000', marginBottom: 16, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 22, maxWidth: '90%' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius: 12, paddingHorizontal: 16, height: 55, marginBottom: 40 },
  input: { flex: 1, height: '100%', color: '#333', fontSize: 16, fontWeight: '600' },
  actionButton: { backgroundColor: '#A0A0A0', borderRadius: 12, height: 55, alignItems: 'center', justifyContent: 'center', marginTop: 'auto', marginBottom: 30 },
  actionButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
