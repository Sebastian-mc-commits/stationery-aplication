import { ImageBackground } from 'react-native';
import { ItemsStationery } from '../../components';
import { styles } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, View, Text } from 'react-native';
import { selected } from '../../store/actions';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/themes';

const StationeryItem = () => {
  const selectedItem = useSelector((state) => state.items.selected);
  const selectedBySearch = useSelector(
    (state) => state.globalSearch.selectedSearch.item
  );

  const dispatch = useDispatch();

  return (
    <View
      style={styles.container}>
      {selectedBySearch && (
        <TouchableOpacity
          onPress={() => dispatch(selected(false))}
          style={styles.iconContainer}>
          <Ionicons name="arrow-back" size={24} color={colors.dark} />
        </TouchableOpacity>
      )}
      <ItemsStationery item={selectedBySearch || selectedItem} />
    </View>
  );
};
export default StationeryItem;
