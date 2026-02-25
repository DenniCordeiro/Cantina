import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.title}>Inscreva-se</Text>
            <Text style={styles.subtitle}>Crie uma conta para começar</Text>
          </View>

          <Text style={styles.label}>Nome completo</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Nome Sobrenome" value={name} onChangeText={setName} />
            <Ionicons name="person-outline" size={20} color="#999" />
          </View>

          <Text style={styles.label}>Endereço de e-mail</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="e-mail@mail.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <Ionicons name="mail-outline" size={20} color="#999" />
          </View>

          <Text style={styles.label}>Crie um nome de usuário</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Nome de usuário" value={username} onChangeText={setUsername} autoCapitalize="none" />
            <Ionicons name="at-outline" size={20} color="#999" />
          </View>

          <Text style={styles.label}>Crie sua senha</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="********" secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#999" />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Repita a senha</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="********" secureTextEntry={!showConfirmPassword} value={confirmPassword} onChangeText={setConfirmPassword} />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#999" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/email-confirmation')}>
            <Text style={styles.registerButtonText}>Inscreva-se</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/terms')}>
            <Text style={styles.termsText}>
              Ao me inscrever concordo com os Termos e Condições e a Política de Privacidade.
            </Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: { padding: 24, paddingBottom: 50 },
  backButton: { marginBottom: 20, marginTop: 10 },
  header: { alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666' },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 8, marginTop: 16 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, paddingHorizontal: 16, height: 50 },
  input: { flex: 1, height: '100%', color: '#333', fontSize: 14 },
  registerButton: { backgroundColor: '#FF9F43', borderRadius: 12, height: 50, alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 15 },
  registerButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  termsText: { fontSize: 12, color: '#999', textAlign: 'center', lineHeight: 18 },
});