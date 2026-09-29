import fotoExtratora from "@/assets/foto-extratora.jpg";
import fotoEnceradeira from "@/assets/foto-enceradeira.jpg";
import fotoCarpete from "@/assets/foto-carpete.jpg";
import carpeteCorredor from "@/assets/carpete-corredor.jpg";
import cadeiras from "@/assets/antes-depois-cadeiras.jpg";
import sofaVerde from "@/assets/antes-depois-sofa-verde.jpg";
import sofaCinza from "@/assets/antes-depois-sofa-cinza.jpg";
import couroDepois from "@/assets/couro-depois.jpg";
import carpeteVerdeDepois from "@/assets/carpete-verde-depois.jpg";
import equipeSofa from "@/assets/equipe-sofa.jpg";

export type Faq = { pergunta: string; resposta: string };
export type Prova = { imagem: string; legenda: string; antesDepois?: boolean };
export type Solucao = {
  slug: string;
  nome: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  resumo: string;
  problema: string;
  publico: string;
  aplicacoes: string[];
  beneficios: { titulo: string; texto: string }[];
  processo: { titulo: string; texto: string }[];
  segmentosRelacionados: string[];
  diferenciais: string[];
  faq: Faq[];
  prioridade: "A" | "B";
  imagem: string;
  imagemAlt: string;
  prova?: Prova;
  extra?: { titulo: string; paragrafos: string[]; itens?: string[] };
};

const processoPadrao = (item: string): Solucao["processo"] => [
  { titulo: "Avaliação", texto: `Entendemos o tipo de ${item}, o material, o nível de sujidade e a rotina do ambiente antes de definir o procedimento.` },
  { titulo: "Preparação", texto: "Proteção do entorno, organização da área de trabalho e aspiração prévia para retirar partículas soltas." },
  { titulo: "Aplicação do Método", texto: "Produto, temperatura, tempo de ação e ação mecânica combinados conforme a fibra — o equilíbrio do Círculo de Sinner." },
  { titulo: "Extração e acabamento", texto: "Remoção dos resíduos com equipamento profissional, alinhamento das fibras e conferência do resultado." },
  { titulo: "Orientações e secagem", texto: "Passamos os cuidados pós-serviço e o tempo estimado de secagem para o ambiente voltar à rotina." },
];

