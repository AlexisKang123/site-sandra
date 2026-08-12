/* ==============================================================
   DADOS DA LINHA DO TEMPO
   ==============================================================
   Edite este arquivo para colocar os momentos de vocês.
   Não precisa saber programar — é só copiar o padrão abaixo.

   COMO ADICIONAR UM MÊS
   ----------------------
   1. Crie uma pasta em assets/months/ com um nome curto, ex: "2024-09".
   2. Coloque dentro dela as fotos, vídeos e/ou áudios desse mês.
      Dica: comprima as fotos antes (ex: https://squoosh.app) para o
      site carregar rápido, e tire o GPS/metadados se a foto tiver
      (a maioria dos celulares grava onde a foto foi tirada).
   3. Copie um dos blocos { ... } abaixo, cole na lista MONTHS,
      e ajuste os campos:

        id          -> mesmo nome da pasta em assets/months/
        dateLabel   -> texto pequeno acima do título, ex: "Setembro · 2024"
        title       -> título do mês, ex: "Nosso primeiro mês"
        teaser      -> uma linha curta, em itálico, antes de abrir
        text        -> o texto/história desse mês (pode ter várias
                       frases; cada item do array vira um parágrafo)
        media       -> lista de fotos/vídeos/áudios desse mês:

          { type: "photo", src: "assets/months/2024-09/praia.jpg", caption: "na praia" }
          { type: "video", src: "assets/months/2024-09/video.mp4", caption: "" }
          { type: "audio", src: "assets/months/2024-09/audio.mp3", caption: "ela cantando" }

      Se um mês ainda não tiver mídia, deixe media: [] — o site mostra
      um texto avisando que ainda não há fotos desse mês, sem quebrar.

   A ORDEM DA LISTA é a ordem que aparece no site (de cima para baixo).
   ============================================================== */

