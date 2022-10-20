import React, { useState, useEffect } from 'react';
import {
  Modal,
  FlatList,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from './styles';
import { Card } from '../../components';
import { colors } from '../../constants/themes';

const DismissDelete = ({
  deleteItem,
  dispatchActionRemove,
  dispatchActionAdd,
}) => {
  const [historyDismiss, setHistoryDismiss] = useState([]);
  const dispatch = useDispatch();

  const onHandleHistory = ({ commit = '', content = '' }) => {
    if (commit === 'undo') {
      dispatch(dispatchActionAdd(content.object));
    } /*else if (commit === 'void') {
      setHistoryDismiss({
        id: 1,
        name: `Eliminados ${history.length} registros`,
        historyObject: history,
      });
      dispatch(deleteAllCommits());
    }*/
    return setHistoryDismiss(
      historyDismiss.filter((item) => item.id != content.id)
    );
  };

  useEffect(() => {
    setHistoryDismiss((prev) => [
      ...prev,
      { id: Date.now(), name: deleteItem.name, object: deleteItem },
    ]);
    dispatch(dispatchActionRemove(deleteItem));
    setTimeout(() => setHistoryDismiss([]), 3000);
  }, [deleteItem]);

  const renderItemHistoryDismiss = ({ item }) => (
    <Card style={styles.renderItemHistoryDismiss}>
      <Text style={styles.deleted}>{item.name} Eliminado</Text>
      <View style={styles.historyContent}>
        <Button
          title="Deshacer"
          onPress={() => onHandleHistory({ commit: 'undo', content: item })}
          color={colors.yellow}
        />

        <TouchableOpacity onPress={() => onHandleHistory({ content: item })}>
          <MaterialIcons name="cancel" size={26} color={colors.dark} />
        </TouchableOpacity>
      </View>
    </Card>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={historyDismiss}
        renderItem={renderItemHistoryDismiss}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
export default DismissDelete;
