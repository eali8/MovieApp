import { StyleSheet, View, Text, Button,TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native'; 
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function FeelingsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
            HOW ARE YOU FEELING TODAY?
            </Text>
            <TouchableOpacity 
           style={{
            backgroundColor: '#C7E4FF', 
            width: 300, 
            alignSelf: 'center', 
            padding: 10,
            margin: 10,}}
           onPress={() => navigation.navigate('Sad')}>
           
           <Text style={{
            color: '#333333',
            justifyContent: 'center',
            textAlign: 'center'}}>
            Sad just want to cry </Text>
           </TouchableOpacity>

            <TouchableOpacity 
           style={{
            backgroundColor: '#6F88E0', 
            width: 300, 
            alignSelf: 'center', 
            padding: 10,
            margin: 10, }}
            onPress={() => navigation.navigate('Cheers')}>
           
           <Text style={{
            color: '#333333',
            justifyContent: 'center',
            textAlign: 'center'}}>
            Sad want something to cheers me up
            </Text>
           </TouchableOpacity>

           <TouchableOpacity 
           style={{
            backgroundColor: '#B51D1D',
            width: 300, 
            alignSelf: 'center', 
            padding: 10,
            margin: 10, }}
            onPress={() => navigation.navigate('Relax')}>
           
           <Text style={{
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center'}}>
            Angry need to relax 
            </Text>
           </TouchableOpacity>

           <TouchableOpacity 
           style={{
            backgroundColor: '#333333',
            width: 300, 
            alignSelf: 'center', 
            padding: 10,
            margin: 10, }}
            onPress={() => navigation.navigate('Bord')}>
           
           <Text style={{
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center'}}>
            Bored 
            </Text>
           </TouchableOpacity>

           <TouchableOpacity 
           style={{
            backgroundColor: '#ECBF7C',
            width: 300, 
            alignSelf: 'center', 
            padding: 10,
            margin: 10, }}
            onPress={() => navigation.navigate('Happy')}>
           
           <Text style={{
            color: '#333333',
            justifyContent: 'center',
            textAlign: 'center'}}>
            Happy 
            </Text>
           </TouchableOpacity>
        </View>



        // <View style={styles.container}>
        //     <Button
        //     title="Sad just want to cry"
        //     onPress={()=> navigation.navigate('Movies')}/>
        // </View>

        

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: '#F3F0DD',
        paddingTop: 100,
      },
      headerText: {
        fontSize: 50,
        fontWeight: 'bold',
        paddingBottom: 30,
      },
      bordBotton:{
        width: '100',
        backgroundColor: '#333333',
      }
});