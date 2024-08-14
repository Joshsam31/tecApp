import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import AddButtonStyles from '../styles/ButtonStyles';

interface ButtonProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ text, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[AddButtonStyles.button, style]}
      onPress={onPress}>  
      <Text style={AddButtonStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

