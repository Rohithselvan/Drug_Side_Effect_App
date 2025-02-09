
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const drugData = {
    'Aspirin': {
      1: ['Mild stomach pain', 'Heartburn'],
      2: ['Mild nausea', 'Mild dizziness'],
      3: ['Headache', 'Minor bleeding'],
      4: ['Stomach pain', 'Heartburn', 'Nausea'],
      5: ['Nausea', 'Vomiting', 'Moderate dizziness'],
      6: ['Stomach ulcers', 'Severe dizziness'],
      7: ['Severe nausea', 'Tinnitus (ringing in the ears)'],
      8: ['Severe bleeding', 'Stomach ulcers'],
      9: ['Internal bleeding', 'Loss of appetite'],
      10: ['Severe bleeding', 'Ulcers', 'Coma'],
    },
    'Ibuprofen': {
      1: ['Mild stomach upset', 'Slight dizziness'],
      2: ['Mild nausea', 'Mild headache'],
      3: ['Stomach upset', 'Mild diarrhea'],
      4: ['Dizziness', 'Headache', 'Nausea'],
      5: ['Nausea', 'Dizziness', 'Rash'],
      6: ['Moderate headache', 'Upset stomach'],
      7: ['Stomach bleeding', 'Severe dizziness'],
      8: ['Severe headache', 'Kidney strain'],
      9: ['Kidney damage', 'Severe diarrhea'],
      10: ['Kidney failure', 'Severe rash', 'Internal bleeding'],
    },
    'Paracetamol': {
      1: ['Mild fatigue', 'Slight headache'],
      2: ['Mild nausea', 'Loss of appetite'],
      3: ['Headache', 'Mild dizziness'],
      4: ['Nausea', 'Rash', 'Minor fatigue'],
      5: ['Liver damage', 'Rash', 'Dizziness'],
      6: ['Severe nausea', 'Loss of appetite'],
      7: ['Jaundice', 'Severe dizziness'],
      8: ['Severe liver damage', 'Coma'],
      9: ['Liver failure', 'Severe fatigue'],
      10: ['Liver failure', 'Coma', 'Death'],
    },
    'Amoxicillin': {
      1: ['Mild diarrhea', 'Minor nausea'],
      2: ['Mild skin rash', 'Dizziness'],
      3: ['Diarrhea', 'Nausea', 'Vomiting'],
      4: ['Severe nausea', 'Vomiting', 'Rash'],
      5: ['Skin rash', 'Yeast infection', 'Moderate diarrhea'],
      6: ['Severe diarrhea', 'Abdominal pain'],
      7: ['Severe rash', 'Allergic reaction'],
      8: ['Severe nausea', 'Vomiting', 'Severe rash'],
      9: ['Anaphylaxis', 'Yeast infection'],
      10: ['Severe allergic reaction', 'Internal bleeding'],
    },
    'Metformin': {
      1: ['Mild nausea', 'Slight stomach upset'],
      2: ['Nausea', 'Mild bloating'],
      3: ['Diarrhea', 'Stomach pain', 'Fatigue'],
      4: ['Nausea', 'Vomiting', 'Moderate diarrhea'],
      5: ['Bloating', 'Severe nausea', 'Fatigue'],
      6: ['Lactic acidosis', 'Severe bloating'],
      7: ['Severe fatigue', 'Low blood sugar'],
      8: ['Lactic acidosis', 'Coma'],
      9: ['Kidney damage', 'Severe vomiting'],
      10: ['Severe lactic acidosis', 'Death'],
    },
    'Lisinopril': {
      1: ['Mild cough', 'Minor dizziness'],
      2: ['Dizziness', 'Mild headache'],
      3: ['Cough', 'Moderate dizziness'],
      4: ['Dizziness', 'Headache', 'Dry mouth'],
      5: ['Severe cough', 'Moderate fatigue'],
      6: ['High potassium', 'Severe dizziness'],
      7: ['Severe dizziness', 'Fatigue'],
      8: ['Severe fatigue', 'Heart arrhythmia'],
      9: ['Severe cough', 'Kidney damage'],
      10: ['Kidney failure', 'Heart failure'],
    },
    'Atorvastatin': {
      1: ['Mild muscle pain', 'Minor indigestion'],
      2: ['Muscle pain', 'Mild headache'],
      3: ['Joint pain', 'Mild diarrhea'],
      4: ['Indigestion', 'Nausea', 'Minor headache'],
      5: ['Muscle pain', 'Diarrhea', 'Joint pain'],
      6: ['Severe muscle pain', 'Liver strain'],
      7: ['Liver damage', 'Severe joint pain'],
      8: ['Severe diarrhea', 'Severe indigestion'],
      9: ['Kidney damage', 'Severe nausea'],
      10: ['Liver failure', 'Kidney failure'],
    },
    'Omeprazole': {
      1: ['Mild headache', 'Minor nausea'],
      2: ['Nausea', 'Slight stomach pain'],
      3: ['Headache', 'Minor flatulence'],
      4: ['Nausea', 'Stomach pain', 'Headache'],
      5: ['Stomach pain', 'Diarrhea', 'Flatulence'],
      6: ['Severe headache', 'Moderate diarrhea'],
      7: ['Severe nausea', 'Abdominal pain'],
      8: ['Severe diarrhea', 'Severe nausea'],
      9: ['Liver damage', 'Internal bleeding'],
      10: ['Severe liver damage', 'Gastrointestinal bleeding'],
    },
    'Ciprofloxacin': {
      1: ['Mild nausea', 'Minor dizziness'],
      2: ['Dizziness', 'Slight diarrhea'],
      3: ['Nausea', 'Dizziness', 'Restlessness'],
      4: ['Diarrhea', 'Moderate dizziness'],
      5: ['Nausea', 'Severe dizziness', 'Rash'],
      6: ['Severe diarrhea', 'Headache'],
      7: ['Severe nausea', 'Severe restlessness'],
      8: ['Tendon damage', 'Severe rash'],
      9: ['Tendon rupture', 'Severe nausea'],
      10: ['Severe tendon damage', 'Coma'],
    },
    'Alprazolam': {
      1: ['Mild drowsiness', 'Minor dizziness'],
      2: ['Dizziness', 'Dry mouth'],
      3: ['Fatigue', 'Mild memory problems'],
      4: ['Drowsiness', 'Moderate fatigue'],
      5: ['Drowsiness', 'Dizziness', 'Fatigue'],
      6: ['Severe dizziness', 'Moderate memory loss'],
      7: ['Severe drowsiness', 'Coordination problems'],
      8: ['Severe memory loss', 'Fatigue'],
      9: ['Severe coordination loss', 'Severe dizziness'],
      10: ['Severe memory loss', 'Coma'],
    },
    'Warfarin': {
      1: ['Mild bruising', 'Minor bleeding'],
      2: ['Nausea', 'Abdominal pain'],
      3: ['Bleeding', 'Moderate bruising'],
      4: ['Severe nausea', 'Severe abdominal pain'],
      5: ['Moderate bleeding', 'Bruising', 'Hair loss'],
      6: ['Severe bleeding', 'Severe bruising'],
      7: ['Internal bleeding', 'Severe abdominal pain'],
      8: ['Hemorrhage', 'Severe hair loss'],
      9: ['Massive hemorrhage', 'Severe bleeding'],
      10: ['Death due to severe bleeding'],
    },
    'Clonazepam': {
      1: ['Mild dizziness', 'Minor drowsiness'],
      2: ['Dizziness', 'Fatigue'],
      3: ['Moderate drowsiness', 'Coordination problems'],
      4: ['Dizziness', 'Moderate memory problems'],
      5: ['Drowsiness', 'Fatigue', 'Memory loss'],
      6: ['Severe dizziness', 'Severe coordination issues'],
      7: ['Severe memory loss', 'Fatigue'],
      8: ['Loss of coordination', 'Severe drowsiness'],
      9: ['Severe memory loss', 'Coordination problems'],
      10: ['Severe coma', 'Loss of function'],
    },
    'Amlodipine': {
    1: ['Mild swelling', 'Slight dizziness'],
    2: ['Dizziness', 'Mild fatigue'],
    3: ['Fatigue', 'Slight headache'],
    4: ['Swelling', 'Mild palpitations'],
    5: ['Moderate swelling', 'Dizziness'],
    6: ['Severe swelling', 'Fatigue'],
    7: ['Severe dizziness', 'Palpitations'],
    8: ['Severe headache', 'Extreme fatigue'],
    9: ['Severe palpitations', 'Heart failure'],
    10: ['Severe hypotension', 'Heart attack'],
  },
  'Simvastatin': {
    1: ['Mild muscle pain', 'Minor dizziness'],
    2: ['Muscle pain', 'Slight fatigue'],
    3: ['Mild joint pain', 'Headache'],
    4: ['Moderate muscle pain', 'Mild rash'],
    5: ['Severe muscle pain', 'Fatigue'],
    6: ['Liver strain', 'Severe headache'],
    7: ['Severe joint pain', 'Severe dizziness'],
    8: ['Liver damage', 'Rash'],
    9: ['Kidney damage', 'Severe nausea'],
    10: ['Rhabdomyolysis', 'Kidney failure'],
  },
  'Prednisone': {
    1: ['Mild mood swings', 'Slight insomnia'],
    2: ['Mood swings', 'Minor weight gain'],
    3: ['Increased appetite', 'Mild fatigue'],
    4: ['Severe mood swings', 'Fatigue'],
    5: ['Weight gain', 'Insomnia'],
    6: ['Severe insomnia', 'Increased blood sugar'],
    7: ['Severe weight gain', 'Mood disorders'],
    8: ['Severe diabetes', 'Cushing’s syndrome'],
    9: ['Severe adrenal suppression', 'Severe weight gain'],
    10: ['Adrenal crisis', 'Death'],
  },
  'Tramadol': {
    1: ['Mild dizziness', 'Slight nausea'],
    2: ['Dizziness', 'Minor headache'],
    3: ['Fatigue', 'Nausea'],
    4: ['Moderate dizziness', 'Drowsiness'],
    5: ['Severe dizziness', 'Nausea'],
    6: ['Severe drowsiness', 'Seizures'],
    7: ['Severe nausea', 'Respiratory depression'],
    8: ['Severe dizziness', 'Coma'],
    9: ['Severe respiratory depression', 'Overdose risk'],
    10: ['Severe overdose', 'Death'],
  },
  'Metoprolol': {
    1: ['Mild fatigue', 'Slight dizziness'],
    2: ['Fatigue', 'Minor headache'],
    3: ['Dizziness', 'Slight bradycardia'],
    4: ['Moderate fatigue', 'Dizziness'],
    5: ['Severe fatigue', 'Bradycardia'],
    6: ['Hypotension', 'Severe dizziness'],
    7: ['Severe bradycardia', 'Severe fatigue'],
    8: ['Heart block', 'Severe dizziness'],
    9: ['Heart failure', 'Severe hypotension'],
    10: ['Cardiac arrest', 'Death'],
  },
  'Fluoxetine': {
    1: ['Mild nausea', 'Slight insomnia'],
    2: ['Nausea', 'Minor headache'],
    3: ['Insomnia', 'Fatigue'],
    4: ['Increased anxiety', 'Severe headache'],
    5: ['Severe nausea', 'Drowsiness'],
    6: ['Severe insomnia', 'Agitation'],
    7: ['Severe anxiety', 'Suicidal thoughts'],
    8: ['Serotonin syndrome', 'Severe mood swings'],
    9: ['Severe agitation', 'Severe suicidal thoughts'],
    10: ['Severe serotonin syndrome', 'Death'],
  },
  'Sertraline': {
    1: ['Mild nausea', 'Slight headache'],
    2: ['Nausea', 'Minor dizziness'],
    3: ['Dizziness', 'Fatigue'],
    4: ['Increased anxiety', 'Slight insomnia'],
    5: ['Severe dizziness', 'Nausea'],
    6: ['Severe fatigue', 'Agitation'],
    7: ['Severe anxiety', 'Suicidal thoughts'],
    8: ['Serotonin syndrome', 'Severe mood swings'],
    9: ['Severe agitation', 'Severe suicidal thoughts'],
    10: ['Severe serotonin syndrome', 'Death'],
  },
  'Citalopram': {
    1: ['Mild drowsiness', 'Slight nausea'],
    2: ['Drowsiness', 'Minor dizziness'],
    3: ['Nausea', 'Fatigue'],
    4: ['Increased anxiety', 'Mild insomnia'],
    5: ['Severe nausea', 'Drowsiness'],
    6: ['Severe dizziness', 'Agitation'],
    7: ['Severe anxiety', 'Suicidal thoughts'],
    8: ['Serotonin syndrome', 'Severe mood swings'],
    9: ['Severe agitation', 'Severe suicidal thoughts'],
    10: ['Severe serotonin syndrome', 'Death'],
  },
  'Dexamethasone': {
    1: ['Mild mood swings', 'Slight insomnia'],
    2: ['Mood swings', 'Minor weight gain'],
    3: ['Increased appetite', 'Mild fatigue'],
    4: ['Severe mood swings', 'Fatigue'],
    5: ['Weight gain', 'Insomnia'],
    6: ['Severe insomnia', 'Increased blood sugar'],
    7: ['Severe weight gain', 'Mood disorders'],
    8: ['Severe diabetes', 'Cushing’s syndrome'],
    9: ['Severe adrenal suppression', 'Severe weight gain'],
    10: ['Adrenal crisis', 'Death'],
  },
};

