import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>MDT</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Start"
          onPress={() => navigation.navigate('WelcomeScreen')}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECBF7C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 100,
    fontWeight: 'bold',
    bottom: 30,
    color: '#F3F0DD',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: '#000000',
    width: 250,
    height: 50,
    textAlign: 'center', 
    justifyContent: 'center',
  },
 
});
