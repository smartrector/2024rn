import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'John1',
      postPersonImage: require('../../assets/images/userProfile.jpeg'),
      postImage: require('../../assets/images/post1.jpeg'),
      likes: 765,
      isLiked: false,
    },
    {
      postTitle: 'Tonny',
      postPersonImage: require('../../assets/images/profile5.jpeg'),
      postImage: require('../../assets/images/post2.jpeg'),
      likes: 345,
      isLiked: false,
    },
    {
      postTitle: 'Tom',
      postPersonImage: require('../../assets/images/profile4.jpeg'),
      postImage: require('../../assets/images/post3.jpeg'),
      likes: 734,
      isLiked: false,
    },
    {
      postTitle: 'React',
      postPersonImage: require('../../assets/images/profile3.jpeg'),
      postImage: require('../../assets/images/post4.jpeg'),
      likes: 875,
      isLiked: false,
    },
  ];
  return (
    <View>
      {postInfo.map((item, idx) => {
        return <PostItem key={idx} data={item} />;
      })}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
