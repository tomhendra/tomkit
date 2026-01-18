import Icon from '@react-native-vector-icons/lucide'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useUnistyles } from 'react-native-unistyles'

import { BouncingSquare } from '@/features/animations/bouncing-square'
import { PanGestures } from '@/features/animations/pan-gestures'
import { TextScreen } from '@/features/components/text-screen'
import { HomeScreen } from '@/features/home/home-screen'

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
  Text: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()
const AnimationsDrawer = createDrawerNavigator<AnimationsDrawerParamList>()
const ComponentsDrawer = createDrawerNavigator<ComponentsDrawerParamList>()

const HomeIcon = ({ color }: { color: string }) => (
  <Icon name="house" size={24} color={color} />
)
const AnimationsIcon = ({ color }: { color: string }) => (
  <Icon name="sparkles" size={24} color={color} />
)
const ComponentsIcon = ({ color }: { color: string }) => (
  <Icon name="component" size={24} color={color} />
)

function AnimationsNavigator() {
  const { theme: t } = useUnistyles()

  return (
    <AnimationsDrawer.Navigator
      screenOptions={{
        drawerActiveTintColor: t.color.primary,
        headerTintColor: t.color.foreground,
        headerStyle: { backgroundColor: t.color.background },
        drawerStyle: { backgroundColor: t.color.background },
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
    </AnimationsDrawer.Navigator>
  )
}

function ComponentsNavigator() {
  const { theme: t } = useUnistyles()

  return (
    <ComponentsDrawer.Navigator
      screenOptions={{
        drawerActiveTintColor: t.color.primary,
        headerTintColor: t.color.foreground,
        headerStyle: { backgroundColor: t.color.background },
        drawerStyle: { backgroundColor: t.color.background },
      }}
    >
      <ComponentsDrawer.Screen
        name="Text"
        component={TextScreen}
        options={{ title: 'Text' }}
      />
    </ComponentsDrawer.Navigator>
  )
}

export function RootNavigator() {
  const { theme: t } = useUnistyles()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: t.color.primary,
        tabBarInactiveTintColor: t.color.secondaryForeground,
        tabBarStyle: { backgroundColor: t.color.background },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="AnimationsTab"
        component={AnimationsNavigator}
        options={{
          title: 'Animations',
          tabBarIcon: AnimationsIcon,
        }}
      />
      <Tab.Screen
        name="ComponentsTab"
        component={ComponentsNavigator}
        options={{
          title: 'Components',
          tabBarIcon: ComponentsIcon,
        }}
      />
    </Tab.Navigator>
  )
}
