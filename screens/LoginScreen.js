import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <LinearGradient
      colors={['#4B0082', '#000000']}  // Purple to black gradient background
      style={styles.container}
    >
      <Animatable.Text animation="fadeInDown" style={styles.title}>
        Welcome to Drug Side Effect Predictor
      </Animatable.Text>

      <Animatable.View animation="fadeInUp" delay={500} style={styles.inputContainer}>
        <Icon name="user" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#fff"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={700} style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </Animatable.View>

      <Animatable.View animation="bounceIn" delay={900}>
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={handleLogin}
        >
          <LinearGradient
            colors={['#8E2DE2', '#4A00E0']}  // Button gradient from violet to deep blue
            style={styles.gradientButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    width: '100%',
    borderColor: '#fff',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  loginButton: {
    flexDirection: 'row',  // This ensures that the text inside the button is centered horizontally
    width: '90%',         // Make the button stretch to the full width of the parent
    height: '30%',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 100, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    paddingVertical: 20,   // Padding to increase the vertical size of the button
  },
  gradientButton: {
    flex: 1,               // Ensures the button takes up more space than the text
    paddingHorizontal: 60,  // Controls the extra width around the text inside the button
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});



