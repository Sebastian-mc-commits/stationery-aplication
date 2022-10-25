import React, { useState } from 'react';
import { Card, Picker, Input } from '../index';
import {
  Button,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../constants/themes';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { activeModal } from '../../store/slices/customModal.slice';

const ImageSelector = ({ onImage, valueImage, onChangeTextImage }) => {
  const dispatch = useDispatch();
  const [pickedUrl, setpickedUrl] = useState('');

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permiso denegado',
        'Debe aceptar el uso de la camara para guardar una imagen',
        [{ text: 'ok' }]
      );
      return false;
    }
    return true;
  };
  const onHandleTakeImage = async ({ type = '' }) => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) {
      return;
    }

    if (type === 'library') {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [5, 3],
        quality: 0.6,
      });

      if (image.cancelled) return;

      setpickedUrl(image.uri);
      return onImage(image.uri);
    }
    const image = await ImagePicker.launchCameraAsync({
      aspect: [16, 9],
      quality: 0.3,
    });

    setpickedUrl(image.uri);
    dispatch(activeModal(false))
    Alert.alert(
        image.uri,
        'Debe aceptar el uso de la camara para guardar una imagen',
        [{ text: 'ok' }]
      );
    onImage(image.uri);
    
  };

  const modalValue = () => {
    dispatch(
      activeModal({
        value: true,
        content: (
          <View style={styles.containerImageOptions}>
            <TouchableOpacity
              onPress={() => onHandleTakeImage({ type: 'library' })}
              style={styles.containerLibrary}>
              <Text style={styles.modalText}>
                Seleccionar imagen de galeria
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onHandleTakeImage}
              style={styles.containercamera}>
              <Text style={styles.modalText}>Abrir camara</Text>
            </TouchableOpacity>
          </View>
        ),
      })
    );
  };

  return (
    <View style={styles.container}>
      {pickedUrl ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: pickedUrl }} style={styles.image} />
        </View>
      ) : (
        <View style={styles.containerInput}>
          <Input
            placeholder="Ingresar imagen (opcional)"
            label="Imagen"
            value={valueImage}
            placeholderTextColor={colors.gray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChangeTextImage}
          />
          <TouchableOpacity onPress={modalValue}>
            <Ionicons name="camera" size={30} color={colors.dark} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ImageSelector;
