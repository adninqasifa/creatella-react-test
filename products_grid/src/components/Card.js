import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({name, number, harga}) => {
  return (
    <View style={styles.border}>
      <Text style={styles.faces}>{name}</Text>
      <View>
        <Text style={styles.text}>ID: {number}</Text>
        <Text style={styles.text}>PRICE: ${harga}</Text>
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
  },
});

////////////////////////////////////////////////////////////////////////////////

// import React, {Component} from 'react';
// import {StyleSheet, Text, View, Image} from 'react-native';
// //import env from './Environment';
// //import LoadingDots from './LoadingDots';
//
// class Card extends Component {
//   formatDate(date) {
//     let currentDate = new Date();
//     let dateDiff = Math.round(
//       (Date.parse(currentDate) - Date.parse(date)) / (60 * 60 * 24 * 1000),
//     );
//     if (dateDiff === 0) {
//       return 'Today';
//     }
//     if (dateDiff < 6) {
//       let dayOrDays = dateDiff === 1 ? 'day' : 'days';
//       return `${dateDiff} ${dayOrDays} ago`;
//     } else {
//       return new Date(date).toLocaleDateString('en-US');
//     }
//   }
//   formatPrice(cents) {
//     let dollars = cents / 100;
//     return `$${dollars}`;
//   }
//   render() {
//     let {products, totalProductCount, isLoading, pageSize} = this.props;
//     //let baseUrl = env.baseUrl;
//     let displayArray = [];
//     let hasMore =
//       products.length >= totalProductCount + totalProductCount / pageSize;
//     displayArray.push(
//       products.map((product) => {
//         if (product.hasOwnProperty('rid')) {
//           return (
//             <View>
//               <Image source={`${baseUrl}/ads/?r=${product.rid}`} />
//               <View>
//                 <Text>Advertisement</Text>
//                 <Text>
//                   We are a tech company.We got all sort of products & gadgets
//                 </Text>
//               </View>
//             </View>
//           );
//         }
//         return (
//           <View>
//             <Text>{product.face}</Text>
//             <View>
//               <Text>{this.formatPrice(product.price)}</Text>
//               <Text>{this.formatDate(product.date)}</Text>
//             </View>
//           </View>
//         );
//       }),
//     );
//     // if (isLoading) {
//     //   displayArray.push(<LoadingDots />);
//     // }
//     if (hasMore && products.length !== 0) {
//       displayArray.push(<div>~ end of catalogue ~</div>);
//     }
//     return displayArray;
//   }
// }
// export default Card;

////////////////////////////////////////////////////////////////////////////////
