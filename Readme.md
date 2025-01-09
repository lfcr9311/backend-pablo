Como Rodar!!!


1. Primeiro, certifique-se que tem o .env
Se nao tiver, crie um arquivo chamado .env 

coloque isso aqui dentro:

DATABASE_URL="file:./dev.db"





Após, rode esses comandos:

sudo yarn
sudo yarn prisma db push
yarn start:dev


Agora seu backend estará rodando.


ROTAS para Frontend:

http://localhost:3000/users - POST = cria usuário
http://localhost:3000/users/{id} - GET = busca usuário específico
http://localhost:3000/users - GET = busca todos usuários
http://localhost:3000/users/{id} - DELETE = delete usuário específico

Teste no Postman também, para entender a lógica das rotas