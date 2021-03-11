import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Card = ({face, price, size, date, number}) => {
  const {data, loading, error} = useSelector((state) => state.details);
  function formatDate(date) {
    let currentDate = new Date();
    let dateDiff = Math.round(
      (Date.parse(currentDate) - Date.parse(date)) / (60 * 60 * 24 * 1000),
    );
    if (dateDiff === 0) {
      return 'Today';
    }
    if (dateDiff < 6) {
      let dayOrDays = dateDiff === 1 ? 'day' : 'days';
      return `${dateDiff} ${dayOrDays} ago`;
    } else {
      return new Date(date).toLocaleDateString('en-US');
    }
  }
  return (
    <View style={styles.border}>
      <Text style={styles.faces}>{face}</Text>
      <View>
        <Text style={styles.text}>PRICE: ${price}</Text>
        <Text style={styles.text}>SIZE: {size}</Text>
        <Text style={styles.textDate}>{formatDate(date)} </Text>
        {/*<Text style={styles.text}>ID: {number}</Text>*/}
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  border: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 15,
    alignItems: 'center',
    margin: 5,
  },
  faces: {
    fontSize: 20,
    height: 50,
    width: 150,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDate: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
