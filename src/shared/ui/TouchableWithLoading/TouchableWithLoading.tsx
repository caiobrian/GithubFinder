import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { mergeClasses } from '@app/shared/utils';

interface TouchableWithLoadingProps
  extends React.ComponentProps<typeof TouchableOpacity> {
  isLoading: boolean;
  cn?: string;
}

export const TouchableWithLoading = ({
  isLoading,
  cn,
  ...props
}: TouchableWithLoadingProps) => {
  const style = mergeClasses(
    'bg-blue-700 flex items-center rounded-full',
    cn || '',
  );

  return (
    <TouchableOpacity className={style} onPress={props.onPress} {...props}>
      {isLoading ? (
        <ActivityIndicator color="white" size="small" className="h-7" />
      ) : (
        <Text className="color-white text-xl font-extrabold">Buscar</Text>
      )}
    </TouchableOpacity>
  );
};