const MONTHS = [
  {
    id: "2026-01",
    dateLabel: "Janeiro · 2026",
    title: "O mês que mudou nossas vidas",
    teaser: "o primeiro nó deste fio",
    text: [
      "Um encontro que litralmente mudou minha. Desde nosso primeiro beijo, nunca mais imaginei alguém do meu lado que não seja você.",
      "Lembra quando aluguei um apartamento só pra gente? Fiz que nosso encontro seja inexquecível, mas falhei miserávelmente por que não foi inexquecível mas sim mágico.",
    ],
    media: [
      { type: "photo", src: "assets/months/2026-01/foto_3.png", caption: "Nossa primeiro foto juntos" },
      { type: "photo", src: "assets/months/2026-01/foto_2.png", caption: "Escultores natos kkk" },
      { type: "photo", src: "assets/months/2026-01/foto_1.png", caption: "O que é a Monalisa comparado aos nossos retratos?" }
    ]
  },
  {
    id: "2026-02",
    dateLabel: "Fevereiro · 2026",
    title: "Conhecendo a vida um do outro",
    teaser: "Paixão, amor e muita vontade de estar juntos",
    text: [
      "Vendo nossas conversas deste mês, mostra o quanto estávamos curiosos um com o outro, perguntando da vida de um, fofocando em outra, sonhando juntos.",
      "Conheci sua família, um pouco de medo deles não gostarem de mim. E quebrando um galho pra minha parceira Mi pra ir no evento de anime kkkk"
    ],
    media: [
      { type: "photo", src: "assets/months/2026-02/photo1.jpg", caption: "Primeiro dia na sua casa" },
      { type: "photo", src: "assets/months/2026-02/photo2.jpg", caption: "Quebrando galho pra Milena" },
      { type: "photo", src: "assets/months/2026-02/photo3.jpg", caption: "Acho que foi a única vez que a Mi quis tirar foto" }
      /* exemplos de como adicionar vídeo e áudio quando tiver os arquivos:
      , { type: "video", src: "assets/months/2024-06/video.mp4", caption: "" }
      , { type: "audio", src: "assets/months/2024-06/audio.mp3", caption: "" }
      */
    ]
  },
  {
    id: "2026-03",
    dateLabel: "Março · 2026",
    title: "Um mês sem fotos",
    teaser: "tudo bem começar só com palavras",
    text: [
      "Foi o mês em que nós dois já sabíamos o que realmente sentíamos um pelo outro, mas nenhum de nós tinha coragem de falar. Até que, em uma noite, tomei coragem e te falei o quanto te amo e o quanto não consigo imaginar uma vida sem você ao meu lado. Lembro daquele momento como se fosse ontem, quando te disse pela primeira vez que te amava e você ficou assustada. Talvez você não esperasse ouvir aquilo naquele momento, mas eu já não conseguia mais guardar o que sentia. E hoje, quando olho para trás, percebo que aquele foi um dos momentos mais importantes da nossa história. Foi quando deixei o medo de lado e finalmente disse aquilo que meu coração já sabia há muito tempo: que eu te amo e que quero você ao meu lado para a vida inteira."
    ],
    media: [
      ]
  }
  ,
  {
    id: "2026-04",
    dateLabel: "Abril · 2026",
    title: "Um sinopse de como seria no futuro",
    teaser: "Pensavamos que ia ser somente uma viagem normal mas...",
    text: [
      "Lembro de você me acalmando porque eu estava bravo depois de terem brigado com a minha irmã kkk. Peguei o primeiro voo para ir ver a minha princesa, já chegando com vontade de rodar a baiana, e você ali, fazendo de tudo para me acalmar. Mas também lembro de como você fez de tudo para transformar aquele momento no melhor final de semana daquele mês. Foram dias que ficaram marcados na minha memória, não só pelas coisas que fizemos, mas por tudo que vivemos juntos. Foi também o mês em que finalmente contamos ao mundo sobre o nosso amor. Tiramos várias fotos, vivi momentos incríveis ao seu lado, conheci pessoas que fazem parte da sua vida e, principalmente, percebi que o meu sentimento por você crescia cada vez mais. A cada momento ao seu lado, eu tinha ainda mais certeza de que era você quem eu queria na minha vida."
    ],
    media: [
      { type: "photo", src: "assets/months/2026-04/photo1.png", caption: "Primeira foto arrumados kkk" },
      { type: "photo", src: "assets/months/2026-04/photo2.jpg", caption: "Ela me levando no aeroporto" },
      { type: "photo", src: "assets/months/2026-04/photo3.jpg", caption: "1 das várias fotos nostrando o quanto te amo" }
    ]
  },
  {
    id: "2026-05",
    dateLabel: "Maio · 2026",
    title: "A notícia",
    teaser: "O início das mundaças",
    text: [
      "Neste mês começou uma fase que mudaria nossas vidas. Recebi uma proposta de emprego quase irrecusável, mas que também significaria ficarmos distantes por um tempo. Você, incrível como sempre, me encorajou, acreditou em mim e, acima de tudo, escolheu continuar construindo o nosso relacionamento, mesmo sabendo que a distância não seria fácil. No começo, confesso que não estive bem. Era uma mudança enorme, cheia de incertezas e com aquele medo de como tudo iria funcionar. Mas, aos poucos, cada momento que conseguíamos passar juntos me dava mais força para continuar. Ter você ao meu lado, mesmo de longe, me fazia sentir que eu conseguiria enfrentar qualquer coisa. E foi aí que percebi que eu podia me sentir um super-homem, porque tinha a minha própria Mulher-Maravilha ao meu lado ❤️ "
    ],
    media: [
      { type: "photo", src: "assets/months/2026-05/photo1.jpg", caption: "Meu presente pequeno com significado enorme" }
    ]
  },
  {
    id: "2026-06",
    dateLabel: "Junho · 2026",
    title: "Nossos momentos",
    teaser: "Um jovem sonhador com uma mulher destemida",
    text: [
      "Você sabe o quanto é incrível o nosso relacionamento? Desde o primeiro dia até hoje, parece que nunca conseguimos parar de conversar ou de querer estar perto um do outro. E como esquecer o dia 13 de junho, o nosso Dia dos Namorados kkkkk. Eu, torcendo como um louco pelo Brasil naquele frio, sem nem saber onde iríamos assistir ao jogo. Fomos em tantos lugares tentando encontrar um lugar para assistir que, no final, acho que o jogo acabou sendo apenas um detalhe kkkkk. Porque o que realmente importava era estar com você. Foi justamente nesse mês que percebi que realmente existia um relacionamento saudável, daqueles que não precisam de brigas, jogos psicológicos ou qualquer tipo de disputa. Só precisa existir amor, respeito, companheirismo e vontade de fazer dar certo. Mesmo sendo um mês difícil para nós, porque sabíamos que o grande dia estava se aproximando e que a distância estava cada vez mais perto, você continuou sendo incrível e magnífica comigo. Você me ajudou a organizar minha festa de despedida, se enturmou com meus amigos, ajudou a limpar o lugar e, acima de tudo, esteve ao meu lado em cada momento. E talvez seja isso que mais tenha ficado marcado em mim: mesmo sabendo que eu estava prestes a partir, você não deixou de aproveitar cada segundo ao meu lado. Não tenho palavras suficientes para explicar o quanto você foi incrível comigo. Você não foi apenas a pessoa que eu amava; naquele momento, você se tornou meu porto seguro, minha parceira e a pessoa que me fazia ter certeza de que, mesmo com a distância, nós conseguiríamos continuar juntos."
    ],
    media: [
      { type: "photo", src: "assets/months/2026-06/photo2.jpg", caption: "Festa junina da Mi" },
      { type: "photo", src: "assets/months/2026-06/photo3.jpg", caption: "Nosso dia de torcedor" },
      { type: "photo", src: "assets/months/2026-06/photo4.jpg", caption: "Dia dos namorados" },
      { type: "photo", src: "assets/months/2026-06/photo5.jpg", caption: "Meus presentes pro meu amor" },
      { type: "photo", src: "assets/months/2026-06/photo6.jpg", caption: "Ser sexy sem ser vulgar kkk" },
      { type: "photo", src: "assets/months/2026-06/photo7.jpg", caption: "Tirando foto da gente na surdina" }
    ]
  },
  {
    id: "2026-07",
    dateLabel: "Julho · 2026",
    title: "Meu maior presente",
    teaser: "Realizar meu sonho com a pessoa que amo",
    text: [
      "Nossos últimos dias juntinhos... Nós simplesmente não nos desgrudamos por um minuto, mas, mesmo assim, parece que o tempo passou rápido demais. Eu queria tanto que aqueles momentos pudessem durar para sempre, que o tempo simplesmente parasse e nos deixasse ali, juntos, sem precisar pensar no dia da partida.",
      "Choramos em silêncio — menos você, é claro kkkk — até finalmente chegar o dia em que eu precisei partir. Foi difícil, talvez um dos momentos mais dolorosos que já tivemos, porque pela primeira vez a distância deixava de ser apenas uma possibilidade e se tornava realidade. Mas, mesmo com toda aquela saudade e com o tempo passando, você me deu a melhor notícia que eu poderia receber: eu seria pai.",
      "Imaginar que eu poderia realizar um dos maiores sonhos da minha vida já seria algo indescritível, mas poder viver esse sonho com você tornou tudo ainda mais especial. Eu não poderia imaginar outra pessoa para compartilhar esse momento tão importante comigo.",
      "Sou imensamente grato por você ter me escolhido para viver esse presente de Deus ao seu lado. E, mesmo que a distância tenha marcado aquele momento, saber que agora existia um pedacinho de nós crescendo dentro de você fez meu coração se sentir mais perto de vocês do que nunca.",
      "Naquele instante, eu percebi que nossa história estava começando um capítulo completamente novo. E, dessa vez, não éramos mais apenas nós dois. Éramos nós três. ❤️"
    ],
    media: [
      { type: "photo", src: "assets/months/2026-07/photo1.jpg", caption: "" },
      { type: "photo", src: "assets/months/2026-07/photo2.jpg", caption: "" },
      { type: "photo", src: "assets/months/2026-07/photo3.jpg", caption: "" },
      { type: "photo", src: "assets/months/2026-07/photo4.jpg", caption: "" },
      { type: "photo", src: "assets/months/2026-07/photo5.jpg", caption: "" },
      { type: "video", src: "assets/months/2026-07/video1.mp4", caption: "" } 
    ]
  },
  {
    id: "2026-08",
    dateLabel: "Agosto · 2026",
    title: "O reencontro",
    teaser: "Depois de muitos dias longes, finalmente nos encontramos novamente",
    text: [
      "Até que enfim o grande dia chegou. O dia em que finalmente iríamos nos ver novamente, depois de tanto tempo contando cada minuto para estarmos juntos.",
      "Mal podia esperar para sentir novamente o seu cheiro, aquele cheiro que eu já sentia tanta falta quando estávamos longe. Para sentir seus abraços calorosos, seus beijos inesquecíveis e simplesmente poder ficar perto de você sem precisar contar as horas para a despedida.",
      "E esse reencontro aconteceu justamente em um mês muito especial, porque no dia 4 também é o aniversário da mulher que eu amo. Mesmo sem podermos comemorar juntos como eu gostaria, fiz questão de preparar um vídeo para você, para tentar demonstrar um pouquinho de todo o amor, carinho e admiração que sinto por você.",
      "Depois de tanta saudade, finalmente poderíamos matar um pouquinho dela juntos.",
      "E, como se esse reencontro já não fosse especial o suficiente, tivemos mais uma lembrança que ficará para sempre na nossa história: a nossa Sophia Naomi. Foi nesse momento que descobrimos o sexo do nosso pedacinho de amor que está crescendo aí dentro." ,
      "Descobrir que era a nossa menina tornou aquele momento ainda mais mágico. Agora, além de matar a saudade um do outro, estávamos ali celebrando a chegada da nossa filha, o nosso maior presente e a prova mais linda de todo o amor que construímos juntos.",
      "Naquele momento, não éramos apenas dois apaixonados matando a saudade. Éramos uma família começando a viver seus primeiros momentos juntos. E, no mesmo mês em que celebramos a vida da mulher que amo, também descobrimos que a nossa história ganharia o presente mais lindo de todos: a nossa pequena Sophia Naomi. ❤️"
    ],
    media: [
      { type: "photo", src: "assets/months/2026-08/photo1.jpg", caption: "" },
      { type: "photo", src: "assets/months/2026-08/photo2.jpg", caption: "" },
      { type: "video", src: "assets/months/2026-08/video1.mp4", caption: "" },
      { type: "video", src: "assets/months/2026-08/video2.mp4", caption: "" } 
    ]
  }
];
