# Drug_Side_Effect_App

![GitHub repo](https://img.shields.io/badge/GitHub-Repository-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)

## 📌 Overview
The **Drug Side Effect Prediction System** is a machine learning-powered **Expo Go** application designed to predict potential side effects of various drugs based on input parameters. The system aims to assist medical professionals and researchers in identifying adverse drug reactions efficiently.

## 🎯 Features
- **Expo Go Mobile Application** built using React Native.
- Predicts side effects of drugs using machine learning models.
- Provides an interactive and user-friendly mobile interface.
- Utilizes a dataset of drug reactions and symptoms for accurate predictions.
- Supports visualization of results for better interpretation.

## 🏗️ Technologies Used
- **Frontend:** React Native (Expo)
- **Machine Learning:** Python (GNN-based model)
- **Libraries:** React Navigation, Expo Asset, Async Storage, Axios (if applicable)
- **Version Control:** Git & GitHub

## 📂 Project Structure
```
DRUGSIDEFFECTAPP/
│── assets/             # App images and icons
│── screens/            # Application screens
│   ├── AboutScreen.js
│   ├── LoginScreen.js
│   ├── PredictionScreen.js
│   ├── ResultScreen.js
│── .expo/              # Expo configuration
│── node_modules/       # Dependencies
│── .gitignore          # Ignored files
│── App.js              # Main entry point
│── app.json            # App metadata
│── babel.config.js     # Babel configuration
│── convert_to_transduction.py # ML model conversion script
│── GNN_node_classifier.py # Machine learning model
│── package.json        # Project dependencies
│── README.md           # Documentation (this file)
```

## 📦 Installation & Setup
To run the project locally, follow these steps:

### Prerequisites
Ensure you have the following installed:
- Node.js (>=14)
- Expo CLI
- Git
- Python (for ML model execution)

### Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Rohithselvan/Drug_Side_Effect_App.git
   cd Drug_Side_Effect_App
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the Expo application:**
   ```sh
   expo start
   ```

4. **Run on mobile:**
   - Scan the QR code using the **Expo Go** app.
   - Or run using an emulator (`expo run:android` / `expo run:ios`).

## 🛠️ Usage
1. Open the **Drug Side Effect Prediction** app on your mobile.
2. Navigate to the **Login Screen** and authenticate.
3. Input the drug details in the **Prediction Screen**.
4. View predicted side effects on the **Result Screen**.

## 📊 Machine Learning Model
The system includes a **GNN-based classifier** for predicting drug side effects. The ML scripts are found in:
- `convert_to_transduction.py`
- `GNN_node_classifier.py`

## 🧑‍💻 Contributing
We welcome contributions! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Make changes and commit them.
4. Push to your fork and create a Pull Request.

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact
- **Author:** Rohith Selvan
- **GitHub:** [Rohithselvan](https://github.com/Rohithselvan)
- **Email:** rohithselvan10@gmail.com

## ⭐ Acknowledgements
Special thanks to:
- Open-source contributors
- Machine learning communities
- Medical professionals for insights

## 🌟 Support
If you find this project useful, consider giving it a **⭐ star** on GitHub!

