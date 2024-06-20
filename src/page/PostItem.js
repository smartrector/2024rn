import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';

const PostItem = ({data}) => {
  const [like, setLike] = useState(data.isLiked);
  return (
    <View>
      {/* title s */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <TouchableOpacity>
            <Image
              source={data.postPersonImage}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text>{data.postTitle}</Text>
          </View>
        </View>
        <Feather
          name="more-vertical"
          style={{
            fontSize: 20,
          }}
        />
      </View>
      {/* title e */}

      <View>
        <Image
          source={data.postImage}
          style={{
            width: '100%',
            height: 400,
          }}
        />
      </View>
      {/* faver s */}
      <View
        style={{
          padding: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
            }}>
            <TouchableOpacity onPress={() => setLike(!like)}>
              <AntDesign
                name={like ? 'heart' : 'hearto'}
                style={{
                  fontSize: 20,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionic
                name="chatbubble-outline"
                style={{
                  fontSize: 20,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                name="navigation"
                style={{
                  fontSize: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <Feather name="bookmark" style={{fontSize: 20}} />
        </View>
      </View>
      {/* faver e */}
    </View>
  );
};

export default PostItem;
