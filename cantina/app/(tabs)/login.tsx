import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>

          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>Insira seus dados para continuar</Text>

          <Text style={styles.label}>Digite seu e-mail</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="e-mail@e-mail.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <Ionicons name="mail-outline" size={20} color="#999" />
          </View>

          <Text style={styles.label}>Digite sua senha</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="********" secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#999" />
            </TouchableOpacity>
          </View>

          <View style={styles.rowBetween}>
            <TouchableOpacity style={styles.checkboxContainer} onPress={() => setRememberMe(!rememberMe)}>
              <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                  {rememberMe && <Ionicons name="checkmark" size={12} color="#FFF" />}
              </View>
              <Text style={styles.rememberText}>Lembrar de mim</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => router.push('/reset-password')}>
              <Text style={styles.forgotText}>Recuperar senha</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text style={styles.loginButtonText}>Faça login</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>ou continue com</Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}><FontAwesome name="google" size={20} color="#DB4437" /></TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}><FontAwesome name="facebook" size={20} color="#4267B2" /></TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: { flexGrow: 1, padding: 24, justifyContent: 'center' },
  backButton: { position: 'absolute', top: 20, left: 24, zIndex: 10 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 8, marginTop: 60 },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 32 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 8, marginTop: 10 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', borderRadius: 12, paddingHorizontal: 16, height: 50 },
  input: { flex: 1, height: '100%', color: '#333' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, marginBottom: 24 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center' },
  checkbox: { width: 20, height: 20, borderRadius: 4, borderWidth: 1, borderColor: '#CCC', marginRight: 8, alignItems: 'center', justifyContent: 'center' },
  checkboxChecked: { backgroundColor: '#FF9F43', borderColor: '#FF9F43' },
  rememberText: { fontSize: 12, color: '#666' },
  forgotText: { fontSize: 12, color: '#333', fontWeight: '600' },
  loginButton: { backgroundColor: '#FF9F43', borderRadius: 12, height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  loginButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  orText: { textAlign: 'center', color: '#999', marginBottom: 20 },
  socialContainer: { flexDirection: 'row', justifyContent: 'center', gap: 16 },
  socialButton: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', elevation: 3 },
});