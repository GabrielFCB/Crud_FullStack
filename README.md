# Crud_FullStack
Projeto de CRUD


Criando Banco de dados:
1. Va no site da supabase
2. Cadastre-se ou faça login
3. Va em "table editor" e escolha "new table"
4. Crie uma tabela chamada "usuarios" (esse nome é obrigatório), com categorias "id" em int8, "nome" em "text" e "idade" em int8 (novamente, esses nomes são obrigatórios para o projeto rodar sem alterações)
5. Feita a tabela, va em "Home" e procure seu Project API. Salve e guarde sua "Project URL" e "API Key"


Baixando servidor:
5. Faça o download da pasta do projeto e abra com a IDE de sua escolha
6. Abra o terminal no local da pasta e escreva "npm install" para baixar os modulos do projeto
7. Abra a pasta "src" e abra o arquivo "createClient.js"
8. No arquivo, existe uma função "createClient()". Entre os parênteses, pegue os valores salvos do seu supabase e coloque da seguinte forma:

createClient(
"Project URL","API Key"
)


9. Use "npm run dev" para ativar o projeto
10. Entre na URL que aparecer e teste!
11. Com seu site pronto, vá no terminal, com sua pasta aberta, e rode "npm run build" para fazer a versão otimizada de seu site, salva numa pasta "dist"



Fazendo Upload na AWS:
12. Vá no site da AWS e abra um bucket (S3)
13. Crie um bucket novo e coloque o Nome do Bucket e coloque os arquivos dentros da pasta "dist"
14. Agora, va em IAM da AWS e crie uma função com S3FullAccess
15. Crie uma instância de EC2, dando a ela a IAM com a função que você criou
16. Conecte na sua instância e siga os seguintes passos:
17. Instale o apache com o comando "sudo yum install -y httpd"
18. Faça o start do apache com "sudo systemctl start httpd"
19. Use "sudo su" para ter privilegios de edição
20. Navegue para o diretório da página principal: "cd /var/www/html"
21. Use "aws s3 sync s3://<nome-do-bucket> /var/www/html/"
