# desafio1
Desafio 1 do estágio na Compass.UOL.
## Informações Importantes:
* Existem duas fontes de consulta de dados de usuários: o arquivo [users.json](./users.json), que foi adicionado na raiz do projeto para armazenar dados de usuários, e o localStorage, que armazena informações de usuários cadastrados. 
* A funcionalidade de cadastro foi implementada nesse projeto. O cadastro armazena informações do usuário cadastrado no localStorage (exemplo: "valeria@email.com":"valeria123"). A linha código abaixo consta no arquivo [scripts/createAccount.js](./scripts/createAccount.js) e mostra como a funcionalidade de cadastro armazena a senha e o e-mail do usuário cadastrado no localStorage:
```js
localStorage.setItem(email, password);
```
* Quando um usuário tenta fazer login, o sistema checa se o conjunto de e-mail e senha fornecidos no formulário de login consta nas duas fontes de consulta de informações de usuários: o localStorage e o arquivo [users.json](./users.json).
* No localStorage também é aramazenada a situação do usuário quanto ao login ("logged":true ou "logged":false).
* Eu implementei um mecanismo que impede o usuário de acessar as páginas de erro 404 e home sem estar logado. A linha de código abaixo está presente nos arquivos [scripts/home.js](./scripts/home.js) e [scripts/notFound.js](./scripts/notFound.js) e checa se o usuário está logado ou não assim que o código JavaScript da página Home é executado. Se o usuário não estiver logado ao tentar acessar a páginas de erro 404 ou home, ele será redirecionado automaticamente para a página de login [index.html](./index.html).
```js
if (localStorage.getItem("logged") !== "true") window.location.href = "../index.html"
```
