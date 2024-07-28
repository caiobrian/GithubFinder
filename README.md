# Github Finder

Este projeto foi desenvolvido utilizando a CLI de React-Native e utiliza NativeWind como biblioteca de estilização.

Além disso, utiliza a API do Github para buscar usuários e repositórios.

## Requisitos

- [Node.js](https://nodejs.org/en/download/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio)
- [Xcode](https://developer.apple.com/xcode/)
- [Cocoapods](https://cocoapods.org/)

## Instalação

Para Android, seguir as instruções do [React Native Set Up Your Environment (Android)](https://reactnative.dev/docs/set-up-your-environment?platform=android).
Para iOS, seguir as instruções do [React Native Set Up Your Environment (iOS)](https://reactnative.dev/docs/set-up-your-environment?platform=ios).

Após configurar o ambiente, clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/caiobrian/GithubFinder.git
cd GithubFinder
```

Para instalar as dependências do projeto, execute o comando:

```bash
npm install
```

Em seguida é necessário atualizar as dependências do iOS:

```bash
cd ios
pod install
```

## Execução

Para a busca de usuários, é necessário uma chave de acesso à API do Github.
Crie um arquivo `.env` na raiz do projeto com sua chave de acesso:

```env
GITHUB_API_TOKEN=your_token_here
```

Para conseguir sua chave de acesso, acesse o [Github Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) e siga as instruções.


### Para executar o projeto, execute o comando:

```bash
npm start
```

## Funcionalidades

- Busca de usuários do Github
- Visualização de detalhes do usuário
- Visualização de repositórios do usuário