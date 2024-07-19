import { Colors } from "@/lib/constants/Colors"
import { useColorScheme } from "@/lib/hooks/useColorScheme"
import { Tabs } from "expo-router"
import { Component, House, SquarePlay } from "lucide-react-native"

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
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
