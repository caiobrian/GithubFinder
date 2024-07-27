import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

interface TouchableWithLoadingProps
  extends React.ComponentProps<typeof TouchableOpacity> {
  isLoading: boolean;
  variant?: 'default' | 'collapsed';
}

const variants = {
  default: 'mt-4 p-4',
  collapsed: 'absolute top-[4px] right-[4px] px-4 py-2',
};

export const TouchableWithLoading = ({
  isLoading,
  variant = 'default',
  ...props
}: TouchableWithLoadingProps) => {
  return (
    <TouchableOpacity
      className={`bg-blue-700 flex items-center rounded-full ${variants[variant]}`}
      onPress={props.onPress}
      {...props}>
      {isLoading ? (
        <ActivityIndicator color="white" size="small" className="h-7" />
      ) : (
        <Text className="color-white text-xl font-extrabold">Buscar</Text>
      )}
    </TouchableOpacity>
  );
};
