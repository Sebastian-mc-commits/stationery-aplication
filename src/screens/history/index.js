import React, { useState } from 'react';
import {
  Modal,
  FlatList,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { addCommit, deleteCommit } from '../../store/slices/history.slice';
import { styles } from './style';
import { DismissDelete } from '../../components';

const History = () => {
  const history = useSelector((state) => state.history.historyList);
  const [deleteItem, setDeleteItem] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <View>
        <Text style={styles.historyName}>{item.name}</Text>
        <Text>Fecha {item.date}</Text>
      </View>
      <TouchableOpacity onPress={() => setDeleteItem(item)}>
        <MaterialIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={Date.now().toString()}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>Historial Vacio</Text>
          }
        />
      </View>

      <DismissDelete
        deleteItem={deleteItem}
        dispatchActionRemove={deleteCommit}
        dispatchActionAdd={addCommit}
      />
    </View>
  );
};
export default History;
