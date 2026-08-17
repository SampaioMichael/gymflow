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

Sistema web para **gerenciamento e visualização da ocupação de academias**, desenvolvido como projeto acadêmico do **PJI240 – Projeto Integrador em Computação II**.

O GymFlow permite gerenciar usuários, autenticar acessos, registrar movimentações de entrada e saída e disponibilizar informações relacionadas à ocupação da academia por meio de uma aplicação web integrada a uma API REST.

---

## 🎓 Contexto Acadêmico

**Projeto:** GymFlow
**Disciplina:** PJI240 – Projeto Integrador em Computação II
**Carga horária:** 80 horas
**Finalidade:** Projeto acadêmico

O projeto foi desenvolvido com o objetivo de aplicar, de forma prática, conhecimentos relacionados a:

* Desenvolvimento de aplicações web;
* Desenvolvimento de APIs;
* Banco de dados;
* JavaScript;
* Frameworks web;
* Autenticação;
* Testes automatizados;
* Acessibilidade;
* Controle de versão;
* Trabalho colaborativo;
* Organização de software.

O desenvolvimento é realizado de forma incremental e organizado em **Sprints**.

---

# 🎯 Objetivo do GymFlow

O GymFlow foi concebido para auxiliar academias no acompanhamento de sua ocupação.

A ideia central é permitir que a aplicação registre a movimentação dos usuários e utilize essas informações para determinar quantas pessoas estão atualmente presentes na academia.

### Objetivos principais

* Cadastrar e gerenciar usuários;
* Permitir autenticação no sistema;
* Registrar check-ins;
* Registrar check-outs;
* Identificar usuários atualmente presentes;
* Calcular a ocupação atual;
* Disponibilizar informações por meio de uma API REST;
* Apresentar as informações em uma interface web;
* Criar uma base para futuros dashboards e indicadores.

---

# 🏗️ Arquitetura

O GymFlow possui arquitetura separada entre **Frontend**, **Backend** e **Banco de Dados**.

```text
                         ┌───────────────────┐
                         │      USUÁRIO      │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │     FRONTEND      │
                         │ React + Vite      │
                         └─────────┬─────────┘
                                   │
                              HTTP / REST
                                   │
                                   ▼
                         ┌───────────────────┐
                         │      BACKEND      │
                         │ FastAPI + Python  │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │    SQLAlchemy     │
                         │       ORM         │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │      SQLite       │
                         │     Database      │
                         └───────────────────┘
```

---

# 🧰 Stack Tecnológica

## Backend

| Tecnologia        |  Versão | Finalidade                  |
| ----------------- | ------: | --------------------------- |
| Python            |  3.14.3 | Linguagem principal         |
| FastAPI           | 0.136.3 | Framework da API            |
| Uvicorn           |  0.49.0 | Servidor ASGI               |
| SQLAlchemy        |  2.0.50 | ORM / acesso ao banco       |
| python-dotenv     |   1.2.2 | Variáveis de ambiente       |
| pydantic-settings |  2.12.0 | Configurações da aplicação  |
| python-jose       |   3.5.0 | JWT                         |
| Passlib           |   1.7.4 | Hash de senhas              |
| bcrypt            |   4.0.1 | Criptografia/hash de senhas |
| pytest            |   8.4.2 | Testes automatizados        |
| pytest-cov        |   7.0.0 | Cobertura de testes         |
| httpx             |  0.28.1 | Testes HTTP                 |

---

## Frontend

| Tecnologia          | Versão | Finalidade                       |
| ------------------- | -----: | -------------------------------- |
| React               | 19.2.7 | Interface da aplicação           |
| React DOM           | 19.2.7 | Renderização React               |
| Vite                |  8.1.1 | Build e desenvolvimento          |
| Axios               | 1.18.1 | Comunicação HTTP                 |
| React Router DOM    | 7.18.1 | Rotas                            |
| React Hook Form     | 7.84.0 | Gerenciamento de formulários     |
| Zod                 |  4.4.3 | Validação de dados               |
| @hookform/resolvers |  5.7.1 | Integração React Hook Form + Zod |
| React Hot Toast     |  2.6.0 | Notificações                     |
| React Modal         | 3.16.3 | Modais                           |
| Lucide React        | 1.27.0 | Ícones                           |
| Prop Types          | 15.8.1 | Validação de propriedades        |

---

## Ferramentas de desenvolvimento

| Ferramenta         | Finalidade                             |
| ------------------ | -------------------------------------- |
| Git                | Controle de versão                     |
| GitHub             | Repositório remoto e colaboração       |
| Git Bash           | Terminal                               |
| Visual Studio Code | Desenvolvimento                        |
| npm                | Gerenciamento de dependências          |
| ESLint             | Análise estática e qualidade do código |
| Swagger / OpenAPI  | Documentação e testes da API           |

