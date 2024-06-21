import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
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
      <View style={{paddingHorizontal: 15}}>
        <Text>좋아요 {like ? data.likes + 1 : data.likes} 개</Text>
        <Text style={{fontWeight: 'bold', fontSize: 14, paddingVertical: 2}}>게시글 설명글 입니다.</Text>
        <Text
          style={{
            opacity: 0.4,
            paddingVertical: 2,
            marginTop: 5,
            marginBottom: 5,
          }}>
          댓글모두보기
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
            <Image
              source={data.postPersonImage}
              style={{
                width: 25,
                height: 25,
                borderRadius: 100,
                backgroundColor: 'ornage',
              }}
            />
            <TextInput placeholder="댓글달기...." style={{opacity: 0.5}} />
          </View>
          <View>
            <Text style={{color: '#0095f6'}}>게시</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
