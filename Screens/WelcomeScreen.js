import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WELCOME</Text>
        <Text style={styles.subHeaderText}>MOVIEDATION</Text>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxHeader}>Privacy Policy and User Guidelines</Text>
          <Text style={styles.boxText}>Our User Guidelines encourage you to share constructive, relevant, and non-offensive movie reviews without spoilers or plot reveals. If you find a review that violates these guidelines, please report it.With our Reward Points system, you can earn points for creating original, high-quality reviews. However, duplicate or low-quality reviews will not earn points, and points cannot be transferred for cash.In our Reward Redemption system, you can redeem your accumulated points for movie tickets, gift cards, or movie projectors. Please note that the availability and selection of rewards can change at our discretion.Our Privacy Policy ensures we collect and use data for the functionality of the app, management of rewards, and to provide personalized recommendations. Rest assured, we take all necessary measures to protect your data from unauthorized access or misuse. You also have the right to delete your personal data and reviews from the app.Before using the app, users must agree to our Terms of Service which cover content ownership, limitations of liability, and dispute resolution.We actively monitor reviews for compliance with our guidelines under our Moderation and Content Management policy. Inappropriate reviews will be promptly removed, and repeat violations could lead to temporary or permanent suspension from the app.For more detailed information, please refer to our Privacy Policy or contact our support team</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={handleCheckboxToggle} style={styles.checkbox}>
            {isChecked && <Text style={styles.checkIcon}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>I have read and agree to the user Agreement and Privacy Policy</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="GET STARTED"
          color="#000000"
          onPress={() => {
            if (isChecked) {
              navigation.navigate('Feelings');
            } else {
           
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    backgroundColor: '#F3F0DD',
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 25,
  },
  boxContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    height: 450,
    borderRadius: 20
  },
  boxHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxText: {
    marginTop: 10,
    fontSize: 11.5,
    color: '#555555',
    lineHeight: 15,

  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  checkIcon: {
    fontSize: 16,
  },
  checkboxText: {
    fontSize: 10,
    color: '#555555',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    color: 'black',
    width: 360,
  },
});
