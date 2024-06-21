import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const Stories = () => {
  const navigation = useNavigation();
  const storyInfo = [
    {
      id: 1,
      name: '나의 스토리',
      image: require('../../assets/images/userProfile.jpeg'),
    },
    {
      id: 0,
      name: 'john1',
      image: require('../../assets/images/profile1.jpeg'),
    },
    {
      id: 0,
      name: 'tonny',
      image: require('../../assets/images/profile2.jpeg'),
    },
    {
      id: 0,
      name: 'daniel',
      image: require('../../assets/images/profile3.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'sojeong',
      image: require('../../assets/images/profile4.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'jaeho',
      image: require('../../assets/images/profile5.jpeg'),
    },
  ];
  return (
    <ScrollView horizontal={true} style={{paddingVertical: 20}}>
      {storyInfo.map((item, idx) => {
        return (
          <TouchableOpacity
            key={idx}
            onPress={() =>
              navigation.push('Status', {
                name: item.name,
                image: item.image,
              })
            }>
            <View
              style={{
                position: 'relative',
              }}>
              {item.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    //   backgroundColor: 'pink',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      overflow: 'hidden',
                    }}
                  />
                </View>
              ) : null}

              <View
                style={{
                  padding: 8,
                }}>
                {/* <Text>{item.name}</Text> */}
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#c13584',
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: '90%',
                      height: '90%',
                      borderRadius: 100,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({});