---

# 🗄️ Banco de Dados

O banco utilizado atualmente é:

```text
SQLite
```

A aplicação utiliza **SQLAlchemy** como ORM.

Durante o desenvolvimento local, o banco principal é:

```text
backend/gymflow.db
```

Existe também um banco utilizado pelos testes:

```text
backend/test_gymflow.db
```

Arquivos de banco de dados não devem ser versionados no Git.

O `.gitignore` já contém:

```text
*.db
*.sqlite3
```

---

# 🔐 Autenticação

O sistema utiliza autenticação baseada em **JWT (JSON Web Token)**.

Tecnologias relacionadas:

```text
python-jose
Passlib
bcrypt
```

Fluxo conceitual:

```text
Usuário
   │
   ▼
Login
   │
   ▼
FastAPI
   │
   ▼
Validação das credenciais
   │
   ▼
JWT
   │
   ▼
Frontend
   │
   ▼
Requisições autenticadas
```

As senhas não devem ser armazenadas em texto puro.

---

# 🔌 API

O backend utiliza **FastAPI** para disponibilizar uma API REST.

Durante o desenvolvimento local:

```text
http://127.0.0.1:8000
```

## Documentação Swagger

```text
http://127.0.0.1:8000/docs
```

## OpenAPI

```text
http://127.0.0.1:8000/openapi.json
```

A documentação automática permite consultar e testar os endpoints diretamente pelo navegador.

---

# ⚛️ Frontend

O frontend foi desenvolvido utilizando:

```text
React
+
Vite
```

Durante o desenvolvimento, o Vite disponibiliza a aplicação normalmente em:

```text
http://localhost:5173
```

O frontend utiliza Axios para comunicação com a API.

```text
React
   │
   ▼
Axios
   │
   ▼
FastAPI
   │
   ▼
SQLite
```

---

# 📝 Formulários e Validação

O projeto utiliza:

```text
React Hook Form
Zod
@hookform/resolvers
```

Essa combinação permite estruturar os formulários e realizar validações antes do envio dos dados para a API.

---

# 🧭 Rotas

O gerenciamento das rotas do frontend utiliza:

```text
react-router-dom
```

Isso permite separar as diferentes áreas da aplicação e controlar a navegação entre páginas.

---

# 🧪 Testes Automatizados

O backend possui uma suíte de testes automatizados utilizando:

```text
pytest
pytest-cov
httpx
```

Atualmente existem testes relacionados a diferentes componentes da aplicação.

### Categorias de testes existentes

```text
tests/
├── test_auth.py
├── test_checkins.py
├── test_core_auth.py
├── test_dashboard.py
├── test_database.py
├── test_dependencies.py
├── test_exception_handlers.py
├── test_exceptions.py
├── test_main.py
├── test_models_checkin.py
├── test_models_user.py
├── test_openapi.py
├── test_user_crud.py
├── test_user_service.py
└── test_users.py
```

Os testes abrangem aspectos como:

* Autenticação;
* Check-ins;
* Dashboard;
* Banco de dados;
* Dependências;
* Tratamento de exceções;
* Models;
* OpenAPI;
* CRUD de usuários;
* Serviços;
* Endpoints de usuários.

---

# ▶️ Executando os testes

Entre na pasta backend:

```bash
cd backend
```

Ative o ambiente virtual:

```bash
source venv/Scripts/activate
```

Execute:

```bash
pytest
```

Para visualizar a cobertura:

```bash
pytest --cov=app
```

---

# 📊 Cobertura de testes

O projeto utiliza:

```text
pytest-cov
```

para acompanhar a cobertura do código.

A cobertura pode ser utilizada como indicador auxiliar da qualidade do backend e deve evoluir conforme novas funcionalidades forem implementadas.

---

# 📁 Estrutura do Projeto

A estrutura principal atual é:

```text
gymflow/
│
├── .git/
├── .gitignore
├── README.md
│
├── assert
│
├── docs/
│
├── backend/
│   │
│   ├── app/
│   │   └── main.py
│   │
│   ├── logs/
│   │   └── gymflow.log
│   │
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── conftest.py
│   │   ├── test_auth.py
│   │   ├── test_checkins.py
│   │   ├── test_core_auth.py
│   │   ├── test_dashboard.py
│   │   ├── test_database.py
│   │   ├── test_dependencies.py
│   │   ├── test_exception_handlers.py
│   │   ├── test_exceptions.py
│   │   ├── test_main.py
│   │   ├── test_models_checkin.py
│   │   ├── test_models_user.py
│   │   ├── test_openapi.py
│   │   ├── test_user_crud.py
│   │   ├── test_user_service.py
│   │   └── test_users.py
│   │
│   ├── .env.example
│   ├── requirements.txt
│   └── ...
│
└── frontend/
    │
    ├── public/
    ├── src/
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── eslint.config.js
    └── ...
```

