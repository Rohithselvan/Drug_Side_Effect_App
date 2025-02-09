import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* ScrollView to allow for scrolling of the long paragraph */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Main Paragraph explaining the app */}
        <Text style={styles.paragraph}>
          This app is designed to help users understand the potential side effects of various drugs, based on their dosage. With this tool, users can predict what side effects they may experience by entering the drug name and the dosage they are taking. It’s a useful resource for individuals who want to stay informed about their medications and make better decisions for their health. Knowing the potential side effects helps users consult their healthcare provider before making any changes to their medication intake. The app is simple, user-friendly, and provides vital information in just a few clicks.
        </Text>
      </ScrollView>
      
      {/* Developer Details at the bottom */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>About Developer</Text>
        <Text style={styles.detailsText}>Name: S. Rohith</Text>
        <Text style={styles.detailsText}>Contact Number: 8148971275</Text>
        <Text style={styles.detailsText}>Email ID: rohithselvan10@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff', // Subtle light background color
    padding: 20,
    justifyContent: 'space-between', // Push details to the bottom
  },
  scrollContent: {
    paddingBottom: 50, // Leave space at the bottom for details
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333', // Subtle dark color for paragraph text
    textAlign: 'justify', // Makes the paragraph look cleaner
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#e6f0ff', // Light blue background for the paragraph
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4, // Slight shadow for a more elegant look
  },
  detailsContainer: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Slightly lighter background for the bottom section
    paddingVertical: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5, // Elevated to give a separate section look
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e94560', // Slightly vibrant color for emphasis
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    color: '#16213e', // Dark color for the details text
    marginBottom: 5,
  },
});
