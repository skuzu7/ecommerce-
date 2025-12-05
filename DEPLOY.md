# Guia de Deploy da Loja na Vercel

Este guia irá ajudá-lo a fazer o deploy da sua loja Next.js na [Vercel](https://vercel.com), a plataforma recomendada pelos criadores do Next.js. A Vercel oferece um processo de deploy simples, alta performance e um generoso plano gratuito.

## Pré-requisitos

1.  **Conta na Vercel:** Crie uma conta gratuita em [vercel.com](https://vercel.com/signup). É recomendado usar sua conta do GitHub, GitLab ou Bitbucket para facilitar a integração.
2.  **Repositório Git:** Seu projeto precisa estar em um repositório no GitHub (ou similar).

## Passo a Passo

### 1. Importando o Projeto na Vercel

1.  Acesse seu [dashboard da Vercel](https://vercel.com/dashboard).
2.  Clique em **"Add New..."** e selecione **"Project"**.
3.  A Vercel irá se conectar ao seu provedor Git (ex: GitHub). Encontre o repositório do seu projeto na lista e clique em **"Import"**.

### 2. Configurando o Projeto

A Vercel é inteligente e na maioria das vezes detectará automaticamente que seu projeto é Next.js, aplicando as configurações corretas.

-   **Framework Preset:** Deve ser detectado como **"Next.js"**.
-   **Build & Output Settings:** Geralmente, não é preciso alterar nada aqui. A Vercel sabe como buildar um projeto Next.js.
-   **Environment Variables (Variáveis de Ambiente):** Esta é a parte mais importante para customizar seu deploy. Se você tiver chaves de API (para gateways de pagamento, API de fornecedores, etc.), você deve adicioná-las aqui.
    -   Clique na seção **"Environment Variables"**.
    -   Adicione cada variável, por exemplo:
        -   `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` = `pk_live_suaChave`
        -   `FORNECEDOR_API_URL` = `https://api.seufonecedor.com`
    -   **Importante:** Use o prefixo `NEXT_PUBLIC_` para variáveis que precisam ser acessadas no lado do cliente (no navegador). Variáveis sem esse prefixo só são acessíveis no lado do servidor.

### 3. Fazendo o Deploy

1.  Após configurar as variáveis de ambiente (se necessário), clique no botão **"Deploy"**.
2.  A Vercel irá iniciar o processo de build. Você pode acompanhar o progresso em tempo real.
3.  Em poucos minutos, seu site estará no ar! A Vercel fornecerá uma URL única para o seu projeto (ex: `seu-projeto.vercel.app`).

### 4. Domínio Personalizado (Opcional, mas Recomendado)

1.  Após o primeiro deploy, vá para a aba **"Settings"** e depois **"Domains"** no seu projeto na Vercel.
2.  Adicione o domínio que você comprou (ex: `sualoja.com`).
3.  A Vercel fornecerá as instruções para configurar os registros DNS no seu provedor de domínio (ex: GoDaddy, Registro.br, etc.). Geralmente, isso envolve apontar o `A record` ou `CNAME` para os servidores da Vercel.
4.  Assim que a configuração do DNS propagar, seu site estará acessível pelo seu domínio personalizado com HTTPS (SSL) ativado automaticamente.

## Deploy Contínuo (CI/CD)

A grande vantagem da Vercel é que, uma vez configurado, qualquer `push` para a sua branch principal (geralmente `main` ou `master`) irá automaticamente disparar um novo deploy com as atualizações. Isso mantém seu site sempre sincronizado com a última versão do seu código.

---

É isso! Sua loja de dropshipping internacional está no ar, pronta para vender para o mundo todo.
