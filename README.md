# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🏋️ GymFlow

Sistema web para **visualização e gerenciamento da ocupação de academias**, desenvolvido como projeto acadêmico para o **PJI240 – Projeto Integrador em Computação II**.

O GymFlow tem como objetivo fornecer uma solução simples para registrar a entrada e saída de usuários de uma academia e permitir a visualização da **ocupação atual do ambiente**, servindo como base para futuras funcionalidades de gestão, análise e acompanhamento de fluxo.

---

## 📌 Sobre o Projeto

O **GymFlow** é uma aplicação web desenvolvida utilizando uma arquitetura separada entre **frontend** e **backend**.

A aplicação permite trabalhar com usuários, check-ins e check-outs, mantendo os dados em um banco de dados e disponibilizando informações por meio de uma API REST.

### Objetivo principal

Desenvolver uma aplicação web capaz de:

* Cadastrar usuários;
* Gerenciar usuários;
* Registrar check-in;
* Registrar check-out;
* Identificar usuários atualmente presentes;
* Calcular/visualizar a ocupação atual da academia;
* Disponibilizar os dados por meio de uma API;
* Possibilitar uma interface web para interação com o sistema;
* Aplicar conceitos de desenvolvimento web, banco de dados, APIs, versionamento, testes e organização de software.

---

# 🎓 Contexto Acadêmico

**Disciplina:** PJI240 – Projeto Integrador em Computação II

**Carga horária:** 80 horas

O projeto foi desenvolvido seguindo os requisitos acadêmicos da disciplina, envolvendo:

* Desenvolvimento de software;
* Framework web;
* Banco de dados;
* JavaScript;
* API;
* Acessibilidade;
* Versionamento de código;
* Testes;
* Organização e documentação do projeto.

O GitHub é utilizado como repositório central para versionamento e colaboração entre os integrantes da equipe.

---

# 🏗️ Arquitetura

O projeto utiliza uma arquitetura dividida em duas aplicações principais:

```text
                    ┌─────────────────────┐
                    │       USUÁRIO       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      FRONTEND       │
                    │       React         │
                    │        Vite         │
                    └──────────┬──────────┘
                               │
                          HTTP / REST
                               │
                               ▼
                    ┌─────────────────────┐
                    │       BACKEND       │
                    │       FastAPI       │
                    │      Python         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      DATABASE       │
                    │       SQLite        │
                    └─────────────────────┘
```

---

# 🧰 Tecnologias Utilizadas

## Backend

| Tecnologia       | Utilização                               |
| ---------------- | ---------------------------------------- |
| Python           | Linguagem principal do backend           |
| FastAPI          | Framework para construção da API         |
| Uvicorn          | Servidor ASGI para execução da aplicação |
| SQLAlchemy       | ORM para comunicação com o banco         |
| SQLite           | Banco de dados utilizado atualmente      |
| Pydantic         | Validação e serialização de dados        |
| JWT              | Autenticação baseada em tokens           |
| Passlib / bcrypt | Hash e segurança de senhas               |
| Python Multipart | Suporte a envio/formulários              |

### Versão do Python

```text
Python 3.14.3
```

> O projeto foi desenvolvido e testado utilizando Python 3.14.3.

---

# 💻 Frontend

| Tecnologia        | Utilização                              |
| ----------------- | --------------------------------------- |
| JavaScript        | Linguagem principal                     |
| React             | Biblioteca para construção da interface |
| Vite              | Ferramenta de build e desenvolvimento   |
| Axios             | Comunicação HTTP com a API              |
| CSS / CSS Modules | Estilização da aplicação                |

O frontend é executado durante o desenvolvimento utilizando o servidor do Vite.

```text
http://localhost:5173
```

---

# 🗄️ Banco de Dados

O GymFlow utiliza atualmente:

```text
SQLite
```

O banco é armazenado localmente no backend:

```text
backend/gymflow.db
```

A comunicação com o banco é realizada utilizando:

```text
SQLAlchemy
```

A escolha do SQLite neste momento está relacionada à simplicidade de configuração para o projeto acadêmico e desenvolvimento local.

---

