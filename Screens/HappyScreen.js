import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator,TouchableOpacity} from 'react-native';
import { Text } from '@rneui/themed';
import MyListItem from '../components/MyListItem';
import { Button } from '@rneui/base';

export default function CheersScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataResult, setDataResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=af117673b0468e9ebcee2742e751f872&with_genres=16')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          const randomIndex = Math.floor(Math.random() * result.results.length);
          setDataResult([result.results[randomIndex]]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  const renderRandomComedyMovie = () => {
    if (dataResult.length > 0) {
      const comedyMovies = dataResult.filter(item => item.genre_ids.includes(16));
      if (comedyMovies.length > 0) {
        const randomIndex = Math.floor(Math.random() * comedyMovies.length);
        const randomComedyMovie = comedyMovies[randomIndex];
        return (
          <View>
            <Text>{randomComedyMovie.original_title}</Text>
            <Text>{randomComedyMovie.overview}</Text>
          </View>
        );
      } else {
        return <Text>No comedy movies available</Text>;
      }
    } else {
      return <Text>No movies available</Text>;
    }
  }


  const handleSearch = () => {
    // Filter data based on search query
    const filteredData = dataResult.filter(item => item.original_title.toLowerCase().includes(searchQuery.toLowerCase()));
    setDataResult(filteredData);
  }

  const renderItem = ({ item }) => (
    <MyListItem itemData={item} navigatorRef={navigation} />
  );

  return (
    <View style={styles.container}>
      <Text h3 style={styles.heading}>TODAY’S{'\n'}RECOMMENDED{'\n'}MOVIE IS BASED{'\n'}ON YOUR MOOD</Text>
      {displayDataContainer(error, isLoaded, dataResult, renderItem)}
      <TouchableOpacity 
           style={{
            backgroundColor: '#fff', 
            width: 150, 
            alignSelf: 'center', 
            padding: 10,
            margin: 10, }}
            onPress={() => navigation.navigate('Movie')}>
           
           <Text style={{
            color: '#333',
            justifyContent: 'center',
            textAlign: 'center'}}>
            Next
            </Text>
           </TouchableOpacity>
    </View>
  );
}

function displayDataContainer(error, isLoaded, dataResult, renderItem) {
  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  } else if (!isLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  } else if (dataResult.length === 0) {
    return (
      <View>
        <Text>No records found for search</Text>
      </View>
    );
  } else {
    return (
      <FlatList
        style={styles.MovieList}
        data={dataResult}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECBF7C',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  heading: {
    marginTop: 60,
    marginBottom: 20,
    color:'#fff',
    width:300,
    lineHeight: 33,
  },
  searchInput: {
    width: '80%',
    backgroundColor: '#999',
    padding: 10,
    marginBottom: 10,
  },
  MovieList: {
    width: '80%',
  }
});