export const solucoesDetalhadas: Solucao[] = [
  {
    slug: "higienizacao-de-carpetes-corporativos",
    nome: "Higienização de carpetes corporativos",
    h1: "Higienização de carpetes corporativos para escritórios e áreas de alto fluxo",
    seoTitle: "Limpeza de Carpete de Escritório | Neide Maria Limpeza",
    metaDescription: "Higienização de carpete comercial e limpeza de carpete de escritório em São Paulo, ABC e Alphaville, com método técnico e equipe própria.",
    resumo: "Limpeza profunda de carpetes em escritórios e áreas de alto fluxo, com extratoras e enceradeiras profissionais.",
    problema: "O carpete é a maior superfície têxtil de um escritório e acumula, todos os dias, poeira fina, resíduos trazidos pelos calçados, respingos de café e marcas de circulação. A aspiração diária ajuda, mas não chega à base das fibras — com o tempo surgem corredores escurecidos, manchas que voltam e aquela aparência de ambiente cansado. A limpeza de carpete de escritório feita por equipe especializada devolve a apresentação do espaço e prolonga a vida útil do revestimento.",
    publico: "Gestores de facilities, administradores de condomínios empresariais, escritórios, coworkings, hotéis e qualquer operação com carpete em placas ou em rolo e fluxo diário de pessoas.",
    aplicacoes: ["Carpete em placas (modular)", "Carpete em rolo", "Corredores e circulação", "Salas de reunião e diretoria", "Recepções e lobbies", "Auditórios e salas de treinamento", "Áreas abertas de estações de trabalho", "Halls de elevadores"],
    beneficios: [
      { titulo: "Conservação do revestimento", texto: "Retirar a sujeira abrasiva da base das fibras reduz o desgaste e ajuda a adiar a troca do carpete." },
      { titulo: "Apresentação do ambiente", texto: "Cores mais uniformes e corredores sem marcas escuras melhoram a percepção de quem chega ao escritório." },
      { titulo: "Cuidado com o material", texto: "Produto e procedimento escolhidos conforme a fibra, para não deixar resíduo que atrai nova sujeira." },
      { titulo: "Adequação à rotina", texto: "Planejamento por áreas para que a operação continue funcionando durante o serviço." },
    ],
    processo: [
      { titulo: "Visita ou avaliação por fotos", texto: "Levantamos metragem aproximada, tipo de carpete (placa ou rolo), fibra, nível de sujidade e pontos críticos." },
      { titulo: "Planejamento por setores", texto: "Definimos a sequência das áreas e os horários de execução junto com o responsável pelo espaço." },
      { titulo: "Aspiração técnica", texto: "Retirada de partículas secas antes de qualquer umidade, etapa que evita a formação de lama nas fibras." },
      { titulo: "Pré-tratamento de manchas", texto: "Aplicação localizada de produto adequado para cada tipo de mancha, com tempo de ação controlado." },
      { titulo: "Ação mecânica e extração", texto: "Enceradeira com escova ou boneta para soltar a sujeira e extratora profissional para retirar os resíduos." },
      { titulo: "Acabamento e secagem", texto: "Alinhamento das fibras, ventilação do ambiente e orientação sobre a liberação da área." },
    ],
    segmentosRelacionados: ["escritorios-e-empresas", "condominios-empresariais", "hoteis", "coworkings", "escolas", "facilities-e-ambientes-de-alto-fluxo"],
    diferenciais: ["Equipe própria e uniformizada", "Extratoras e enceradeiras profissionais", "Procedimento definido pela fibra do carpete", "Planejamento por setores para não parar a operação", "Possibilidade de manutenção programada"],
    faq: [
      { pergunta: "Quanto tempo leva a higienização do carpete?", resposta: "Depende da metragem, do tipo de carpete e do nível de sujidade. Após a avaliação informamos a estimativa de dias e de horas por setor. [[validar: rendimento médio por dia]]" },
      { pergunta: "Qual o tempo de secagem?", resposta: "Como trabalhamos com extração, a umidade residual é baixa. O tempo varia com ventilação, climatização e tipo de fibra. [[validar: faixa de horas de secagem]]" },
      { pergunta: "Com que frequência devo higienizar o carpete do escritório?", resposta: "Áreas de alto fluxo, como recepção e corredores, costumam pedir intervalos menores que salas de diretoria. Na avaliação sugerimos uma frequência por área, e ela pode virar um plano de manutenção." },
      { pergunta: "O serviço pode ser feito fora do expediente?", resposta: "Planejamos a execução para respeitar a rotina da empresa, inclusive em horários alternativos quando necessário. [[validar: atendimento noturno e aos fins de semana]]" },
      { pergunta: "Quais regiões vocês atendem?", resposta: "Atendemos São Paulo capital, ABC e a região de Alphaville, Barueri e Osasco. Veja a lista completa na página de regiões atendidas." },
      { pergunta: "Como é feito o orçamento?", resposta: "Você envia o pedido pelo formulário ou WhatsApp com metragem aproximada e fotos. Se necessário, agendamos uma visita técnica e enviamos a proposta por escrito." },
      { pergunta: "Vocês removem qualquer mancha?", resposta: "Muitas manchas saem ou ficam bem mais leves, mas o resultado depende da origem, do tempo e da fibra. Avaliamos antes e somos transparentes sobre o que é possível." },
    ],
    prioridade: "A",
    imagem: fotoExtratora,
    imagemAlt: "Profissional da Neide Maria higienizando carpete de escritório com extratora",
    prova: { imagem: carpeteCorredor, legenda: "Carpete em placas de corredor corporativo durante o serviço com enceradeira." },
    extra: {
      titulo: "Carpete em escritório: quando higienizar",
      paragrafos: [
        "Não existe um calendário único para todos os escritórios. O que define o momento certo é a combinação entre fluxo de pessoas, tipo de carpete, cor e uso de cada área. Uma recepção que recebe visitantes o dia todo chega ao limite muito antes de uma sala de diretoria usada algumas vezes por semana.",
        "Por isso recomendamos olhar para o carpete por zonas e agir antes que a sujeira fique impregnada. Quanto mais cedo a higienização de carpete comercial acontece, mais fácil é recuperar a aparência e menor o esforço sobre as fibras.",
      ],
      itens: [
        "Caminhos escurecidos nos corredores e na frente das estações de trabalho",
        "Manchas que reaparecem depois da limpeza do dia a dia",
        "Perda de uniformidade de cor entre áreas de passagem e cantos",
        "Odor persistente em salas fechadas ou de reunião",
        "Antes de eventos, auditorias, visitas de clientes ou mudança de layout",
        "Depois de obras e reformas, quando o pó fino se acumula",
      ],
    },
  },
  {
    slug: "higienizacao-de-estofados-corporativos",
    nome: "Higienização de estofados corporativos",
    h1: "Higienização de estofados para escritório e ambientes corporativos",
    seoTitle: "Higienização de Estofados Corporativos | Neide Maria Limpeza",
    metaDescription: "Empresa de limpeza de estofados corporativos: sofás, bancos, puffs e estofados de uso diário higienizados no local, com método técnico.",
    resumo: "Cuidado técnico para sofás, bancos e estofados de uso intenso.",
    problema: "Estofados corporativos são usados por muitas pessoas ao longo do dia. Suor, oleosidade das mãos, poeira e pequenos respingos se acumulam no tecido e na espuma, deixando marcas em braços, assentos e encostos. A higienização de estofados para escritório remove essa sujeira acumulada e mantém os ambientes com boa apresentação para equipe e visitantes.",
    publico: "Escritórios, coworkings, clínicas, hotéis, escolas e condomínios empresariais que têm sofás, bancos, puffs e estofados em áreas de convivência, espera ou descompressão.",
    aplicacoes: ["Sofás de áreas de convivência", "Bancos estofados e booths", "Puffs e assentos modulares", "Estofados de salas de descompressão", "Cabeceiras e painéis estofados", "Assentos de auditório"],
    beneficios: [
      { titulo: "Conservação", texto: "Tirar a sujeira acumulada evita que ela desgaste o tecido e altere a cor com o tempo." },
      { titulo: "Apresentação", texto: "Assentos e braços sem marcas transmitem cuidado para quem usa e para quem visita." },
      { titulo: "Cuidado com o material", texto: "Identificamos o tipo de tecido antes de escolher produto e técnica, evitando encolhimento ou manchas d'água." },
      { titulo: "Adequação à rotina", texto: "Execução no local, sem retirar os móveis da empresa." },
    ],
    processo: processoPadrao("estofado"),
    segmentosRelacionados: ["escritorios-e-empresas", "coworkings", "clinicas-e-consultorios", "hoteis", "comercios"],
    diferenciais: ["Serviço feito no local", "Identificação do tecido antes do procedimento", "Equipamentos de extração profissionais", "Equipe treinada no Método Neide Maria"],
    faq: [
      { pergunta: "É preciso retirar os estofados da empresa?", resposta: "Não. A higienização é feita no próprio local, com proteção do entorno." },
      { pergunta: "Quanto tempo o estofado leva para secar?", resposta: "Depende do tecido, da espuma e da ventilação. Informamos a estimativa no dia. [[validar: faixa de horas]]" },
      { pergunta: "Vocês atendem grandes quantidades?", resposta: "Sim. Para volumes maiores organizamos a execução em etapas conforme a rotina do espaço." },
      { pergunta: "Todo tecido pode ser higienizado?", resposta: "A maioria sim, mas alguns exigem técnica específica. Por isso avaliamos a etiqueta e o material antes." },
    ],
    prioridade: "A",
    imagem: sofaCinza,
    imagemAlt: "Antes e depois de estofado cinza higienizado",
    prova: { imagem: sofaVerde, legenda: "Antes e depois: estofado com manchas acumuladas e resultado após a higienização.", antesDepois: true },
  },
  {
    slug: "higienizacao-de-cadeiras-e-poltronas",
    nome: "Higienização de cadeiras e poltronas",
    h1: "Limpeza de cadeiras de escritório e poltronas corporativas",
    seoTitle: "Limpeza de Cadeiras de Escritório | Neide Maria Limpeza",
    metaDescription: "Higienização de cadeiras de escritório, limpeza de cadeiras corporativas e poltronas de auditório e reunião, feita no local em SP, ABC e Alphaville.",
    resumo: "Cadeiras de escritório, auditórios e salas de reunião higienizadas no local.",
    problema: "A cadeira é o item de maior contato de qualquer escritório: são horas de uso por dia, todos os dias. Assentos e encostos acumulam oleosidade, suor e poeira, e braços e bordas ficam marcados. A limpeza de cadeiras corporativas feita periodicamente mantém o mobiliário apresentável e ajuda a conservar o estofamento por mais tempo.",
    publico: "Empresas com estações de trabalho, salas de reunião, auditórios, salas de treinamento, escolas e clínicas com cadeiras e poltronas estofadas em tecido ou tela.",
    aplicacoes: ["Cadeiras giratórias de estação de trabalho", "Cadeiras de sala de reunião", "Cadeiras de auditório e treinamento", "Poltronas de diretoria", "Longarinas e cadeiras de espera", "Cadeiras em tela (mesh)"],
    beneficios: [
      { titulo: "Conservação", texto: "A retirada da sujeira do assento reduz o desgaste do tecido e da espuma." },
      { titulo: "Apresentação", texto: "Salas de reunião e auditórios com cadeiras uniformes causam melhor impressão." },
      { titulo: "Cuidado com o material", texto: "Tecido, tela e courino recebem procedimentos diferentes." },
      { titulo: "Adequação à rotina", texto: "Execução por lotes para que os colaboradores sigam trabalhando." },
    ],
    processo: processoPadrao("cadeira ou poltrona"),
    segmentosRelacionados: ["escritorios-e-empresas", "escolas", "clinicas-e-consultorios", "coworkings", "industrias"],
    diferenciais: ["Atendimento de grandes lotes", "Execução no local, por etapas", "Procedimento conforme o revestimento", "Possibilidade de manutenção periódica"],
    faq: [
      { pergunta: "Vocês higienizam cadeiras de auditório em quantidade?", resposta: "Sim. Organizamos a execução em lotes, como na foto do auditório acima." },
      { pergunta: "Qual a diferença para a limpeza feita pela equipe interna?", resposta: "A limpeza diária cuida da superfície. A higienização com extração remove a sujeira que fica no tecido e na espuma." },
      { pergunta: "As cadeiras ficam indisponíveis por quanto tempo?", resposta: "Depende do tecido e da ventilação. [[validar: tempo médio de liberação]]" },
      { pergunta: "Como é calculado o orçamento?", resposta: "Pela quantidade e tipo de cadeira e poltrona. Fotos e quantidades aproximadas já permitem uma primeira estimativa." },
    ],
    prioridade: "A",
    imagem: cadeiras,
    imagemAlt: "Antes e depois de cadeiras azuis de auditório higienizadas",
    prova: { imagem: cadeiras, legenda: "Antes e depois: cadeiras de auditório com assentos higienizados.", antesDepois: true },
  },
  {
    slug: "higienizacao-de-sofas-de-recepcao",
    nome: "Higienização de sofás de recepção",
    h1: "Limpeza de sofá de recepção: a primeira impressão do seu espaço",
    seoTitle: "Limpeza de Sofá de Recepção | Neide Maria Limpeza",
    metaDescription: "Limpeza de sofá de recepção e salas de espera em empresas, clínicas e hotéis. Higienização no local com método técnico e equipe própria.",
    resumo: "A primeira impressão do seu espaço, bem cuidada.",
    problema: "O sofá da recepção é um dos primeiros itens que clientes, pacientes e visitantes veem — e um dos mais usados. Marcas nos braços, assentos escurecidos e manchas pontuais passam uma mensagem que nenhuma empresa quer passar. A limpeza de sofá de recepção mantém a entrada do seu espaço à altura da sua marca.",
    publico: "Recepções corporativas, salas de espera de clínicas e consultórios, lobbies de hotéis e condomínios empresariais, showrooms e lojas.",
    aplicacoes: ["Sofás de recepção em tecido", "Sofás de sala de espera", "Poltronas de lobby", "Bancos estofados de espera", "Sofás de couro e courino (ver solução de couro)"],
    beneficios: [
      { titulo: "Apresentação", texto: "Recepção bem cuidada reforça a imagem profissional da empresa." },
      { titulo: "Conservação", texto: "Higienização periódica ajuda a manter cor e textura do tecido." },
      { titulo: "Cuidado com o material", texto: "Procedimento definido pelo revestimento do sofá." },
      { titulo: "Adequação à rotina", texto: "Agendamos em horários de menor movimento na recepção." },
    ],
    processo: processoPadrao("sofá"),
    segmentosRelacionados: ["clinicas-e-consultorios", "escritorios-e-empresas", "hoteis", "condominios-empresariais", "comercios"],
    diferenciais: ["Agendamento em horário de menor movimento", "Equipe uniformizada e discreta", "Execução no local", "Orientações de conservação entre serviços"],
    faq: [
      { pergunta: "Dá para fazer sem fechar a recepção?", resposta: "Na maioria dos casos, sim: combinamos horário de menor movimento e trabalhamos por partes." },
      { pergunta: "Vocês higienizam sofás de couro?", resposta: "Sim, com limpeza e hidratação específicas para couro. Veja a solução de couro." },
      { pergunta: "Qual a frequência indicada?", resposta: "Depende do fluxo. Recepções movimentadas costumam se beneficiar de manutenção periódica." },
    ],
    prioridade: "A",
    imagem: equipeSofa,
    imagemAlt: "Profissional da Neide Maria higienizando sofá estofado no local",
    prova: { imagem: sofaCinza, legenda: "Antes e depois: sofá em tecido cinza higienizado.", antesDepois: true },
  },
  {
    slug: "higienizacao-de-tapetes",
    nome: "Higienização de tapetes",
    h1: "Higienização de tapetes corporativos",
    seoTitle: "Higienização de Tapetes Corporativos | Neide Maria Limpeza",
    metaDescription: "Higienização de tapetes em escritórios, hotéis e condomínios empresariais, com procedimento definido pela fibra e nível de sujidade.",
    resumo: "Tapetes corporativos tratados conforme fibra e nível de sujidade.",
    problema: "Tapetes de recepção, halls e salas executivas recebem sujeira constante e costumam ficar em pontos de destaque. Cada fibra reage de um jeito à água e aos produtos, e um procedimento errado pode desbotar ou deformar a peça. A higienização adequada recupera a aparência sem colocar o tapete em risco.",
    publico: "Escritórios, hotéis, condomínios empresariais e comércios com tapetes decorativos ou funcionais em áreas de passagem.",
    aplicacoes: ["Tapetes de recepção e lobby", "Tapetes de salas executivas", "Passadeiras de corredor", "Tapetes de halls de elevador", "Grama sintética e forrações de áreas externas cobertas"],
    beneficios: [
      { titulo: "Conservação", texto: "Retirada da sujeira abrasiva que desgasta as fibras." },
      { titulo: "Apresentação", texto: "Cores mais vivas e textura recuperada." },
      { titulo: "Cuidado com o material", texto: "Teste e escolha de produto conforme a fibra." },
      { titulo: "Adequação à rotina", texto: "Execução no local sempre que possível." },
    ],
    processo: processoPadrao("tapete"),
    segmentosRelacionados: ["hoteis", "condominios-empresariais", "comercios", "escritorios-e-empresas"],
    diferenciais: ["Avaliação da fibra antes do serviço", "Equipamentos profissionais de extração", "Procedimento cuidadoso com cores e franjas"],
    faq: [
      { pergunta: "O tapete é higienizado no local?", resposta: "Na maioria dos casos, sim. [[validar: serviço com retirada]]" },
      { pergunta: "Tapetes de fibra natural podem ser higienizados?", resposta: "Sim, com procedimento específico e baixa umidade. Avaliamos cada peça." },
      { pergunta: "Vocês limpam grama sintética?", resposta: "Sim, forrações e gramas sintéticas em áreas cobertas também podem ser tratadas." },
    ],
    prioridade: "B",
    imagem: carpeteVerdeDepois,
    imagemAlt: "Forração verde higienizada em área coberta",
    prova: { imagem: carpeteVerdeDepois, legenda: "Forração em área coberta após a higienização com enceradeira e extração." },
  },
  {
    slug: "higienizacao-de-persianas-e-cortinas",
    nome: "Higienização de persianas e cortinas",
    h1: "Higienização de persianas e cortinas corporativas",
    seoTitle: "Higienização de Persianas e Cortinas | Neide Maria Limpeza",
    metaDescription: "Higienização de persianas e cortinas em escritórios, clínicas e hotéis, com remoção de poeira e resíduos e mínima interferência na rotina.",
    resumo: "Remoção de poeira e resíduos sem desmontar a rotina do escritório.",
    problema: "Persianas e cortinas ficam fora do alcance da limpeza diária e acumulam poeira fina, que se espalha pelo ambiente e escurece o tecido com o tempo. A higienização periódica deixa as janelas com boa aparência e contribui para um ambiente mais agradável.",
    publico: "Escritórios, clínicas, hotéis e escolas com persianas rolô, verticais, horizontais ou cortinas em tecido.",
    aplicacoes: ["Persianas rolô e double vision", "Persianas verticais", "Persianas horizontais", "Cortinas em tecido", "Cortinas blackout"],
    beneficios: [
      { titulo: "Conservação", texto: "A retirada da poeira evita manchas e desgaste do tecido." },
      { titulo: "Apresentação", texto: "Janelas limpas mudam a percepção de todo o ambiente." },
      { titulo: "Cuidado com o material", texto: "Técnica escolhida conforme o tipo de persiana ou tecido." },
      { titulo: "Adequação à rotina", texto: "Atendimento por salas, sem parar o escritório." },
    ],
    processo: processoPadrao("persiana ou cortina"),
    segmentosRelacionados: ["escritorios-e-empresas", "clinicas-e-consultorios", "hoteis", "escolas"],
    diferenciais: ["Atendimento por salas", "Técnica conforme o tipo de peça", "Equipe própria"],
    faq: [
      { pergunta: "As persianas são higienizadas instaladas?", resposta: "Depende do modelo. [[validar: quais modelos são feitos no local e quais exigem retirada]]" },
      { pergunta: "Qual a frequência indicada?", resposta: "Varia com a exposição à poeira e ao sol; na avaliação sugerimos um intervalo." },
    ],
    prioridade: "B",
    imagem: fotoCarpete,
    imagemAlt: "Ambiente corporativo atendido pela Neide Maria Limpeza",
  },
  {
    slug: "limpeza-e-hidratacao-de-couro",
    nome: "Limpeza e hidratação de couro",
    h1: "Limpeza e hidratação de couro em ambientes corporativos",
    seoTitle: "Limpeza e Hidratação de Couro | Neide Maria Limpeza",
    metaDescription: "Limpeza e hidratação de sofás, poltronas e bancos de couro e courino em escritórios, hotéis, restaurantes e salas executivas.",
    resumo: "Conservação de poltronas e sofás de couro em ambientes executivos.",
    problema: "Couro e courino parecem fáceis de limpar, mas acumulam oleosidade, sujeira nas costuras e resíduos que opacam o acabamento. Sem cuidado, o material resseca e marca. A limpeza correta seguida de hidratação devolve a aparência e ajuda a conservar a peça.",
    publico: "Salas executivas, recepções, hotéis, restaurantes, clínicas e espaços com sofás, poltronas e bancos em couro natural ou sintético.",
    aplicacoes: ["Poltronas de diretoria", "Sofás de couro de recepção", "Bancos e booths de restaurante", "Cadeiras executivas", "Estofados em courino"],
    beneficios: [
      { titulo: "Conservação", texto: "Hidratação adequada ajuda a manter o couro natural macio." },
      { titulo: "Apresentação", texto: "Acabamento uniforme, sem manchas de uso." },
      { titulo: "Cuidado com o material", texto: "Produtos próprios para couro e sintéticos." },
      { titulo: "Adequação à rotina", texto: "Serviço no local, com liberação rápida." },
    ],
    processo: processoPadrao("couro"),
    segmentosRelacionados: ["hoteis", "escritorios-e-empresas", "comercios", "clinicas-e-consultorios"],
    diferenciais: ["Produtos específicos para couro", "Diferenciação entre couro natural e sintético", "Atendimento no local"],
    faq: [
      { pergunta: "Vocês recuperam couro rasgado ou descascado?", resposta: "Não fazemos reparo ou restauração; nosso serviço é limpeza e hidratação." },
      { pergunta: "Courino também é hidratado?", resposta: "Courino recebe limpeza e produto de proteção próprio para sintéticos." },
    ],
    prioridade: "B",
    imagem: couroDepois,
    imagemAlt: "Banco estofado em couro preto após limpeza e hidratação",
    prova: { imagem: couroDepois, legenda: "Banco em couro preto de ambiente comercial após limpeza e hidratação." },
  },
  {
    slug: "impermeabilizacao-de-estofados-e-carpetes",
    nome: "Impermeabilização de estofados e carpetes",
    h1: "Impermeabilização de estofados e carpetes corporativos",
    seoTitle: "Impermeabilização de Estofados e Carpetes | Neide Maria",
    metaDescription: "Impermeabilização de estofados, cadeiras e carpetes corporativos: proteção extra contra líquidos e manchas do dia a dia.",
    resumo: "Proteção extra contra líquidos e manchas do dia a dia.",
    problema: "Café, água e outros líquidos fazem parte da rotina de escritórios, clínicas e escolas. Em tecidos sem proteção, um respingo vira mancha rapidamente. A impermeabilização cria uma camada protetora que facilita a remoção de líquidos derramados antes que penetrem nas fibras.",
    publico: "Empresas que acabaram de higienizar carpetes e estofados, ou que querem proteger mobiliário novo em áreas de uso intenso.",
    aplicacoes: ["Sofás e poltronas", "Cadeiras de escritório e reunião", "Carpetes de salas e corredores", "Estofados de áreas de convivência", "Cadeiras de clínicas e escolas"],
    beneficios: [
      { titulo: "Conservação", texto: "Menos manchas significa menos intervenções no tecido." },
      { titulo: "Apresentação", texto: "O mobiliário mantém a boa aparência por mais tempo." },
      { titulo: "Cuidado com o material", texto: "Produto indicado para cada tipo de fibra." },
      { titulo: "Adequação à rotina", texto: "Pode ser feita logo após a higienização." },
    ],
    processo: processoPadrao("peça a ser impermeabilizada"),
    segmentosRelacionados: ["clinicas-e-consultorios", "escolas", "coworkings", "escritorios-e-empresas"],
    diferenciais: ["Aplicação após higienização completa", "Produto conforme o tecido", "Orientação de uso e conservação"],
    faq: [
      { pergunta: "A impermeabilização deixa o tecido à prova d'água?", resposta: "Ela aumenta a resistência a líquidos e facilita a limpeza, mas não torna o tecido totalmente à prova d'água." },
      { pergunta: "Quanto tempo dura a proteção?", resposta: "Depende do uso e da limpeza do dia a dia. [[validar: durabilidade média]]" },
      { pergunta: "Preciso higienizar antes?", resposta: "Sim. A proteção é aplicada sobre o tecido limpo para não selar sujeira." },
    ],
    prioridade: "B",
    imagem: sofaVerde,
    imagemAlt: "Estofado verde após higienização",
  },
  {
    slug: "planos-de-manutencao-e-contratos",
    nome: "Planos de manutenção e contratos",
    h1: "Planos de manutenção e contratos para facilities",
    seoTitle: "Planos de Manutenção de Carpetes e Estofados | Neide Maria",
    metaDescription: "Manutenção programada de carpetes, cadeiras e estofados para facilities: previsibilidade, recorrência e cronograma adaptado à operação.",
    resumo: "Manutenção programada e previsível para a sua operação.",
    problema: "Chamar uma empresa só quando o carpete ou o estofado já está visivelmente sujo gera custo maior, serviço mais pesado e ambiente mal apresentado por semanas. Com um plano de manutenção, a conservação acontece em ciclos previsíveis e o gestor de facilities ganha controle sobre agenda e orçamento.",
    publico: "Gestores de facilities, administradoras de condomínios empresariais, redes de clínicas, hotéis, escolas, coworkings e empresas com várias unidades.",
    aplicacoes: ["Carpetes de todas as áreas", "Cadeiras e poltronas", "Sofás e estofados", "Tapetes", "Persianas e cortinas", "Impermeabilização periódica"],
    beneficios: [
      { titulo: "Previsibilidade", texto: "Cronograma definido com antecedência, alinhado ao calendário da empresa." },
      { titulo: "Conservação contínua", texto: "Intervenções mais leves e frequentes preservam melhor os materiais." },
      { titulo: "Gestão simplificada", texto: "Um único parceiro para vários itens e áreas. [[validar: relatório pós-serviço]]" },
      { titulo: "Adequação à rotina", texto: "Frequência diferente por área, conforme o fluxo de cada uma." },
    ],
    processo: [
      { titulo: "Diagnóstico", texto: "Levantamento de áreas, itens, materiais e fluxo de uso." },
      { titulo: "Proposta de cronograma", texto: "Frequência sugerida por área e por tipo de item." },
      { titulo: "Execução programada", texto: "Serviços realizados conforme o calendário combinado." },
      { titulo: "Acompanhamento", texto: "Ajustes de frequência conforme a necessidade observada." },
    ],
    segmentosRelacionados: ["facilities-e-ambientes-de-alto-fluxo", "condominios-empresariais", "escritorios-e-empresas", "hoteis", "coworkings"],
    diferenciais: ["Cronograma sob medida", "Portfólio B2B completo em um só parceiro", "Equipe própria", "Condições comerciais sob consulta [[validar]]"],
    faq: [
      { pergunta: "Qual a duração mínima de um contrato?", resposta: "As condições são definidas caso a caso. [[validar: prazos e condições de contrato]]" },
      { pergunta: "Posso incluir várias unidades?", resposta: "Sim, montamos um cronograma que contemple as unidades dentro da área atendida." },
      { pergunta: "A frequência pode mudar ao longo do contrato?", resposta: "Sim, a ideia é ajustar conforme o uso real de cada área." },
    ],
    prioridade: "B",
    imagem: fotoEnceradeira,
    imagemAlt: "Enceradeira profissional em carpete corporativo",
  },
];

export const getSolucao = (slug: string) => solucoesDetalhadas.find((s) => s.slug === slug);
