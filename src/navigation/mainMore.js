import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { More, History, Add, UpdateDelete } from '../screens';
import { colors } from '../constants/themes';

const StackMore = createNativeStackNavigator();
const MainMore = () => {
  return (
    <StackMore.Navigator initialRouteName="More">
      <StackMore.Screen
        name="More"
        component={More}
        options={{
          title: 'Mas',
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.light,
          headerTitleStyle: {
            fontFamily: 'SansPro-Italic',
            fontSize: 20,
          },
        }}
      />

      <StackMore.Screen
        name="History"
        component={History}
        options={{
          title: 'Historial',
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.light,
          headerTitleStyle: {
            fontFamily: 'SansPro-Italic',
            fontSize: 20,
          },
        }}
      />

      <StackMore.Screen
        name="Add"
        component={Add}
        options={{
          title: 'Agregar',
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.light,
          headerTitleStyle: {
            fontFamily: 'SansPro-Italic',
            fontSize: 20,
          },
        }}
      />

      <StackMore.Screen name="UpdateDelete" component={UpdateDelete} />
    </StackMore.Navigator>
  );
};

export default MainMore;
