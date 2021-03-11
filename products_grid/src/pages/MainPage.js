import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Card from '../components/Card';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {fetch_api} from '../store/action';

const MainPage = (props) => {
  const dispatch = useDispatch();
  const [sortbyid, setSortbyid] = useState(data);
  const [sortbyprice, setSortbyprice] = useState(data);
  const [sortbysize, setSortcdbysize] = useState(data);
  let sponsorId = Math.floor(Math.random() * 1000);
  let sponsors = {uri: `https://unsplash.it/320/200?image=${sponsorId}`};
  const {data, loading, error} = useSelector((state) => state.details);
  //console.log('==>', data);

  const dispatchRedux = () => {
    dispatch(fetch_api());
  };

  useEffect(() => {
    dispatchRedux();
  }, []);

  // Function for show the card item
  function kartu() {
    const renderItem = ({item, index}) => {
      return (
        <View>
          <Card
            face={item.face}
            price={item.price}
            size={item.size}
            date={item.date}
            number={item.id}
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
    <ImageBackground
      source={require('../assets/images/logo_creatella.png')}
      style={{flex: 1}}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/creatella.png')}
            style={{height: 50, width: 100, resizeMode: 'stretch'}}
          />
          <Text style={styles.textHeader}>Product Grid</Text>
        </View>
        <Text style={styles.text}>
          Here you're sure to find a bargain on some of the finest ascii
          available to purchase. Be sure to peruse our selection of ascii faces
          range of sizes and prices.
        </Text>
        <Text style={styles.text}>But first, a word from our sponsors:</Text>
        <Image style={styles.sponsorImage} source={sponsors} />

        <View style={styles.sortingButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              //alert('Sort By Size');
              let sorted = data.sort((a, b) => a.size - b.size);
              setSortbysize(sorted);
            }}>
            <Text>Sort By Size</Text>
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
            onPress={() => {
              //alert('Sort By Size')
              let sorted = data.sort((a, b) => a.id - b.id);
              setSortbyid(sorted);
            }}>
            <Text>Sort By ID</Text>
          </TouchableOpacity>
        </View>

        {kartu()}
      </View>
    </ImageBackground>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textHeader: {
    //flex: 4,
    marginLeft: 30,
    color: '#000000',
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