export default function PredictionScreen({ setIsLoggedIn }) {
  const [drugName, setDrugName] = useState('');
  const [dosage, setDosage] = useState('');
  const [sideEffects, setSideEffects] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePredict = () => {
    const dosageLevel = parseInt(dosage);
    if (drugData[drugName] && drugData[drugName][dosageLevel]) {
      setSideEffects(drugData[drugName][dosageLevel]);
    } else {
      setSideEffects(['No known side effects or drug not found.']);
    }
  };

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    setModalVisible(false);
    setIsLoggedIn(false); // Log the user out
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name="sign-out" size={20} color="#fff" />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <Animatable.Text animation="bounceIn" style={styles.title}>
        Drug Side Effect Prediction
      </Animatable.Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a drug name"
        placeholderTextColor="#999"
        value={drugName}
        onChangeText={(text) => setDrugName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter dosage (1-10)"
        placeholderTextColor="#999"
        value={dosage}
        onChangeText={(text) => setDosage(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.predictButton} onPress={handlePredict}>
        <Text style={styles.predictButtonText}>Predict Side Effects</Text>
      </TouchableOpacity>

      {sideEffects.length > 0 && (
        <Animatable.View animation="fadeInUp" style={styles.resultsContainer}>
          <Text style={styles.resultTitle}>Predicted Side Effects:</Text>
          {sideEffects.map((effect, index) => (
            <Animatable.View
              key={index}
              animation="fadeIn"
              delay={index * 200}
              style={styles.effectCard}
            >
              <Text style={styles.effectText}>{effect}</Text>
            </Animatable.View>
          ))}
        </Animatable.View>
      )}

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButtonYes} onPress={confirmLogout}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButtonNo} onPress={cancelLogout}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16213e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f4d35e',
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#3a3a3a',
    borderWidth: 1,
    backgroundColor: '#1a1a2e',
    color: '#fff',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  predictButton: {
    backgroundColor: '#f4d35e',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 20,
  },
  predictButtonText: {
    color: '#1a1a2e',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultsContainer: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 10,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e94560',
    marginBottom: 10,
    textAlign: 'center',
  },
  effectCard: {
    backgroundColor: '#1a1a2e',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: '#f4d35e',
    borderWidth: 1,
  },
  effectText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  logoutButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#e94560',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: '#1a1a2e',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalText: {
    color: '#f4d35e',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButtonYes: {
    backgroundColor: '#e94560',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  modalButtonNo: {
    backgroundColor: '#3a3a3a',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
