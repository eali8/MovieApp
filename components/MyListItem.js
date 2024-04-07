import React from 'react';
import { Text, Button, ListItem, Image } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

export default function MyListItem({ itemData, navigatorRef }) {
  return (    
    <View style={styles.rowContainer}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.image}
          source={{ uri: `https://image.tmdb.org/t/p/w500${itemData.poster_path}` }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{itemData.original_title}</Text>
          <Text style={styles.detailText}>{itemData.overview}</Text>
        </View>
      </View>
      <Button
        icon={{
          name: 'caret-forward',
          type: 'ionicon',
          size: 15,
        }}
        iconPosition='right'
        onPress={() => {
          console.log('Movie ID:', itemData.id); // Log the movie ID
          navigatorRef.navigate('MovieDetail', {
            detailId: itemData.id,
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    aspectRatio: 0.75,
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 16,
    color:'#FFFAFA',
  },
  detailText: {
    marginTop: 5,
    fontSize: 15,
    color:'#FFFAFA',
  },
});