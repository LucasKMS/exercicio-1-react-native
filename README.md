# Relatório do Projeto

## Visão Geral

Este projeto é uma aplicação de gerenciamento de tarefas com um backend em **Express.js** e um frontend em **React Native**. A API do backend permite criar, ler, atualizar e excluir tarefas, e o frontend proporciona uma interface interativa para o usuário gerenciar suas tarefas.

## Estrutura da API

A API foi construída com **Express.js** e armazena as tarefas em um array em memória. Os seguintes endpoints estão disponíveis:

### Endpoints da API

- **POST /tarefas**
  - **Descrição**: Cria uma nova tarefa.
  - **Corpo da Requisição**:
    ```json
    { "descricao": "Descrição da tarefa", "status": "pendente" }
    ```
  - **Resposta**:
    ```json
    { "id": 1, "descricao": "Descrição da tarefa", "status": "pendente" }
    ```

- **GET /tarefas**
  - **Descrição**: Retorna todas as tarefas.
  - **Resposta**:
    ```json
    [ { "id": 1, "descricao": "Descrição da tarefa", "status": "pendente" }, ... ]
    ```

- **GET /tarefas/:id**
  - **Descrição**: Retorna uma tarefa específica pelo ID.
  - **Resposta**:
    ```json
    { "id": 1, "descricao": "Descrição da tarefa", "status": "pendente" }
    ```

- **PUT /tarefas/:id**
  - **Descrição**: Atualiza uma tarefa existente.
  - **Corpo da Requisição**:
    ```json
    { "descricao": "Descrição atualizada", "status": "completa" }
    ```
  - **Resposta**:
    ```json
    { "id": 1, "descricao": "Descrição atualizada", "status": "completa" }
    ```

- **DELETE /tarefas/:id**
  - **Descrição**: Exclui uma tarefa pelo ID.
  - **Resposta**: `204 No Content`

## Telas do Frontend

A aplicação inclui três telas principais, desenvolvidas com **React Native**:

1. **HomeScreen**
2. **NovaTarefaScreen**
3. **EditarTarefaScreen**

### HomeScreen

- **Descrição**: Exibe uma lista de tarefas e permite ao usuário filtrar as tarefas por status (todas, pendentes, completas). Oferece botões para adicionar uma nova tarefa e editar tarefas existentes.
- **Funcionalidade**: Faz uma requisição `GET` para buscar todas as tarefas e envia uma requisição `DELETE` para remover tarefas.

### NovaTarefaScreen

- **Descrição**: Permite ao usuário adicionar uma nova tarefa.
- **Funcionalidade**: Envia uma requisição `POST` para criar uma nova tarefa no backend.

### EditarTarefaScreen

- **Descrição**: Permite ao usuário editar uma tarefa existente.
- **Funcionalidade**: Envia uma requisição `PUT` para atualizar a tarefa no backend.

## Funcionalidades de Interação com o Backend

As telas interagem com a API do backend usando a API `fetch` para realizar as operações CRUD:

- **Buscar Tarefas**: A `HomeScreen` faz uma requisição `GET` para obter e exibir todas as tarefas, com a opção de filtrá-las por status.
- **Adicionar uma Tarefa**: A `NovaTarefaScreen` envia uma requisição `POST` para criar uma nova tarefa.
- **Atualizar uma Tarefa**: A `EditarTarefaScreen` envia uma requisição `PUT` para atualizar uma tarefa existente.
- **Excluir uma Tarefa**: A `HomeScreen` envia uma requisição `DELETE` para remover uma tarefa.

## Menu de Contexto

A aplicação inclui um **menu de contexto** para facilitar a interação do usuário com as tarefas. Este menu pode ser usado para acessar opções adicionais, como editar ou excluir tarefas de forma rápida.

## Imagens do Projeto

### Tela HomeScreen
![HomeScreen](./frontend/assets/Imagem1.jpeg)

### Tela de Edição de Tarefa
![EditarTarefaScreen](./frontend/assets/Imagem2.jpeg)

## Repositório do Projeto

Você pode acessar o repositório do projeto [aqui](https://github.com/LucasKMS/exercicio-1-react-native.git).

## Conclusão

Este projeto demonstra uma solução de gerenciamento de tarefas com um backend implementado em **Express.js** e um frontend em **React Native**. Ele permite que os usuários criem, leiam, atualizem e excluam tarefas, com os dados sendo armazenados em memória no servidor para simplicidade.