# 🔐 Autenticação

O sistema possui estrutura de autenticação utilizando:

```text
JWT
```

O fluxo de autenticação segue o conceito:

```text
Usuário
   │
   ▼
Login
   │
   ▼
Backend
   │
   ▼
Validação das credenciais
   │
   ▼
JWT Token
   │
   ▼
Frontend
   │
   ▼
Requisições autenticadas
```

As senhas não devem ser armazenadas em texto puro.

O projeto utiliza mecanismos de hash para armazenamento seguro das credenciais.

---

# 🔌 API

O backend é desenvolvido utilizando **FastAPI**.

Durante o desenvolvimento, a API é executada em:

```text
http://127.0.0.1:8000
```

A documentação automática do FastAPI está disponível em:

```text
http://127.0.0.1:8000/docs
```

A especificação OpenAPI está disponível em:

```text
http://127.0.0.1:8000/openapi.json
```

A documentação Swagger pode ser utilizada pelos integrantes da equipe para testar os endpoints sem precisar utilizar o frontend.

---

# 📚 Principais recursos da API

O projeto possui recursos relacionados a:

### Usuários

* Cadastro;
* Consulta;
* Atualização;
* Exclusão;
* Autenticação.

### Check-in

Registro da entrada de um usuário na academia.

### Check-out

Registro da saída de um usuário.

### Ocupação

A partir dos registros de entrada e saída, o sistema consegue identificar os usuários que estão atualmente dentro da academia e calcular a ocupação atual.

---

# 📁 Estrutura do Projeto

O repositório está dividido em duas aplicações:

```text
gymflow/
│
├── backend/
│   │
│   ├── app/
│   │   ├── core/
│   │   │   └── database.py
│   │   │
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   └── checkin.py
│   │   │
│   │   ├── routers/
│   │   │   ├── auth.py
│   │   │   └── ...
│   │   │
│   │   └── main.py
│   │
│   ├── gymflow.db
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── contexts/
│   │   └── ...
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── .gitignore
└── README.md
```

> A estrutura pode evoluir durante as próximas Sprints. O README deve ser atualizado sempre que houver mudanças estruturais relevantes.

---

# ⚙️ Pré-requisitos

Para trabalhar no projeto, é necessário instalar:

* Git;
* Python 3.14.3;
* Node.js;
* npm;
* Editor de código, preferencialmente VS Code.

Recomenda-se utilizar:

```text
Git Bash
```

para os comandos Git e execução dos comandos utilizados no desenvolvimento.

---

# 📥 Clonando o Projeto

Primeiro, clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre no diretório:

```bash
cd gymflow
```

O projeto possui dois ambientes independentes:

```text
backend/
frontend/
```

---

# 🐍 Configurando o Backend

Entre na pasta:

```bash
cd backend
```

Crie um ambiente virtual:

```bash
python -m venv .venv
```

Ative o ambiente virtual no Git Bash:

```bash
source .venv/Scripts/activate
```

No Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Depois, instale as dependências:

```bash
pip install -r requirements.txt
```

---

# ▶️ Executando o Backend

Com o ambiente virtual ativado:

```bash
uvicorn app.main:app --reload
```

A API ficará disponível em:

```text
http://127.0.0.1:8000
```

Documentação:

```text
http://127.0.0.1:8000/docs
```

OpenAPI:

```text
http://127.0.0.1:8000/openapi.json
```

---

# ⚛️ Configurando o Frontend

Abra outro terminal.

Entre na pasta:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando o Frontend

Execute:

```bash
npm run dev
```

O Vite disponibilizará a aplicação normalmente em:

```text
http://localhost:5173
```

---

# 🔄 Executando o Projeto Completo

Para trabalhar no GymFlow, é necessário manter os dois servidores ativos.

### Terminal 1 — Backend

```bash
cd gymflow/backend
source .venv/Scripts/activate
uvicorn app.main:app --reload
```

### Terminal 2 — Frontend

```bash
cd gymflow/frontend
npm run dev
```

Depois, acessar:

```text
http://localhost:5173
```

---

# 🔗 Comunicação Frontend → Backend

