import { Tabs } from "expo-router"
import { Component, House, SquarePlay } from "lucide-react-native"
import { useStyles } from "react-native-unistyles"

export default function TabLayout() {
  const { theme } = useStyles()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorPrimary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <House color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="animations"
        options={{
          title: "Animations",
          tabBarIcon: ({ color }) => <SquarePlay color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          title: "Components",
          tabBarIcon: ({ color }) => <Component color={color} size={28} />,
        }}
      />
    </Tabs>
  )
}
