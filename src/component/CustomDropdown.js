import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
];

const CustomDropdown = () => {
  const [value, setValue] = useState(null);

  return (
    <View>
      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        style={styles.Dropdown}
        renderRightIcon={() => null}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  Dropdown: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    color: '#1F2937',
    fontSize: 10,
  },
});
