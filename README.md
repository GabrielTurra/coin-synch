# CoinSynch Challenge 🎈

<p>📌 O CoinSynch foi desenvolvido como um teste técnico para uma entrevista de emprego e tem como objetivo criar uma plataforma de criptomoedas. Cada usuário terá acesso as informações da sua carteira onde poderá comprar e vender cryptos.<p>

## 📐 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- [Next.JS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [NextAuth](https://next-auth.js.org/)
- [PrismaORM](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Stitches](https://stitches.dev/)
- [CoinMarketCap](https://coinmarketcap.com/api/)

## 🖌️ Layout
O design junto com o style guide foi enviado pela empresa que requisitou o teste e pode ser acessado pelo [Figma](https://www.figma.com/file/B8scopEM014WR4Oh58UaDb/%5BEduSynch%5D--Front-End-Test?node-id=0%3A1&mode=dev)

Abaixo deixo alguns prints da aplicação desenvolvida por mim:

<img src="./.github/dashboard.png">
<div align="center">
  <img width="48%" height="auto" src="./.github/landing-page.png">
  <img width="49%" height="auto" src="./.github/login.png">
</div>

## 🏷️ Guia de Instalação

## Pré-requisitos


Antes de começar, você vai precisar ter pré-instalado em sua máquina as seguintes ferramentas:
 - [Git](https://git-scm.com) 
 - [Node.js](https://nodejs.org/en/) - recomendo a versão LTS/hydrogen (18.16.0)
 - [Docker](https://docs.docker.com/get-docker/)

Além disto é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/)

## Configuração de ambiente
### 🎲 Clonando a aplicação
O primeiro passo é baixar a aplicação na sua máquina.

- Para isso dentro da pasta de destino onde você deseja baixar o projeto, digite o seguinte comando no seu terminal:
```bash
git clone https://github.com/GabrielTurra/coin-synch.git
```
### 🪙 Criar uma chave de API para consumir as criptomoedas

Todos os dados referentes a criptomoedas da aplicação foram criados utilizando a API CoinMarketCap e para rodar o projeto você antes precisa obter uma chave de acesso da mesma.

- Acesse [Coin Market Cap API](https://coinmarketcap.com/api/) e siga o passo a passo da plataforma para gerar uma chave de acesso.
- Crie um arquivo na raiz do projeto chamado `.env` e adicione sua key da seguinte forma: 

```bash
# Substitua o valor pela chave que você gerou
COIN_API_KEY="YOUR-KEY-HERE"
COIN_API_BASE_URL="https://pro-api.coinmarketcap.com"
```

#### Para facilitar esse processo, você pode utilizar como base o arquivo `.env.example` disponível aqui na raiz do projeto.

### 🐳 Subir o container no Docker

Esta aplicação possui uma configuração do `Docker Compose` que dita pro Docker o que fazer. Isso além de garantir mais consistência entre ambientes, também poupa tempo na instalação do projeto

- Para criar o banco de dados basta apenas abrir seu terminal dentro da pasta raiz do projeto e digitar o seguinte comando:

```bash
docker compose up
```

Este comando irá consumsir o arquivo `docker-compose.yml` presente na raiz do projeto e gerar a instância automaticamente baseado nas configurações disponíveis lá.

#### Agora precisamos configurar a string de conexão para a aplicação saber onde cadastrar os dados

- No seu arquivo `.env` adicione a seguinte linha:
```bash
# caso tenha mudado algo na instalação ou nas portas do seu Docker, você vai precisar configurar essa variável para o seu banco de dados local

DATABASE_URL="postgresql://docker:docker@localhost:5432/coinsynch?schema=public"
```

### 🤖 Configurando uma chave para o NextAuth JWT

O ultimo passo no seu arquivo de ambientes é adicionar um token secreto que será usado pelo NextAuth como validador dos `tokens JWT`. Essa string pode ser literalmente qualquer coisa, então chegou a hora de bater a cabeça no teclado!  

- Adicione a seguinte linha no arquivo `.env` (se quiser pode manter o valor de exemplo, isso não terá impacto na hora de rodar o projeto)
```bash
NEXTAUTH_SECRET="SOME-SECRET-JWT-KEY-HERE"
```

### 📑 Resumo

No final dessa primeira parte, seu arquivo `.env` deve ter ficado com as seguintes informações: 

```bash
COIN_API_KEY="YOUR-KEY-HERE"
COIN_API_BASE_URL="https://pro-api.coinmarketcap.com"

DATABASE_URL="postgresql://docker:docker@localhost:5432/coinsynch?schema=public"

NEXTAUTH_SECRET="SOME-SECRET-JWT-KEY-HERE"
```

## Configuração do projeto
Minha sugestão é abrir o projeto através do arquivo de workspace configurado na raiz chamado `coin-synch.code-workspace`. Nele estão contidas as informações das extensões que são interessantes para o projeto e o VSCode deve recomendar a instalação delas quando você abrir o arquivo por lá.
### ⚡Instalação das dependências
Aqui vamos seguir com o gerenciador de pacotes `npm`.
- Dentro da pasta raiz do projeto, digite o seguinte comando:
```bash
npm install
```

### 🛸 Subir as migrations do Prisma

Anteriormente subimos um container com PostgresSQL no Docker, mas esse ainda se encontra vazio e sem estrutura. Esse passo irá criar as estruturas das tabelas e relacionamentos dentro do banco de dados

- Dentro da pasta raiz do projeto, digite o seguinte comando:
```bash
npx prisma migrate dev
```

Como uma forma de visualizar esse resultado, o `Prisma` nos oferece uma interface que pode ser rodada executando o seguinte comando no terminal
```bash
npx prisma studio
```

#### Se tudo correu bem, você deve visualizar na janela que abriu no sseu navegador as 3 tabelas do projeto no banco (`Newsletters`, `Users` e `Transactions`). 


## 🏅 Rodando o projeto

Agora com todos as configurações feitas, basta entrar na raiz do projeto e digitar o comando
```bash
npm run dev
```

Se tudo correu bem, o projeto deve iniciar na sua máquina e você pode acessá-lo por um link semelhante a esse que vai aparecer no seu terminal 
```bash
ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

