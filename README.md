# Teste Front-End - Página de Busca com Inteligência Artificial

### Screenshots

| Home                                         | Busca com IA                                 | Lista de Tarefas                             |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| ![Screenshot](https://imgur.com/FlnxHSb.png) | ![Screenshot](https://imgur.com/of53urG.png) | ![Screenshot](https://imgur.com/YRc4wgf.png) |

---

### Demonstração

Visualize a aplicação:
[https://challenge-ai-search.vercel.app/](https://challenge-ai-search.vercel.app/)

---

### Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Dirosaki/ai-search.git
```

Entre no diretório do projeto

```bash
  cd ai-search
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

---

### Variáveis de ambiente

```
OPENAI_API_KEY=
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

### Tecnologias e serviços utilizados

**Princípais:** `ReactJS`, `NextJS`, `Typescript`, `Zustand`, `Zod`, `TailwindCSS`, `ShadCn`, `Motion`, `Vercel`, `AI SDK` e `Axios`.

**Outras:** `Eslint`, `Prettier`, `Husky` e `Lint-Staged`.

<details>
<summary>Por que as escolhi?</summary>

- `Zustand`: Ele é bem leve e bem performático, nessa aplicação lidei com poucos estados, utilizei ele mais para gerenciar as tarefas do usuário e os modais.

- `Motion`: Queria animar algumas coisas, então acabei utilizando essa biblioteca muito famosa, anteriormente conhecida como **Framer Motion**.

- `tailwindCSS`: Quando se fala de produtividade acho que esta biblioteca se sobressai muito em relação ao `styled-components`, apesar de ter mais experiência com styled-components, estou optando por tailwindCSS em todos os projetos novos.

- `ShadCn`: Para economizar tempo com designer, criei um wireframe e o segui com essa biblioteca de componentes ui.

- `react-router-dom`: Quando se fala de roteamento definitivamente essa é a biblioteca mais utilizada e com maior comunidade, além de me sentir totalmente confortável com ela.

</details>

---

### Referências

- [ChatGPT](https://chat.openai.com/) - Utilizei o ChatGPT para me auxiliar na criação do prompt para as sugestões da busca, para pegar a **OPEN_API_KEY** e resolver um problema com as tokens, como não tinha saldo e já tinha acabado os 5$ que as contas gratuitas possuem, tive que colocar mais 5$ para conseguir resolver o problema.
- [AI SDK](https://sdk.vercel.ai/docs) - Como foi a primeira vez que utilizei algo com IA, utilizei a documentação para entender mais sobre a AI SDK e seus Providers e suas funções.

---

### Observações

- Gostei bastante de trabalhar com IA e a AI SDK da Vercel.
- Sobre o CRUD, acabei não seguindo conforme o requisitado.
- Por conta do fim de ano, não tive tempo de implementar coisas que gostaria, como:
  > "Testes", "Docker Compose", "React Query", "Prisma com Postgres", "Validações em caso de erro", "Avisos de erro na API", "Code Splitting (Tenho um post apenas sobre isso em minhas redes)".
