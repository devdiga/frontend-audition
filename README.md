# Teste desenvolvedor front-end DIGA #

### Introdução ###

![preview](./preview.png)
(resolução: 1366x768px)

O projeto consiste em uma biblioteca de fotos, com uma única página para a exibição dos dados.

A partir do código existente, o candidato deverá implementar as funcionalidades propostas, abrindo um pull request no 
repositório de código contendo os código-fontes e o arquivo README.md contendo instruções de como rodar o projeto e 
quaisquer outras observações que julgar necessário.

### Estrutura: ###

O projeto foi desenvolvido utilizando os frameworks Vue-js v3.x e Vuetify 3.

Gerenciador de pacotes: [Yarn](https://yarnpkg.com/)

Ferramenta de build: [Vite](https://vitejs.dev/)

### API: ###

Os dados são fornecidos pela API de fotos do [JSON Placeholder](https://jsonplaceholder.typicode.com/).

Formato do retorno:

```
"albumId": 1,
"id": 1,
"title": "accusamus beatae ad facilis cum similique qui sunt",
"url": "https://via.placeholder.com/600/92c952",
"thumbnailUrl": "https://via.placeholder.com/150/92c952"
```

### Instruções: ###

1) Faça um fork do repositório;

2) Clone o repositório para a sua máquina local;

3) Instale o Yarn (caso não esteja instalado);

4) Rode `yarn install` pelo prompt de comando na pasta do projeto;

5) Abra um pull request para entregar o teste.

### O que deve ser feito: ###

**1) Use a criatividade para carregar mais fotos:**

Atualmente são exibidas apenas 20 das 5000 retornadas pela API.

**2) Implemente a busca:**

Ao digitar no campo de busca, as fotos devem ser filtradas conforme o seu título.

**3) Desenvolva a visualização por lista:**

A página deve possibilitar a exibição por lista, onde as fotos serão dispostas uma em baixo da outra.

Na visualização por lista, o thumbnail da imagem deve ser exibido ao invés da imagem original e ID de cada foto também 
deve ser apresentado.

A mudança de visualização é definido nos ícones ao lado do campo de busca.

### O que pode ser feito: ###

**1) Acabamento:**

Quaisquer melhorias funcionais e visuais que melhorem a experiência do usuário na página são bem-vindas.

**2) Estrutura do projeto:**

Realizar melhorias na estrutura do projeto.

**3) Frameworks e outras metodologias:**

Caso sinta a necessidade de usar Vue-js v2.x, o mesmo pode ser usado.

Caso queira usar TypeScript, será ponto a mais.

Também é recomendado usar ferramentas de análise de código, indicamos o uso de organização e padronização com ESLint.

### O que vamos avaliar: ###

1) Correta implementação das funcionalidades;

2) Legibilidade, simplicidade e manutenibilidade do código;

3) Histórico de commits.

4) Melhor uso dos frameworks
