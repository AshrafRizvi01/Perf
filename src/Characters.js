import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const characterList = [
    {
    "id": 0,
    "firstName": "Daenerys",
    "lastName": "Targaryen",
    "fullName": "Daenerys Targaryen",
    "title": "Mother of Dragons",
    "family": "House Targaryen",
    "image": "daenerys.jpg",
    "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
  },
  {
    "id": 1,
    "firstName": "Samwell",
    "lastName": "Tarly",
    "fullName": "Samwell Tarly",
    "title": "Maester",
    "family": "House Tarly",
    "image": "sam.jpg",
    "imageUrl": "https://thronesapi.com/assets/images/sam.jpg"
  },
]

export default function Characters() {
  return (
    <View>
        <Text>Hello List</Text>
    </View>
  );
}