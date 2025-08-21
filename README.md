# MVP de um Site de uma Agência de Imóveis
Desafio realizado individualmente durante o estágio na Compass.UOL. Trata-se de um MVP (produto mínimo viável) de um site de uma agência de imóveis fictícia. Para sua realização, usei HTML, CSS e JavaScript. O MVP consome as informações dos imóveis e dos usuários de arquivos JSON presentes na raiz do projeto e armazena informações de login e de novos usuários no Local Storage. O MVP dispõe de:

* Telas de login e cadastro com validações dos dados inseridos pelo usuário.
<p align="center">
  <img src="./assets/readme-images/image1.png" alt="Validação no formulário de login" width="200">
  <img src="./assets/readme-images/image1.png" alt="Validação no formulário de cadastro" width="200">
</p>


* Página principal (home) que, ao se clicar em um dos imóveis apresentados, exibe um modal com as informações do imóvel selecionado.

* Tela de página em construção, que é exibida quando o usuário clica em alguma funcionalidade ainda não implementada, como o botão de comprar que aparece no modal.

* Recurso que impede o acesso do usuário às telas de página principal (home) e de página em construção caso o usuário não esteja logado.


## Informações Técnicas sobre o Projeto
* Para entrar na aplicação pelo formulário de login, pode-se usar o e-mail example@gmail.com e a senha batatinha123 ou qualquer outro conjunto de credenciais constante no arquivo [users.json](./users.json).
* Existem duas fontes de consulta de dados de usuários: o arquivo [users.json](./users.json), que foi adicionado na raiz do projeto para armazenar dados de usuários, e o localStorage, que armazena informações de usuários cadastrados. 
* A funcionalidade de cadastro foi implementada nesse projeto. O cadastro armazena informações do usuário cadastrado no localStorage (exemplo: "usuario@email.com":"senha123"). A linha código abaixo consta no arquivo [createAccount.js](./scripts/createAccount.js) e mostra como a funcionalidade de cadastro armazena a senha e o e-mail do usuário cadastrado no localStorage:
```js
localStorage.setItem(email, password);
```
* Quando um usuário tenta fazer login, o sistema checa se o conjunto de e-mail e senha fornecidos no formulário de login consta nas duas fontes de consulta de informações de usuários: o localStorage e o arquivo [users.json](./users.json).
* No localStorage também é armazenada a situação do usuário quanto ao login ("logged":true ou "logged":false).
* Eu implementei um mecanismo que impede o usuário de acessar as páginas de erro 404 e home sem estar logado. A linha de código abaixo está presente nos arquivos [home.js](./scripts/home.js) e [notFound.js](./scripts/notFound.js) e checa se o usuário está logado ou não assim que o código JavaScript da página Home é executado. Se o usuário não estiver logado ao tentar acessar a páginas de erro 404 ou home, ele será redirecionado automaticamente para a página de login ([index.html](./index.html)).
```js
if (localStorage.getItem("logged") !== "true") window.location.href = "../index.html"
```
