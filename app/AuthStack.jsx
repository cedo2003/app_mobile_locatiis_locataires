import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./(tabs)/login";
import Signup from "./(tabs)/Signup";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