O frontend realiza requisições HTTP para a API do FastAPI.

Fluxo:

```text
React
  │
  │ Axios
  ▼
FastAPI
  │
  ▼
SQLAlchemy
  │
  ▼
SQLite
```

Durante o desenvolvimento local, o backend utiliza:

```text
http://127.0.0.1:8000
```

e o frontend:

```text
http://localhost:5173
```

O backend possui configuração de CORS para permitir a comunicação com o frontend durante o desenvolvimento.

---

# 🌿 Git e GitHub

O projeto utiliza Git para controle de versão.

A estratégia utilizada durante o desenvolvimento inclui branches específicas para funcionalidades.

Exemplos utilizados no projeto:

```text
develop
feature/checkin
feature/frontend
```

---

# 📌 Estratégia de Branches

A ideia é evitar desenvolver diretamente na branch principal.

Fluxo recomendado:

```text
develop
   │
   ├── feature/nova-funcionalidade
   │
   ├── feature/correcao
   │
   └── feature/frontend
```

Depois que a funcionalidade estiver concluída:

```text
feature
   │
   ▼
Pull Request
   │
   ▼
Revisão
   │
   ▼
develop
```

---

# 🧑‍💻 Fluxo para novos colaboradores

Depois de clonar o projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd gymflow
```

Atualize as referências:

```bash
git fetch --all
```

Entre na branch de desenvolvimento:

```bash
git checkout develop
```

Atualize:

```bash
git pull origin develop
```

Crie uma branch para sua tarefa:

```bash
git checkout -b feature/nome-da-funcionalidade
```

Após desenvolver:

```bash
git status
```

Adicione os arquivos:

```bash
git add .
```

Faça o commit:

```bash
git commit -m "feat: descrição da alteração"
```

Envie a branch:

```bash
git push origin feature/nome-da-funcionalidade
```

Depois, abra um Pull Request para `develop`.

---

# 📝 Convenção de Commits

Recomenda-se utilizar mensagens de commit organizadas.

Exemplos:

```text
feat: adiciona tela de usuários
```

```text
fix: corrige validação do login
```

```text
refactor: reorganiza componentes do frontend
```

```text
docs: atualiza README
```

```text
test: adiciona testes para usuários
```

---

# 🚫 Arquivos que NÃO devem ser enviados ao Git

Arquivos gerados localmente não devem ser versionados.

Entre eles:

```text
.venv/
__pycache__/
*.pyc
node_modules/
.env
*.db
```

O arquivo `.gitignore` deve impedir que esses arquivos sejam enviados acidentalmente para o repositório.

---

# 🔑 Variáveis de Ambiente

Informações sensíveis nunca devem ser armazenadas diretamente no código.

Caso sejam necessárias variáveis de ambiente, utilizar:

```text
.env
```

Exemplo:

```env
SECRET_KEY=chave-local
DATABASE_URL=sqlite:///./gymflow.db
```

O arquivo `.env` não deve ser enviado ao GitHub.

Deve ser disponibilizado um arquivo de referência:

```text
.env.example
```

Exemplo:

```env
SECRET_KEY=
DATABASE_URL=
```

---

# 🧪 Testes

Os testes fazem parte dos requisitos do projeto.

A estratégia de testes deve contemplar, progressivamente:

* Testes dos endpoints;
* Testes de autenticação;
* Testes de cadastro de usuários;
* Testes de check-in;
* Testes de check-out;
* Testes da regra de ocupação;
* Testes de integração entre frontend e backend;
* Testes de interface quando aplicável.

---

# 📊 Regra principal de ocupação

A ocupação atual da academia é baseada na relação entre entrada e saída dos usuários.

Conceitualmente:

```text
Check-in registrado
        │
        ▼
Usuário presente
        │
        │
        ├──── Check-out ────► Usuário não está mais presente
        │
        ▼
