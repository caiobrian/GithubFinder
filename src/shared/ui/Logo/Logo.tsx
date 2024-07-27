import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

type LogoProps = {
  size?: number;
  onPress: () => void;
};

export const Logo = ({ size = 50, onPress }: LogoProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image
        width={size}
        height={size}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4',
        }}
        className="rounded-full"
      />
    </TouchableWithoutFeedback>
  );
};
