import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { useGithubContext } from '../../hooks/useGithubContext';

export const UserData = () => {
  const { user } = useGithubContext();

  return (
    <View className="px-8 py-4 bg-gray-900 h-full">
      <View>
        <View className="flex-row gap-6">
          <Image
            className="w-24 h-24 rounded-full border border-gray-400"
            source={{ uri: user.avatar_url }}
          />
          <View className="flex-1 gap-1">
            <Text className="text-2xl font-bold text-white">{user.name}</Text>
            <Text className="text-gray-300">{user.bio}</Text>
            <Text className="text-gray-300">{user.email ?? ''}</Text>
          </View>
        </View>
        <View className="flex flex-row mt-6 gap-4">
          <View className="bg-teal-700 rounded-xl p-4">
            <Text className="text-center text-white font-bold">
              {user.followers}
            </Text>
            <Text className="text-white">Seguidores</Text>
          </View>
          <View className="bg-teal-700 rounded-xl p-4">
            <Text className="text-center text-white font-bold">
              {user.public_repos}
            </Text>
            <Text className="text-white">Repositórios</Text>
          </View>
        </View>
        <View className="mt-6 mb-2">
          <Text className="text-xl font-bold mb-2 text-white">
            Repositórios
          </Text>
          <ScrollView className="h-3/5">
            {user.repos?.map(repo => (
              <View
                className="border-b-[1px] border-gray-400 py-4"
                key={repo.id}>
                <View className="flex flex-row justify-between">
                  <Text className="text-lg font-bold text-sky-500">
                    {repo.name}
                  </Text>
                  <Text className="text-gray-300 font-bold">
                    {!!repo.stargazers_count && `⭐ ${repo.stargazers_count}`}
                  </Text>
                </View>
                <Text className="mt-1 text-gray-300">{repo.full_name}</Text>
                <Text className="mt-1 text-gray-300">{repo.html_url}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
