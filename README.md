<h1><strong>Tô Viajando</strong></h1>

<h2><strong>Descrição</strong></h2>
<p align="justify">
  Neste exercício, foi desenvolvida uma página em React para exibir informações sobre cidades por meio de componentes reutilizáveis.
  O foco é criar e organizar os componentes Header, Card e CardList dentro da pasta components.
  Também é verificada a capacidade de renderizar dados recebidos via props com tipagem correta.
</p>

<h2><strong>Tecnologias Utilizadas</strong></h2>
<ul>
  <li align="justify">
    <a href="https://react.dev/" target="_blank" rel="noreferrer noopener"><strong>React</strong></a>:
    Biblioteca para construção de interfaces com componentes reutilizáveis.
  </li>
  <li align="justify">
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopener"><strong>TypeScript</strong></a>:
    Tipagem estática para garantir props e estruturas de dados mais seguras e previsíveis.
  </li>
  <li align="justify">
    <a href="https://vitejs.dev/" target="_blank" rel="noreferrer noopener"><strong>Vite</strong></a>:
    Ferramenta de build e dev server para desenvolvimento rápido com React.
  </li>
  <li align="justify">
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noreferrer noopener"><strong>CSS</strong></a>:
    Estilização e layout da aplicação.
  </li>
</ul>

<h2><strong>Estrutura do Projeto</strong></h2>
<p align="justify">A estrutura do projeto é organizada da seguinte forma:</p>
<pre><code>/
├── images/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Card.tsx
│   │   └── CardList.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── README.md
</code></pre>

<h2><strong>Notas Adicionais</strong></h2>
<ul>
  <li align="justify">
    Componentização: <strong>Header</strong> concentra o topo da página, <strong>Card</strong> representa uma cidade, e <strong>CardList</strong> organiza e renderiza múltiplos cards.
  </li>
  <li align="justify">
    Props tipadas: os componentes recebem dados via props e utilizam <strong>interfaces/types</strong> para garantir a tipagem correta.
  </li>
  <li align="justify">
    Renderização de listas: a listagem de cidades é feita de forma declarativa, normalmente com <strong>map</strong> em um array de dados.
  </li>
  <li align="justify">
    Para rodar localmente: <code>npm install</code> e depois <code>npm run dev</code>.
  </li>
</ul>

<h2><strong>Contato</strong></h2>
<p>
  <strong>Willian Gonçalves</strong> |
  <a href="https://www.linkedin.com/in/williandpg/" target="_blank" rel="noreferrer noopener"><strong>LinkedIn</strong></a> |
  <a href="https://github.com/williandpg" target="_blank" rel="noreferrer noopener"><strong>Github</strong></a> |
  <a href="https://williandpg.github.io/" target="_blank" rel="noreferrer noopener"><strong>Portfólio</strong></a> |
  <a href="mailto:goncalves.wdp@outlook.com" target="_blank" rel="noreferrer noopener"><strong>Email</strong></a>
</p>

<h2><strong>Créditos</strong></h2>
<p align="justify">
  Este exercício foi desenvolvido como parte do curso de Desenvolvimento Web Full Stack da Trybe.
</p>

<details>
  <summary><strong>English Version</strong></summary>

  <h1><strong>Tô Viajando</strong></h1>

  <h2><strong>Description</strong></h2>
  <p align="justify">
    In this exercise, a React page was developed to display city information using reusable components.
    The goal is to create and organize Header, Card, and CardList inside the components folder.
    The exercise also checks the ability to render data received via props with proper typing.
  </p>

  <h2><strong>Technologies Used</strong></h2>
  <ul>
    <li align="justify">
      <a href="https://react.dev/" target="_blank" rel="noreferrer noopener"><strong>React</strong></a>:
      Library for building UIs with reusable components.
    </li>
    <li align="justify">
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopener"><strong>TypeScript</strong></a>:
      Static typing for safer and more predictable props and data structures.
    </li>
    <li align="justify">
      <a href="https://vitejs.dev/" target="_blank" rel="noreferrer noopener"><strong>Vite</strong></a>:
      Build tool and dev server for fast React development.
    </li>
    <li align="justify">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer noopener"><strong>CSS</strong></a>:
      Application styling and layout.
    </li>
  </ul>

  <h2><strong>Project Structure</strong></h2>
  <p align="justify">The project structure is organized as follows:</p>
  <pre><code>/
  ├── images/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Header.tsx
  │   │   ├── Card.tsx
  │   │   └── CardList.tsx
  │   ├── App.tsx
  │   └── main.tsx
  ├── index.html
  ├── vite.config.ts
  ├── tsconfig.json
  └── README.md
  </code></pre>

  <h2><strong>Additional Notes</strong></h2>
  <ul>
    <li align="justify">
      Component architecture: <strong>Header</strong> handles the page header, <strong>Card</strong> represents a city, and <strong>CardList</strong> renders and organizes multiple cards.
    </li>
    <li align="justify">
      Typed props: components receive data via props and use <strong>interfaces/types</strong> to ensure correct typing.
    </li>
    <li align="justify">
      List rendering: the city list is typically rendered using <strong>map</strong> over a data array.
    </li>
    <li align="justify">
      Local run: <code>npm install</code> then <code>npm run dev</code>.
    </li>
  </ul>

  <h2><strong>Contact</strong></h2>
  <p>
    <strong>Willian Gonçalves</strong> |
    <a href="https://www.linkedin.com/in/williandpg/" target="_blank" rel="noreferrer noopener"><strong>LinkedIn</strong></a> |
    <a href="https://github.com/williandpg" target="_blank" rel="noreferrer noopener"><strong>Github</strong></a> |
    <a href="https://williandpg.github.io/" target="_blank" rel="noreferrer noopener"><strong>Portfolio</strong></a> |
    <a href="mailto:goncalves.wdp@outlook.com" target="_blank" rel="noreferrer noopener"><strong>Email</strong></a>
  </p>

  <h2><strong>Credits</strong></h2>
  <p align="justify">
    This exercise was developed as part of the Trybe Web Development Full Stack course.
  </p>
</details>