import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGetNoticeListQuery } from '../generated/graphql';

const IndexScreen = () => {
  const { data } = useGetNoticeListQuery({
    variables: {
      limit: 4,
    },
  });
  console.log(data);
  return (
    <View>
      <Text>this is index page</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
