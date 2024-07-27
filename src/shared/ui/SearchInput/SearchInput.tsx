import React from 'react';
import { TextInput, Text } from 'react-native';

interface SearchInputProps extends React.ComponentProps<typeof TextInput> {
  onChangeText: (text: string) => void;
  error: string;
}

export const SearchInput = ({
  onChangeText,
  error,
  ...props
}: SearchInputProps) => (
  <>
    <TextInput
      className={`
        w-full
        p-4 
        border
        text-white
        rounded-full
        ${error ? 'border-red-500' : 'border-gray-300'}
      `}
      placeholderTextColor="#C3C3C3"
      onChangeText={onChangeText}
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
    />
    <Text className="color-red-500 text-sm mt-1">{!!error && error}</Text>
  </>
);
