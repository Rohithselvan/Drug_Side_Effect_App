import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ResultScreen({ route, navigation }) {
  const { drugName, sideEffects } = route.params;
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    // Fade in and slide down animations for title and result text
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, slideAnim]);

  return (
    <LinearGradient
      colors={['#6dd5fa', '#2980b9']}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Animated.Text style={[styles.title, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          {drugName} Side Effects
        </Animated.Text>
        <Animated.Text style={[styles.resultText, { opacity: fadeAnim }]}>
          {sideEffects.join(', ')}
        </Animated.Text>
        <Animated.View style={{ opacity: fadeAnim, marginTop: 20 }}>
          <Button 
            title="Back to Prediction" 
            onPress={() => navigation.goBack()} 
            color="#f39c12" 
          />
        </Animated.View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 18,
    color: '#ecf0f1',
    textAlign: 'center',
  },
});
