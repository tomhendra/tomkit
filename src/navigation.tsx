import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Component, House, Sparkles } from 'lucide-react-native'
import { useUnistyles } from 'react-native-unistyles'

import { BouncingSquare } from '@/features/animations/bouncing-square'
import { PanGestures } from '@/features/animations/pan-gestures'
import { Boilerplate } from '@/features/animations/boilerplate'
import { ComponentsScreen } from '@/features/components/components-screen'
import { HomeScreen } from '@/features/home/home-screen'

// Param lists
export type TabParamList = {
  HomeTab: undefined
  AnimationsTab: undefined
  ComponentsTab: undefined
}

export type AnimationsDrawerParamList = {
  BouncingSquare: undefined
  PanGestures: undefined
  Boilerplate: undefined
}

export type ComponentsDrawerParamList = {
  ComponentsOverview: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()
const AnimationsDrawer = createDrawerNavigator<AnimationsDrawerParamList>()
const ComponentsDrawer = createDrawerNavigator<ComponentsDrawerParamList>()

function AnimationsNavigator() {
  const { theme } = useUnistyles()

  return (
    <AnimationsDrawer.Navigator
      screenOptions={{
        drawerActiveTintColor: theme.colorPrimary,
        headerTintColor: theme.colorForeground,
        headerStyle: { backgroundColor: theme.colorBackground },
        drawerStyle: { backgroundColor: theme.colorBackground },
      }}
    >
      <AnimationsDrawer.Screen
        name="BouncingSquare"
        component={BouncingSquare}
        options={{ title: 'Bouncing Square' }}
      />
      <AnimationsDrawer.Screen
        name="PanGestures"
        component={PanGestures}
        options={{ title: 'Pan Gestures' }}
      />
      <AnimationsDrawer.Screen
        name="Boilerplate"
        component={Boilerplate}
        options={{ title: 'Boilerplate' }}
      />
    </AnimationsDrawer.Navigator>
  )
}

function ComponentsNavigator() {
  const { theme } = useUnistyles()

  return (
    <ComponentsDrawer.Navigator
      screenOptions={{
        drawerActiveTintColor: theme.colorPrimary,
        headerTintColor: theme.colorForeground,
        headerStyle: { backgroundColor: theme.colorBackground },
        drawerStyle: { backgroundColor: theme.colorBackground },
      }}
    >
      <ComponentsDrawer.Screen
        name="ComponentsOverview"
        component={ComponentsScreen}
        options={{ title: 'Overview' }}
      />
    </ComponentsDrawer.Navigator>
  )
}

export function RootNavigator() {
  const { theme } = useUnistyles()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colorPrimary,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <House color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="AnimationsTab"
        component={AnimationsNavigator}
        options={{
          title: 'Animations',
          tabBarIcon: ({ color }) => <Sparkles color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="ComponentsTab"
        component={ComponentsNavigator}
        options={{
          title: 'Components',
          tabBarIcon: ({ color }) => <Component color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  )
}