Ocupação atual
```

A aplicação deve considerar como ocupados os usuários que realizaram check-in e ainda não possuem um check-out correspondente.

---

# 🎯 Funcionalidades

## Implementadas

O projeto já possui a base funcional para:

* [x] Estrutura inicial do backend;
* [x] Estrutura inicial do frontend;
* [x] API FastAPI;
* [x] Banco SQLite;
* [x] SQLAlchemy;
* [x] Modelo de usuário;
* [x] Modelo de check-in;
* [x] Cadastro/gerenciamento de usuários;
* [x] Autenticação;
* [x] JWT;
* [x] Interface React;
* [x] Comunicação frontend/backend;
* [x] Estrutura de componentes;
* [x] Modal de usuários;
* [x] Controle de versão com Git;
* [x] Organização por branches;
* [x] Documentação automática da API.

## Em evolução

* [ ] Aprimoramento do fluxo de check-in;
* [ ] Aprimoramento do fluxo de check-out;
* [ ] Dashboard de ocupação;
* [ ] Indicadores de ocupação;
* [ ] Melhorias de UX/UI;
* [ ] Testes automatizados;
* [ ] Melhorias de acessibilidade;
* [ ] Refinamentos de segurança;
* [ ] Melhorias de documentação.

---

# 🏃 Sprints

O desenvolvimento está organizado em Sprints.

Até o momento, o projeto chegou ao:

```text
Sprint 4.3
```

O próximo ponto de planejamento é:

```text
Sprint 4.4
```

### Checkpoint atual

```text
✅ Sprint 4.3 concluída
➡️ Próximo passo: planejamento da Sprint 4.4
```

As próximas alterações devem respeitar o estado atual do projeto para evitar retrabalho ou quebra das funcionalidades já implementadas.

---

# 🛠️ Ferramentas de Desenvolvimento

As principais ferramentas utilizadas no projeto são:

| Ferramenta         | Finalidade                     |
| ------------------ | ------------------------------ |
| Visual Studio Code | Desenvolvimento                |
| Git                | Controle de versão             |
| GitHub             | Repositório e colaboração      |
| Git Bash           | Terminal e comandos Git        |
| Python             | Backend                        |
| FastAPI            | API                            |
| Uvicorn            | Servidor                       |
| React              | Frontend                       |
| Vite               | Desenvolvimento/build frontend |
| npm                | Gerenciamento de dependências  |
| SQLite             | Banco de dados                 |
| SQLAlchemy         | ORM                            |
| Swagger/OpenAPI    | Testes e documentação da API   |

---

# 📦 Dependências do Backend

As dependências do backend são controladas pelo arquivo:

```text
backend/requirements.txt
```

A instalação deve ser feita com:

```bash
pip install -r requirements.txt
```

O arquivo `requirements.txt` é a referência oficial das dependências Python do projeto.

---

# 📦 Dependências do Frontend

As dependências do frontend são controladas pelo:

```text
frontend/package.json
```

Para instalar:

```bash
npm install
```

Para executar:

```bash
npm run dev
```

---

# 🧭 Organização do Desenvolvimento

O projeto utiliza uma abordagem incremental.

Cada Sprint deve seguir, preferencialmente, o fluxo:

```text
Planejamento
     │
     ▼
Desenvolvimento
     │
     ▼
Testes
     │
     ▼
Validação
     │
     ▼
Pull Request
     │
     ▼
Merge
     │
     ▼
Próxima Sprint
```

---

# 🤝 Contribuindo

Para contribuir:

1. Clone o repositório;
2. Configure o backend;
3. Configure o frontend;
4. Execute o projeto;
5. Atualize sua branch;
6. Crie uma branch de funcionalidade;
7. Desenvolva sua tarefa;
8. Teste;
9. Faça commit;
10. Envie a branch;
11. Abra um Pull Request;
12. Aguarde a revisão.

### Não desenvolver diretamente em `develop`

Sempre que possível, utilize uma branch específica para sua tarefa.

Exemplo:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/dashboard-ocupacao
```

---

# 🐛 Reportando problemas

Ao encontrar um problema, procure informar:

```text
Título:
Descrição:
Passos para reproduzir:
Resultado esperado:
Resultado obtido:
Ambiente:
Backend/Frontend:
Mensagem de erro:
```

Exemplo:

