
import React, {useContext} from 'react';
import {Picker, StyleSheet} from 'react-native';
import DeviceContext from '../components/DeviceContext';
import ColorContext from '../components/ColorContext';
// import {dropdown} from '../../theme.json';
/**
 * A component to diplay a dropdown and select a device.
 * It will add the selected device to the device context.
 */
const SelectDevice = () => {
  const {primaryColor} = useContext(ColorContext);
  const {selectedCam, setSelectedCam, selectedMic, setSelectedMic, deviceList} =
    useContext(DeviceContext);

  return (
    <>
      <Picker
        selectedValue={selectedCam}
        style={[{borderColor: primaryColor}, style.popupPicker]}
        onValueChange={(itemValue) => setSelectedCam(itemValue)}>
        {deviceList.map((device: any) => {
          if (device.kind === 'videoinput') {
            return (
              <Picker.Item
                label={device.label}
                value={device.deviceId}
                key={device.deviceId}
              />
            );
          }
        })}
      </Picker>
      <Picker
        selectedValue={selectedMic}
        style={[{borderColor: primaryColor}, style.popupPicker]}
        onValueChange={(itemValue) => setSelectedMic(itemValue)}>
        {deviceList.map((device: any) => {
          if (device.kind === 'audioinput') {
            return (
              <Picker.Item
                label={device.label}
                value={device.deviceId}
                key={device.deviceId}
              />
            );
          }
        })}
      </Picker>
    </>
  );
};

const style = StyleSheet.create({
  popupPicker: {
    height: 30,
    marginBottom: 10,
    borderRadius: 50,
    paddingHorizontal: 15,
    fontSize: 15,
    minHeight: 35,
  },
});

export default SelectDevice;
