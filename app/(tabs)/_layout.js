import FontAwesome from '@expo/vector-icons/FontAwesome';
import { IconHome, IconMail, IconTemplate } from '@tabler/icons-react-native';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#E55982', headerShown: false, tabBarStyle: { height: 80 } }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconHome color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="letters"
        options={{
          title: 'Letters',
          tabBarIcon: ({ color }) => <IconMail color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="templates"
        options={{
          title: 'Templates',
          tabBarIcon: ({ color }) => <IconTemplate color={color} size={28} />,
        }}
      />
    </Tabs>
  );
}