```text
Título:
Erro ao realizar check-in

Descrição:
Usuário não consegue realizar check-in.

Passos:
1. Fazer login;
2. Acessar usuários;
3. Selecionar usuário;
4. Clicar em check-in.

Resultado esperado:
Check-in registrado.

Resultado obtido:
Erro HTTP 500.

Ambiente:
Windows / Python 3.14.3 / Backend local
```

---

# 🔒 Segurança

Nunca publicar no GitHub:

* Senhas;
* Tokens;
* Chaves secretas;
* Credenciais;
* Arquivos `.env`;
* Dados pessoais reais;
* Informações de acesso a serviços externos.

Para desenvolvimento, utilizar dados fictícios sempre que possível.

---

# 📈 Evolução futura

O GymFlow foi estruturado de forma que novas funcionalidades possam ser adicionadas posteriormente.

Possíveis evoluções:

```text
                    GymFlow
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
   Usuários        Ocupação          Dashboard
       │               │                │
       ▼               ▼                ▼
  Check-in        Indicadores       Relatórios
  Check-out       Histórico         Analytics
       │               │                │
       └───────────────┼────────────────┘
                       ▼
                 Gestão da Academia
```

Entre as possibilidades futuras estão:

* Dashboard em tempo real;
* Histórico de ocupação;
* Gráficos;
* Horários de maior movimento;
* Limite de capacidade;
* Alertas de lotação;
* Relatórios;
* Perfis e permissões;
* Integração com outros sistemas;
* Banco de dados em ambiente de produção;
* Deploy em nuvem.

---

# 🧑‍🤝‍🧑 Trabalho em Equipe

O GymFlow é um projeto colaborativo.

Para manter o projeto organizado, todos os integrantes devem:

* Manter suas branches atualizadas;
* Evitar alterações desnecessárias;
* Não sobrescrever código de outros integrantes;
* Criar commits objetivos;
* Testar antes de abrir Pull Request;
* Documentar alterações relevantes;
* Respeitar a arquitetura existente;
* Comunicar alterações estruturais;
* Revisar Pull Requests dos colegas.

---

# 📋 Checklist para novo colaborador

* [ ] Instalar Git;
* [ ] Instalar Python 3.14.3;
* [ ] Instalar Node.js;
* [ ] Clonar o repositório;
* [ ] Configurar ambiente virtual Python;
* [ ] Instalar `requirements.txt`;
* [ ] Instalar dependências do frontend;
* [ ] Executar backend;
* [ ] Executar frontend;
* [ ] Acessar aplicação;
* [ ] Acessar `/docs`;
* [ ] Confirmar comunicação frontend/backend;
* [ ] Atualizar branch `develop`;
* [ ] Criar branch própria;
* [ ] Fazer primeira alteração;
* [ ] Testar;
* [ ] Criar commit;
* [ ] Enviar branch;
* [ ] Abrir Pull Request.

---

# 🚀 Quick Start

Para quem já possui Git, Python, Node.js e npm instalados:

```bash
git clone <URL_DO_REPOSITORIO>
cd gymflow
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Acesse:

```text
http://localhost:5173
```

API:

```text
http://127.0.0.1:8000
```

Swagger:

```text
http://127.0.0.1:8000/docs
```

---

# 📌 Estado atual do projeto

```text
Projeto: GymFlow
Disciplina: PJI240 – Projeto Integrador em Computação II
Carga horária: 80h

Backend: FastAPI + Python
Frontend: React + Vite
Banco: SQLite
ORM: SQLAlchemy
API: REST
Autenticação: JWT
Versionamento: Git + GitHub

Python: 3.14.3
Backend: porta 8000
Frontend: porta 5173

Status:
Sprint 4.3 concluída
Próximo passo: Sprint 4.4
```

---

# 👥 Projeto Acadêmico

**GymFlow**
Projeto Integrador em Computação II — PJI240

Desenvolvido para fins acadêmicos, com foco em desenvolvimento web, APIs, banco de dados, versionamento, testes, acessibilidade e trabalho colaborativo.

---

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais.

Caso o projeto seja posteriormente publicado ou distribuído fora do ambiente acadêmico, a licença deverá ser definida pelos integrantes responsáveis pelo repositório.
