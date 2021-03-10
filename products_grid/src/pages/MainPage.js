import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Card from '../components/Card';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {fetch_api} from '../store/action';

const MainPage = (props) => {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((s) => s.reducer1);
  const [sortbyid, setSortbyid] = useState(data);
  const [sortbyprice, setSortbyprice] = useState(data);
  let sponsorId = Math.floor(Math.random() * 1000);
  let sponsors = {uri: `https://unsplash.it/320/200?image=${sponsorId}`};

  //console.log('==>', data);

  const dispatchRedux = () => {
    dispatch(fetch_api());
  };

  useEffect(() => {
    dispatchRedux();
  }, []);

  function kartu() {
    const renderItem = ({item, index}) => {
      return (
        <View>
          <Card
            face={item.face} //face name
            price={item.price} //price username
            size={item.size} //size email
            date={item.date} //date phone
            number={item.id} //id id
          />
        </View>
      );
    };
    return (
      <FlatList
        data={data}
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
      <Image style={styles.sponsorImage} source={sponsors} />

      <View style={styles.sortingButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            //alert('Sort By Size')
            let sorted = data.sort((a, b) => a.id - b.id);
            setSortbyid(sorted);
          }}>
          <Text>Sort By ID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            //alert('Sort By Size')
            let sorted = data.sort((a, b) => a.price - b.price);
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'justify',
  },
  sponsorImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
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
