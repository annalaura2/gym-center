# Gym Center - Fitness Website

<p align="center">
    <img src="./public/banner.png" alt="Banner do Gym Center" />
</p>

## Visão Geral

O **Gym Center** é uma plataforma digital que conecta usuários aos melhores planos de fitness, com foco em uma experiência de usuário intuitiva e moderna. O projeto oferece uma variedade de funcionalidades, como visualização de programas de treino, planos de preços flexíveis e depoimentos inspiradores de clientes. Foi desenvolvido com **React**, **Vite**, **TypeScript** e **Chakra UI v3** para garantir uma interface fluida e responsiva.

![Acesse o projeto!](https://gym-center-mocha.vercel.app/)


## Funcionalidades

- **Cards Interativos de Programas**: Visualize diferentes programas de fitness e detalhes específicos de cada plano.
- **Carrossel de Depoimentos**: Leia histórias de sucesso de clientes satisfeitos.
- **Alternância de Planos de Preços**: Selecione facilmente entre opções de planos mensais e anuais.
- **Seção de Newsletter**: Inscreva-se para receber dicas exclusivas de fitness.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário dinâmicas.
- **Vite**: Ferramenta moderna de desenvolvimento frontend, garantindo tempo de construção rápido.
- **TypeScript**: Superconjunto de JavaScript que fornece tipagem estática, ajudando a evitar erros.
- **Chakra UI v3**: Biblioteca de componentes que segue um sistema de design flexível.
- **Swiper.js**: Biblioteca usada para criar carrosséis de slides modernos.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** (versão 18.x ou superior)
- **npm** ou **yarn**
- **Git**

## Instalação

Para rodar o projeto localmente, siga estas etapas:

1. Clone o repositório:
   ```bash
   git clone https://github.com/annalaura2/gym-center.git
   cd gym-center
   ```

2. Instale as dependências:
   ```bash
   # usando npm
   npm install

   # ou usando yarn
   yarn install
   ```

3. Rode o projeto:
   ```bash
   # usando npm
   npm run dev

   # ou usando yarn
   yarn dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:5173
   ```

## Estrutura de Pastas

A estrutura principal do projeto é a seguinte:

```
├── public/                  # Arquivos públicos como imagens e ícones
├── src/                     # Código-fonte principal
│   ├── assets/              # Recursos estáticos (imagens, fontes, etc.)
│   ├── components/          # Componentes reutilizáveis da interface
│   ├── layout/              # Estrutura de layout (cabeçalho, rodapé, etc.)
│   ├── pages/               # Páginas específicas da aplicação
│   ├── theme/               # Configurações de tema do Chakra UI v3
│   │   ├── semantic-tokens/ # Tokens semânticos de design
│   │   └── tokens/          # Tokens de design reutilizáveis
│   ├── utils/               # Funções utilitárias
│   ├── App.tsx              # Componente raiz da aplicação
│   └── main.tsx             # Ponto de entrada do aplicativo
├── .gitignore               # Configurações de arquivos a serem ignorados pelo Git
├── index.html               # Arquivo HTML principal
├── package.json             # Gerenciamento de dependências e scripts
├── tsconfig.json            # Configurações do TypeScript
└── vercel.json              # Configuração de implantação no Vercel
```

## Contribuindo

Para contribuir com o projeto:

1. Faça um _fork_ do repositório e crie uma nova _branch_:
   ```bash
   git checkout -b minha-nova-feature
   ```

2. Faça suas modificações e adicione um _commit_:
   ```bash
   git commit -m "Adiciona nova feature"
   ```

3. Envie suas mudanças para o repositório remoto:
   ```bash
   git push origin minha-nova-feature
   ```

4. Abra um _pull request_ para análise.

## Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.


  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,ts,vite,figma" />
  </a>
