import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Resources from './Screen/Resources';
import Create from './Screen/Create';
import ResourceDetail from './Screen/ResourceDetail';
import JobList from './Screen/JobList';
import JobDetail from './Screen/JobDetail';
import { NavigationContainer } from '@react-navigation/native'


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <>
    <StatusBar backgroundColor='#000' barStyle='light-content' />
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Resources"
        activeColor="#fff"
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#002223',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={DetailsStackScreen}
          options={{
            tabBarLabel: 'Job',
            tabBarColor: '#002223',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-search-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"

          component={BlogStackScreen}
          options={{
            tabBarLabel: 'Blog',
            tabBarColor: '#002223',
            tabBarIcon: ({ color }) => (
              <Icon name="clipboard-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#002223',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#002223',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Resources" component={Resources} options={{
      title: 'Resource List',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
    <HomeStack.Screen name="Create" component={Create} options={{
      title: 'Create',
    }} />

    <HomeStack.Screen name="Resource-Detail" component={ResourceDetail} options={{
      title: 'Resource Detail',
    }} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#002223',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Job List" component={JobList} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" ></Icon.Button>
      )
    }} />
    <DetailsStack.Screen name="Job-Detail" component={JobDetail} options={{
      title: 'Job Detail',
    }} />
  </DetailsStack.Navigator>
);

const BlogStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#002223',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Blog" component={Resources} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" ></Icon.Button>
      )
    }} />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#002223',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Profile" component={Resources} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" ></Icon.Button>
      )
    }} />
  </DetailsStack.Navigator>
);