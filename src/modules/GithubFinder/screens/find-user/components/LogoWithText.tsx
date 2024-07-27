import React from 'react';
import { Logo } from '@app/shared/ui';
import { Text, View } from 'react-native';

export const LogoWithText = ({ onPress }: { onPress: () => void }) => (
  <View className="flex items-center">
    <Logo onPress={onPress} size={80} />
    <Text className="text-4xl font-bold text-center p-4 text-white">
      Github Finder
    </Text>
    <Text className="text-md color-gray-300 my-2">
      Busque pelo nome de usuário
    </Text>
  </View>
);
