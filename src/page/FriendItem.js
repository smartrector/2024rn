import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FriendItem = ({data, name}) => {
  const [isFollow, setIsFollow] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <View>
      {data.name === name || close ? null : (
        <View
          style={{
            width: 160,
            height: 200,
            margin: 3,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: '#DEDEDE',
            borderRadius: 2,
            position: 'relative',
          }}>
          <TouchableOpacity
            onPress={() => setClose(true)}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}>
            <AntDesign
              name="close"
              style={{
                fontSize: 20,
                color: 'black',
                opacity: 0.5,
              }}
            />
          </TouchableOpacity>
          <Image
            source={data.profileImage}
            style={{
              width: 80,
              height: 80,
              borderRadius: 100,
              margin: 10,
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{data.name}</Text>
          <Text style={{fontSize: 12}}>{data.accountName}</Text>
          <TouchableOpacity onPress={() => setIsFollow(!isFollow)} style={{width: '80%', paddingVertical: 10}}>
            <View
              style={{
                width: '100%',
                height: 30,
                borderRadius: 5,
                backgroundColor: isFollow ? null : '#3493D9',
                borderWidth: isFollow ? 1 : 0,
                borderColor: '#DEDEDE',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: isFollow ? 'black' : 'white'}}>{isFollow ? '팔로잉' : '팔로우'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FriendItem;
