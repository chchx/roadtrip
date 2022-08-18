import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
// import axios from 'axios';
// import config from '../../config';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import POICard from './POICard';

const getPOIs = require('./yelpAPI');

export default function POIList({ navigation, route }) {
  //props: order
  const order = 2;
  const { city, term } = route.params;
  // const [POIs, setPOIs] = useState([]);

<<<<<<< HEAD
  var { isLoading: getPOIsIsLoading, data: getPOIsData } = useQuery('getPOIs', getPOIs(city, term));
=======
  const { isLoading: getPOIsIsLoading, data: getPOIsData } = useQuery('getPOIs', () => getPOIs(city, term));
>>>>>>> d05fbf5eb2ff2099e4a1323cc5e0252a99001c97

  // console.log('useQuery, getPOIsData = ', getPOIsData)


  // const { isLoading: getPOIsLoading, data: getPOIsData } = useInfiniteQuery('getPOIs', getPOIs(city, term), {

  // });

  //console.log('infiniteQuery, getPOIsData.pages = ', getPOIsData)

  // useEffect(() => {
  //   console.log('In POIList, city = ', city);
  //   console.log('In POIList, term = ', term);
  //   axios.get('https://api.yelp.com/v3/businesses/search', {
  //     headers: {
  //       Authorization: config.YELPTOKEN,
  //     },
  //     params: {
  //       term,
  //       location: city,
  //     },
  //   })
  //     .then((result) => {
  //       console.log('Yelp GET success!');
  //       setPOIs(result.data.businesses);
  //     })
  //     .catch((err) => {
  //       console.log('Yelp GET failed, err = ', err);
  //     })
  // }, []);

  const loadMore = () => {
    alert('load more');
  };

  return (
    <View style={styles.container} >
      <Button title="Back" onPress={() => navigation.goBack()} />
      {console.log(getPOIsData)}
      {/* {POIs && <FlatList
        data={POIs}
        renderItem={({ item }) => (<POICard
          POI={item}
          order={order}
          navigation={navigation}
        />)}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
      />} */}

      {!getPOIsIsLoading && <FlatList
        data={getPOIsData}
        renderItem={({ item }) => (<POICard POI={item} />)}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
      />}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});