import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SearchContent = props => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../../assets/images/post1.jpeg'),
        require('../../assets/images/post2.jpeg'),
        require('../../assets/images/post3.jpeg'),
        require('../../assets/images/post4.jpeg'),
        require('../../assets/images/post5.jpeg'),
        require('../../assets/images/post6.jpeg'),
      ],
    },
    {
      id: 1,
      images: [
        require('../../assets/images/post7.jpeg'),
        require('../../assets/images/post8.jpeg'),
        require('../../assets/images/post9.jpeg'),
        require('../../assets/images/post10.jpeg'),
        require('../../assets/images/post11.jpeg'),
        require('../../assets/images/post12.jpeg'),
      ],
    },
    {
      id: 2,
      images: [require('../../assets/images/post13.jpeg'), require('../../assets/images/post14.jpeg'), require('../../assets/images/post15.jpeg')],
    },
  ];

  return (
    <View>
      {searchData.map((item, idx) => {
        return (
          <View key={idx}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {item.images.map((imageItem, imgIdx) => {
                return (
                  <TouchableOpacity
                    key={imgIdx}
                    style={{
                      paddingBottom: 2,
                      width: '33%',
                    }}
                    onPressIn={() => props.data(imageItem)}
                    onPressOut={() => props.data(null)}>
                    <Image source={imageItem} style={{width: '100%', height: 150}} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