> A estrutura pode evoluir durante as próximas Sprints.

---

# ⚙️ Requisitos para desenvolvimento

Para clonar e executar o projeto, recomenda-se ter instalado:

* Git;
* Python 3.14.3;
* Node.js;
* npm;
* Visual Studio Code ou outro editor de código.

A versão do Node.js utilizada pela equipe deve ser registrada posteriormente para garantir maior padronização entre os ambientes.

---

# 📥 Clonando o projeto

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd gymflow
```

---

# 🐍 Configurando o Backend

Entre na pasta:

```bash
cd backend
```

Crie um ambiente virtual:

```bash
python -m venv venv
```

Ative o ambiente virtual no Git Bash:

```bash
source venv/Scripts/activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

---

# 🔐 Configurando as variáveis de ambiente

O projeto utiliza variáveis de ambiente.

Existe um arquivo de referência:

```text
backend/.env.example
```

Crie seu arquivo local:

```text
backend/.env
```

Não publique o `.env` no GitHub.

O arquivo `.env` já está protegido pelo `.gitignore`.

---

# ▶️ Executando o Backend

Com o ambiente virtual ativado:

```bash
uvicorn app.main:app --reload
```

API:

```text
http://127.0.0.1:8000
```

Swagger:

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

A partir da raiz do projeto:

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

A aplicação estará disponível normalmente em:

```text
http://localhost:5173
```

---

# 🏗️ Build do Frontend

Para gerar o build de produção:

```bash
npm run build
```

Para visualizar o build:

```bash
npm run preview
```

---

# 🧹 Lint

O projeto utiliza ESLint.

Para executar a análise:

```bash
npm run lint
```

Para corrigir automaticamente problemas suportados pelo ESLint:

```bash
npm run lint:fix
```

Também existe o comando:

```bash
npm run format
```

que executa o processo configurado no projeto para correção/organização do código.

---

# 🚀 Executando o projeto completo

É necessário manter **dois terminais** abertos.

## Terminal 1 — Backend

```bash
cd gymflow/backend
source venv/Scripts/activate
uvicorn app.main:app --reload
```

## Terminal 2 — Frontend

```bash
cd gymflow/frontend
npm install
npm run dev
```

Depois acesse:

```text
http://localhost:5173
```

---

# 🌿 Git e estratégia de branches

O projeto utiliza Git e GitHub para controle de versão e colaboração.

Branches utilizadas no desenvolvimento incluem:

```text
develop
feature/checkin
feature/frontend
```

A recomendação é que cada integrante desenvolva sua tarefa em uma branch própria.

Fluxo:

