import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Card from '../components/Card';
import {useSelector} from 'react-redux';

const MainPage = (props) => {
  const [setSortbyid] = useState(alldatabase);
  const [setSortbyprice] = useState(alldatabase);

  const alldatabase = useSelector((state) => state.details);
  console.log('==>', alldatabase);

  function kartu() {
    const renderItem = ({item, index}) => {
      return (
        <View>
          <Card name={item.face} number={item.id} harga={item.price} />
        </View>
      );
    };
    return (
      <FlatList
        data={alldatabase.data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.productgrid}>Product Grid</Text>
      <Text style={styles.text}>
        Here you're sure to find a bargain on some of the finest ascii available
        to purchase. Be sure to peruse our selection of ascii faces exciting
        range of sizes and prices.
      </Text>
      <Text style={styles.text}>But first, a word from our sponsors:</Text>
      <Image style={styles.sponsorImage} source={[]} />

      <View style={styles.sortingButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            let sorted = alldatabase.data.sort((a, b) => a.id - b.id);
            setSortbyid(sorted);
          }}>
          <Text>Sort By ID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            let sorted = alldatabase.data.sort((a, b) => a.price - b.price);
            setSortbyprice(sorted);
          }}>
          <Text>Sort By Price</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Sort By Size')}>
          <Text>Sort By Size</Text>
        </TouchableOpacity>
      </View>

      {kartu()}
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  productgrid: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    marginTop: 5,
    textAlign: 'justify',
  },
  sponsorImage: {
    width: 100,
    height: 100,
  },
  sortingButton: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    marginVertical: 5,
    width: 120,
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 4,
  },
});
