import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../page/Stories';
import Post from '../page/Post';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="pink" barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
            }}>
            Instargram
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <FontAwesome name="plus-square-o" style={{fontSize: 24, marginRight: 10}} />
          <Feather name="navigation" style={{fontSize: 24}} />
        </View>
      </View>
      <ScrollView>
        {/* stories */}
        <Stories />

        {/* post */}
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
