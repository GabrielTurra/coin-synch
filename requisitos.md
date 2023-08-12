# Landing page:
[X] Os dados das crypto moedas no topo da página deverão ser carregados da API Rest (SUGESTÃO: https://www.coinapi.io/)
[X] O Banner do topo deverá ser em forma de carrossel (Mais detalhes no figma)
[ ] O Banner do topo deverá mudar a imagem quando o usuario descer a página

## Top Cryptos
[X] Os dados das crypto moedas na seção de "Top Cryptos" deverão ser carregados da API Rest (SUGESTÃO: https://www.coinapi.io/)
[X] Ação do botão "View more +" deverá mostrar lista completa (10 itens);
[X] Após expandir a lista, o texto "View more +" deverá ser substituido por "View less";

## Newsletter
[X] O formulário de Newsletter no rodapé da página deverá ter interação a API Rest
[X] Implementar ação de "Loading" desabilitando o botão de "Subscribe" até o retorno do servidor;
[X] Enquanto a ação de subscribe estiver sendo processada o usuário não poderá alterar o campo e-mail (desabilitar o preenchimento do input de texto);
[X] Após retorno de sucesso do servidor, o campo e-mail deve ser limpo e o botão "Subscribe" deve estar disponível novamente;

## Sign
[X] O botão "Sign in" deverá abrir um dialog conforme o layout;
[X] O input de e-mail deverá ser validado (e-mail válido)
[X] O input de password deverá ter a ação de mostrar / esconder a senha (clicando no ícone de olho);
[X] "Forgot password?" não deverá ser implementado (apenas um link fake);
[X] O botão de "Sign Up" e o link "Don’t have an account? Sign up to CoinSynch" deverão abrir o dialog "Sign Up" conforme o figma;
[X] Os campos "Name", "Email", "Password", "Confirm Password" e o checkbox "I have read and accept the Privacy Policy and Terms of User Sign up." deverão ser obrigatórios;
[X] O input de e-mail deverá ser validado (e-mail válido)
[X] Os inputs Passwords e Confirm Password deverão ser iguais para se tornarem válidos;
[ ] Ao clicar no link "Already have and account? Sign in to CoinSynch" a aplicação deverá abrir o Dialog de "Sign in" no lugar do "Sign Up";

#Dashboard:
[ ] colocar icone de logout
[X] O topo da página deverá ter as informações do usuário (Avatar e Nome, esses dados deverão ser consumidos da API Rest)
[X] O topo também deverá ter um dropdown com uma única opção (Logout);
[ ] Menu lateral com tooltip deverá ter as funções de expandir e minimizar;
[ ] Conteúdo deve ser exibido com os dados consumidos da API;
[ ] O valor exibido no bloco "Balance in US$" deverá ser formatado;
[ ] O bloco "Daily Variation" deverá mostrar um gráfico com dados consumidos da API;
[ ] O bloco "My Wallet" deverá mostrar a lista com dados consumidos da API;
[ ] O botão "Add Crypto" deverá exibir o dialog "Add Crypto" com um select consumindo dados da API;
[ ] Ao clicar no botão "Add Crypto" a listagem no bloco "My Wallet" deverá ser atualizado;
[ ] Ao clicar no ícone da listagem do bloco "My Wallet", deverá ser exibido o dialog de "Transfer Crypto";
[ ] O Select de "Transfer" deverá listar as opções "Transfer in" e "Transfer out";
[ ] Caso usuário transfira todo o valor da moeda selecionada, o item deverá ser removido da listagem do bloco "My Wallet";
[ ] O campo "Quantity" não deverá ter valor negativo;
[ ] Ao remover todas as moedas da sua carteira, deverá ser exibida a mensagem de "Empty data" no bloco "My Wallet".