```text
develop
   │
   ├── feature/nova-funcionalidade
   │
   ├── feature/correcao
   │
   └── feature/frontend
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

# 👥 Como contribuir

## 1. Atualizar a branch de desenvolvimento

```bash
git checkout develop
git pull origin develop
```

## 2. Criar sua branch

Exemplo:

```bash
git checkout -b feature/dashboard-ocupacao
```

## 3. Desenvolver

Faça as alterações necessárias.

## 4. Verificar o status

```bash
git status
```

## 5. Adicionar arquivos

```bash
git add .
```

## 6. Criar commit

```bash
git commit -m "feat: adiciona dashboard de ocupação"
```

## 7. Enviar a branch

```bash
git push origin feature/dashboard-ocupacao
```

## 8. Criar Pull Request

Abra um Pull Request direcionado para:

```text
develop
```

A alteração deve ser revisada antes do merge.

---

# 📝 Convenção de commits

Recomenda-se utilizar mensagens de commit padronizadas.

### Nova funcionalidade

```text
feat: adiciona tela de usuários
```

### Correção

```text
fix: corrige validação do login
```

### Documentação

```text
docs: atualiza README
```

### Refatoração

```text
refactor: reorganiza serviço de usuários
```

### Testes

```text
test: adiciona testes para check-in
```

---

# 🚫 Arquivos que não devem ser versionados

O projeto possui `.gitignore` configurado para impedir o versionamento de arquivos gerados localmente ou que possam conter informações sensíveis.

Entre eles:

```text
venv/
__pycache__/
.pytest_cache/
.coverage
htmlcov/
*.db
*.sqlite3
.env
node_modules/
dist/
.vscode/
.idea/
*.log
```

Nunca faça commit de:

* Senhas;
* Tokens;
* Chaves secretas;
* Credenciais;
* Arquivos `.env`;
* Dados pessoais reais;
* Banco de dados local;
* `node_modules`;
* Ambientes virtuais.

---

# 🔒 Segurança

Informações sensíveis devem permanecer fora do código-fonte.

Utilize:

```text
.env
```

para configurações locais.

Utilize:

```text
.env.example
```

para documentar quais variáveis são necessárias.

O `.env.example` pode ser versionado.

O `.env` não deve ser versionado.

---

# 📋 Checklist para novos colaboradores

* [ ] Instalar Git;
* [ ] Instalar Python 3.14.3;
* [ ] Instalar Node.js;
* [ ] Instalar npm;
* [ ] Clonar o repositório;
* [ ] Entrar na pasta `gymflow`;
* [ ] Configurar o ambiente virtual do backend;
* [ ] Instalar `requirements.txt`;
* [ ] Configurar `backend/.env`;
* [ ] Instalar dependências do frontend;
* [ ] Executar backend;
* [ ] Executar frontend;
* [ ] Acessar a aplicação;
* [ ] Acessar `/docs`;
* [ ] Executar os testes;
* [ ] Executar o lint;
* [ ] Atualizar `develop`;
* [ ] Criar branch própria;
* [ ] Desenvolver;
* [ ] Testar;
* [ ] Criar commit;
* [ ] Enviar branch;
* [ ] Abrir Pull Request.

---

# 🧪 Checklist antes de abrir Pull Request

```text
Backend
```

* [ ] API inicia corretamente;
* [ ] Testes executados;
* [ ] Testes passando;
* [ ] Nenhuma credencial foi adicionada;
* [ ] Logs de debug desnecessários removidos.

```text
Frontend
```

* [ ] Aplicação inicia;
* [ ] `npm run lint` executado;
* [ ] Build executado;
* [ ] Funcionalidade testada;
* [ ] Console sem erros desnecessários.

```text
Git
```

* [ ] Branch atualizada;
* [ ] Commit organizado;
* [ ] Nenhum arquivo sensível incluído;
* [ ] Pull Request criado para `develop`.

---

# 📊 Fluxo de ocupação

A regra principal do GymFlow utiliza os registros de entrada e saída dos usuários.

Conceitualmente:

```text
                 CHECK-IN
                    │
                    ▼
            ┌───────────────┐
            │ Usuário ativo │
            └───────┬───────┘
                    │
                    │
              CHECK-OUT
                    │
                    ▼
            ┌───────────────┐
            │ Usuário saiu  │
            └───────────────┘
```

A ocupação representa os usuários que possuem entrada registrada e ainda não possuem saída correspondente.

---

# 📈 Possíveis evoluções

A arquitetura atual permite evolução futura para funcionalidades como:

* Dashboard de ocupação;
* Histórico de ocupação;
* Gráficos;
* Indicadores;
* Horários de maior movimento;
* Controle de capacidade;
* Alertas de lotação;
* Relatórios;
* Perfis e permissões;
* Gestão de academias;
* Persistência em banco de produção;
* Deploy em nuvem;
* Integração com outros serviços.

---

# 🏃 Sprints

O desenvolvimento do GymFlow é organizado em Sprints.

## Status atual

```text
Sprint 4.3
    │
    ▼
CONCLUÍDA
    │
    ▼
Sprint 4.4
    │
    ▼
PRÓXIMA ETAPA
```

O projeto deve continuar sendo evoluído incrementalmente, preservando as funcionalidades já implementadas.

---

# 📍 Checkpoint atual

```text
Projeto: GymFlow

Disciplina:
PJI240 – Projeto Integrador em Computação II

Status:
Sprint 4.3 concluída

Próximo checkpoint:
Planejamento da Sprint 4.4
```

---

# 📦 Resumo da Stack

```text
GYMFLOW
│
├── Frontend
│   ├── React 19.2.7
│   ├── Vite 8.1.1
│   ├── Axios
│   ├── React Router
│   ├── React Hook Form
│   ├── Zod
│   ├── React Modal
│   ├── React Hot Toast
│   └── Lucide React
│
├── Backend
│   ├── Python 3.14.3
│   ├── FastAPI 0.136.3
│   ├── Uvicorn 0.49.0
│   ├── SQLAlchemy 2.0.50
│   ├── Pydantic Settings
│   ├── python-jose
│   ├── Passlib
│   └── bcrypt
│
├── Database
│   └── SQLite
│
├── Tests
│   ├── pytest
│   ├── pytest-cov
│   └── httpx
│
├── Quality
│   └── ESLint
│
└── Version Control
    ├── Git
    └── GitHub
```

---

# 👤 Autoria

**Thamyres Lima**

Projeto desenvolvido para fins acadêmicos no âmbito do:

**PJI240 – Projeto Integrador em Computação II**

---

# 📄 Licença

Este projeto possui licença:

```text
MIT
```

O projeto foi desenvolvido originalmente para fins acadêmicos.
