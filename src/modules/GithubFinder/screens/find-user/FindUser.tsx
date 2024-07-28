import React, { useState } from 'react';
import { View } from 'react-native';

import { RequestStatus } from '@app/shared/models';
import { Logo, SearchInput, TouchableWithLoading } from '@app/shared/ui';

import { LogoWithText } from './components';
import { useGithubContext } from '../../hooks/useGithubContext';

export const FindUser = () => {
  const { user, status, onSearchUser, onClearUser, errorMessage } =
    useGithubContext();
  const [username, setUsername] = useState('');
  const [_error, _setError] = useState('');

  const collapse = !!user.id;
  const isSearching = status === RequestStatus.LOADING;

  const handleSearch = () => {
    if (isSearching) {
      return;
    }

    if (!username) {
      return _setError('É necessário informar o nome de usuário');
    }
    onSearchUser(username);
  };

  const onChangeText = (text: string) => {
    setUsername(text);
    _setError('');
  };

  const handleClearUser = () => {
    setUsername('');
    _setError('');
    onClearUser();
  };

  return (
    <View
      className={`bg-gray-900 border-b-[1px] border-gray-600 ${
        !collapse && 'py-48 px-8 h-full border-b-0'
      }`}>
      <View className="gap-1">
        {!collapse && <LogoWithText onPress={handleClearUser} />}
        <View className={`${collapse && 'flex flex-row gap-2 px-4 pt-4 pb-1'}`}>
          {collapse && <Logo onPress={handleClearUser} />}
          <View className={`${collapse && 'flex-1 relative'}`}>
            <SearchInput
              value={username}
              onChangeText={onChangeText}
              error={_error || errorMessage}
              placeholder="Buscar usuário"
            />
            <TouchableWithLoading
              isLoading={isSearching}
              onPress={handleSearch}
              cn={
                collapse
                  ? 'absolute top-[4px] right-[4px] px-4 py-2'
                  : 'mt-4 p-4'
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};
