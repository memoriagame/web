# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added 
- Adicionado documentação técnica em docsify para o jogo
- Adicionado áudio no jogo
- adicionado api unsplash
- adicionado prototipo de tela
- adicionado read design
- adicionado design ui/ux
- adicionado Perfil da organização 
- bug fixed, patchs etc
- Adicionado colaboradores no github do projeto
- Adicionado domínio personalizado para o jogo em github-pages
- Adicionado organização do jogo memoria game para domínio personalizado para o jogo em github-pages
- Adicionado versão mobile em onsen-ui
- Adicionado link do jogo na barra lateral do GitHub
- Adicionado banner para o jogo no github-pages
- Adicionado logo da organização do projeto memoriagame
- Adicionado logo da documentação técnica
- Adicionado mockup da documentação do jogo
- Adicionado mockup do jogo na versão web
- Adicionado mockup do jogo na versão mobile
- Adicionado módulo para o jogo em js `<script type="module"></script>`
- Adicionado mockup do site do jogo
- Ative e desative a música do jogo
- Adicionado tags no github do repositório para o jogo
- Adicionado links personalizados para o jogo: `https://github.com/memoriagame`, `https://memoriagame.github.io/`, `https://memoriagame.github.io/docs/#/`, `https://memoriagame.github.io/web`, `https://memoriagame.github.io/mobile`, `https://memoriagame.github.io/download`
- Adicionado organização de arquivos e pastas do jogo
- Adicionado vídeo de gif para demonstração do jogo
- Adicionado logo do projeto aberto
- Adicionado pontuação do jogo
- Adicionado Contributing.md
- Adicionado github-actions
- Adicionado Security policy
- Adicionado Description
- Adicionado README
- Adicioando Issue templates
- Adicionado Pull request template
- Adicionado donate para o jogo
- Adicionado correção do grid do jogo para melhorar visualização desktop/mobile
- Adicionado License.md em MIT com algumas restrições
- Adicionando ranking do jogo
- Adicionado discussões para o jogo com GitHub Discussions
- Adicionado memoriagame em web component
- Adicionado save-point do jogo com history-push/local-storage
- Adicionado api de música para o jogador escolher a música que deseja quando estiver jogando
- Adicionado divulgação do jogo no docsify como caso de uso
- Adicionado versão do jogo em expo
- Adicionado css-memoriagame em cdn: `https://cdn.jsdelivr.net/npm/memoriagame@5.3.0-alpha1/dist/css/jmemori.css`
- Adicionado img-memoriagame em cdn: `https://cdn.jsdelivr.net/npm/memoriagame@5.3.0-alpha1/dist/img/squirtle.png`
- Adicionado js-memoriagame em cdn: `https://cdn.jsdelivr.net/npm/memoriagame@5.3.0-alpha1/dist/js/memoria.js`
- Adicionado múltiplos-cdns para o jogo: `cdn.jsdelivr`, 
- Adicionado CodeOfConduct.md
- Escolha de as imagens das cartas laterais e traseiras
- Escolha de forma aleatória as imagens das cartas laterais e traseiras
- Adicionado bug fixed em shadow dom para evitar que a posição das cartas seja descoberta via css, html, js
- Adicionado importação álbum de fotos e figuras
- Adicionado fases do jogo
- Adicionado banco de dados: orbit-db, localForage para o controle e transparência do jogo
- Adicionado api ajax para continuar a pontuação do jogo online e localmente
- Adicionado versão do jogo no protocolo ipfs
- Adicionado 19 modos do jogo: 
    - modo personalizado
    - modo aleatório
    - modo padrão com card local 1
    - modo padrão com card local 2
    - modo aposta 1(o participante possui 32 tentativas para decorar todas as posições das 32 cartas. Ele não pode virar todas as 32 cartas, apenas 1 de cada vez)
    - modo aposta 2 (ele pode pedir para o computador tentar decorar ou virar algumas cartas, caso ele ganhe uma pontuação extra ou caso ele deseje apostar no jogo parte de sua pontuação conquistada)
    - modo misto - o participante pode escolher jogar em um ou mais modos em uma ou mais fases do jogo tanto em cartas frontais quanto em cartas traseiras
    - modo objetivo - o participante pode escolher a quantidade de cartas para jogar em uma ou mais fases do jogo
    - modo quebra cabeça - quando o participante decora a posição das cartas, no final o jogo mostra um quebra-cabeça feito
    - modo cores - o participante joga o jogo da memoria decorando a posição de cartas com cores
    - modo sudoku (tente decorar a posição de cartas que possuem números aleatórios, primos ou qualquer tipo de ordem numérica)
    - modo temporário (o participante tem até 2 minutos para decorar e ganhar todas as cartas)
    - modo url personalizada (o participante pode escolher fotos ou imagens onde a carta ficará posicionada para o próximo jogador ou para jogar de forma solitária)
    - modo evitar perda (o participante ganha o jogo na medida que não perde muita pontuação, há uma pontuação mínima e máxima a cada jogo)
    - modo ganhar ou perder (o particpante pode jogar o jogo na pontuação mínima ou máxima)
    - modo computador deixe o computador jogar o jogo da memória com você ou sozinho
    - modo história/geográfico: jogue o jogo da memória baseado na história ou informações geográficas do seu país, região, cidade, município etc
    - modo dama: o jogador terá que ver a posição das cartas com a imagem de peças de damas para vencer o desafio
    - modo xadrez: o jogador terá que ver a posição das cartas com a imagem das peças de xadrez para vencer o desafio
    - modo guerra naval: o jogador terá que ver a posição das cartas com imagem de navios para vencer o desafio
    - modo enforcado: o jogador terá que acertar parte de um quiz para tentar advinhar a posição das cartas para vencer o desafio, caso não acerte o quiz, a sua vez é passada para o próximo jogador. Vence quem tiver virado mais cartas ou menos cartas
    - modo dificil - parte das cartas frontais ou posteriores possuem um ou mais modos que o jogador ou um conjunto de jogadores escolhem, vence quem apostar na dica de um ou mais jogadores se sabem ou não a posição das cartas. o objetivo do jogo é a dedução lógica, probabilidade e também política, no sentido de parceria entre equipes de 4 a 8 jogadores - é semelhante a ideia do jogo war, em que você tem que conquistar países ao fazer alianças e parcerias
