
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, FlatList, ActivityIndicator, Image, ScrollView, Dimensions } from 'react-native';

const API_KEY = 'af117673b0468e9ebcee2742e751f872'; // My TMDb API key

const App = ({ navigation }) => {
  const [genres, setGenres] = useState([
    { id: 80, name: 'Crime' },
    { id: 9648, name: 'Mystery' },
    { id: 878, name: 'Science Fiction' },
    { id: 12, name: 'Adventure' }
  ]);
  const [selectedGenre, setSelectedGenre] = useState(genres[0].id);
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedGenre) {
      fetchMovies(selectedGenre);
    }
  }, [selectedGenre]);

  const fetchMovies = async (genreId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovies(prevState => ({
        ...prevState,
        [genreId]: data.results
      }));
    } catch (error) {
      setError('Error fetching movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenreSelection = (genreId) => {
    setSelectedGenre(genreId);
  };

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Image resizeMode={'contain'} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  const renderGenreSection = () => {
    // const rows = [];
    // for (let i = 0; i < genres.length; i += 4) {
    //   const row = genres.slice(i, i + 4).map(genre => (
    //     <View key={i}>
    //       <TouchableOpacity
    //         key={genre.id}
    //         style={[styles.genreButton, selectedGenre === genre.id && styles.selected]}
    //         onPress={() => handleGenreSelection(genre.id)}
    //       >
    //         <Text style={styles.genreText}>{genre.name}</Text>
    //       </TouchableOpacity>
    //     </View>
    //   ));
    // }

    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexGrow: 0, marginBottom: 10 }}>
        {
          genres.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.genreButton, selectedGenre === item.id && styles.selected]}
                onPress={() => handleGenreSelection(item.id)}
              >
                <Text style={styles.genreText}>{item.name}</Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    )
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Movies</Text>
        <TouchableOpacity onPress={() => setLoading(!loading)}>
          <Button title="Search" color="black" onPress={() => { }} />
        </TouchableOpacity>
      </View>
      {renderGenreSection()}
      {selectedGenre && movies[selectedGenre] ? (
        <View style={styles.movieContainer}>
          <FlatList
            data={movies[selectedGenre]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderMovieItem}
            numColumns={3}
          />
        </View>
      ) : (
        <Text style={styles.errorText}>Please select a genre</Text>
      )}
      {loading && <ActivityIndicator size="large" color="black" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Feelings')}>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Movies</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3F0DD',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  genreButton: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 10
  },
  genreText: {
    fontSize: 16,
  },
  selected: {
    backgroundColor: 'black',
  },
  movieContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    gap: 10
  },
  movieItem: {
    marginHorizontal: 5,
    flex: 0.33,
    marginBottom: 20
  },
  movieImage: {
    width: Dimensions.get('window').width * 0.32,
    height: 300 * (Dimensions.get('window').width * 0.33 / 200),
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center'
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'black',
  },
  footerText: {
    fontSize: 18,
    color: 'white',
  },
  heading: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default App;
