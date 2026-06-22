## App Aluno

O desenvolvimento da interface será realizado de forma gradual, iniciando com HTML e CSS puros, avançando para a implementação de responsividade e funcionalidades em JavaScript, e posteriormente reutilizando essa estrutura como base para o desenvolvimento em React.
## O que já existe

O repositório já possui a estrutura inicial do projeto React configurada.

Além disso, foram definidos os componentes e páginas que servirão de base para o desenvolvimento da aplicação.

## Próxima atividade

Desenvolver as principais telas do sistema:

* Dashboard
* Perfil
* TutorIA acessíveis e navegáveis como SPA;
*menu com indicação da rota ativa;
*redirecionamento após o login.



## Objetivos da prática

* criar componentes reutilizáveis em React
* organizar o projeto em páginas e componentes
* trabalhar com propriedades (props)
* utilizar estados (useState)
* implementar navegação entre páginas
* criar layouts responsivos

## Como usar este projeto

### Instalar dependências

```bash
cd meu-painel react-react
```
```bash
npm install
```

### Executar em modo de desenvolvimento

```bash
npm run dev
```

ou

```bash
npm start
```

(dependendo da ferramenta utilizada no projeto)

### Gerar versão de produção

```bash
npm run build
```


## Estrutura atual

```text
.
├── public/
├── src/
│   ├── components/
│   │   └── Header.jsx
│   │
│   ├── contexts/
│   │   └── UserContext.jsx
│   │
│   ├── pages/
│   │   ├── Alunos.jsx
│   │   ├── CadastroPasso1.jsx
│   │   ├── CadastroPasso2.jsx
│   │   ├── dashboard.jsx
│   │   ├── Disciplinas.jsx
│   │   ├── LoginPage.jsx
│   │   ├── MeuPerfil.jsx
│   │   ├── NovaSenha.jsx
│   │   ├── RecuperarSenha.jsx
│   │   └── TutorIA.jsx
│   │
│   ├── styles/
│   │   ├── mobile.css
│   │   └── styles.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## Etapas sugeridas para os alunos

## Etapa 1 - Estrutura

* criar os componentes principais
* organizar as páginas do sistema
* definir a estrutura de pastas

## Etapa 2 - Interface

* desenvolver os layouts das telas
* aplicar estilização com CSS
* criar componentes reutilizáveis

## Etapa 3 - Navegação

* configurar React Router
* criar rotas entre páginas
* implementar menus e navegação

## Etapa 4 - Estados e Interações

* utilizar useState
* manipular formulários
* exibir dados dinamicamente

## Etapa 5 - Integração

* consumir APIs
* realizar operações de cadastro e consulta
* tratar respostas e erros



## final

Projeto acadêmico desenvolvido para fins de aprendizagem em React e desenvolvimento frontend.
