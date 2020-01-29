import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  cardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 15,
    marginRight: 15,
    marginTop: -8,
    fontWeight: 'bold',
  },
  descriptionStyle: {
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
});

function PinterestCard({data, ...props}){
  return(
    <View style={{flex: 1, flexDirection: 'column', margin: 1}} {...props}>
      <TouchableOpacity>
        <Image style={styles.cardStyle} source={{uri: data.image}} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{data.title}</Text>
      <Text style={styles.descriptionStyle}>{data.description}</Text>
    </View>
  )
}

export default PinterestCard;
