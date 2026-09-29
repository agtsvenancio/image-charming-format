import type { Faq } from "./solucoes";

export type Segmento = {
  slug: string;
  nome: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  contexto: string[];
  pontosAtencao: string[];
  ambientes: string[];
  solucoes: string[];
  atendimento: string;
  faq: Faq[];
};

export const segmentosDetalhados: Segmento[] = [
  {
    slug: "escritorios-e-empresas", nome: "Escritórios e empresas",
    h1: "Higienização para escritórios e empresas",
    seoTitle: "Higienização para Escritórios | Neide Maria Limpeza",
    metaDescription: "Carpetes, cadeiras, sofás de recepção e persianas de escritórios higienizados com planejamento que respeita a rotina da empresa.",
    contexto: ["Num escritório, o ambiente físico faz parte da experiência de trabalho. Colaboradores passam horas nas mesmas cadeiras, circulam pelos mesmos corredores e recebem clientes nas mesmas salas.", "O desafio é conservar tudo isso sem atrapalhar reuniões, entregas e o dia a dia das equipes — por isso o planejamento pesa tanto quanto a técnica."],
    pontosAtencao: ["Corredores e entradas com marcas de circulação", "Cadeiras com uso contínuo de 8 horas ou mais", "Recepção como cartão de visitas", "Agenda cheia de reuniões e visitas"],
    ambientes: ["Estações de trabalho", "Salas de reunião", "Recepção", "Diretoria", "Áreas de convivência e copa", "Auditório"],
    solucoes: ["higienizacao-de-carpetes-corporativos", "higienizacao-de-cadeiras-e-poltronas", "higienizacao-de-sofas-de-recepcao", "higienizacao-de-persianas-e-cortinas", "planos-de-manutencao-e-contratos"],
    atendimento: "Visita de avaliação, execução por setores e possibilidade de manutenção recorrente conforme o calendário da empresa.",
    faq: [
      { pergunta: "Vocês trabalham com o escritório funcionando?", resposta: "Sim, organizamos por setores. Horários alternativos podem ser combinados. [[validar]]" },
      { pergunta: "Atendem escritórios pequenos?", resposta: "Sim, de salas comerciais a andares corporativos inteiros." },
    ],
  },
  {
    slug: "clinicas-e-consultorios", nome: "Clínicas e consultórios",
    h1: "Higienização para clínicas e consultórios",
    seoTitle: "Higienização para Clínicas e Consultórios | Neide Maria",
    metaDescription: "Cadeiras de espera, sofás, poltronas e cortinas de clínicas e consultórios higienizados com cuidado e agenda compatível com os atendimentos.",
    contexto: ["Em clínicas e consultórios, a sala de espera diz muito sobre o cuidado que o paciente vai receber. Cadeiras, longarinas e sofás são usados por muitas pessoas diferentes ao longo do dia.", "A agenda de atendimentos é apertada, então o serviço precisa encaixar em horários sem pacientes e deixar o espaço pronto para reabrir."],
    pontosAtencao: ["Alto giro de pessoas nas salas de espera", "Percepção de cuidado pelo paciente", "Agenda de atendimentos sem brechas", "Respingos frequentes em estofados"],
    ambientes: ["Recepção e sala de espera", "Consultórios", "Salas de procedimento administrativas", "Cortinas e persianas", "Poltronas de acompanhante"],
    solucoes: ["higienizacao-de-cadeiras-e-poltronas", "higienizacao-de-sofas-de-recepcao", "higienizacao-de-persianas-e-cortinas", "impermeabilizacao-de-estofados-e-carpetes"],
    atendimento: "Execução em horários sem atendimento, com liberação planejada das salas. [[validar: horários disponíveis]]",
    faq: [
      { pergunta: "O serviço é feito fora do horário da clínica?", resposta: "Buscamos sempre encaixar em horários sem pacientes. [[validar]]" },
      { pergunta: "A impermeabilização ajuda nas salas de espera?", resposta: "Sim, facilita a remoção de líquidos derramados em cadeiras e sofás." },
    ],
  },
  {
    slug: "condominios-empresariais", nome: "Condomínios empresariais",
    h1: "Higienização para condomínios empresariais",
    seoTitle: "Higienização para Condomínios Empresariais | Neide Maria",
    metaDescription: "Carpetes de halls, tapetes de lobby e estofados de áreas comuns de condomínios empresariais com manutenção programada.",
    contexto: ["Halls, lobbies e corredores de condomínios empresariais recebem o fluxo de todas as empresas do prédio. É ali que visitantes formam a primeira impressão do edifício.", "Para a administração, o importante é ter um parceiro que siga o cronograma, respeite as regras do prédio e mantenha as áreas comuns sempre apresentáveis."],
    pontosAtencao: ["Fluxo concentrado em entradas e elevadores", "Regras de acesso e horários do prédio", "Previsibilidade para a administração", "Imagem do edifício"],
    ambientes: ["Lobby e recepção", "Halls de elevadores", "Corredores acarpetados", "Salas de reunião compartilhadas", "Áreas de espera"],
    solucoes: ["higienizacao-de-carpetes-corporativos", "higienizacao-de-tapetes", "higienizacao-de-estofados-corporativos", "planos-de-manutencao-e-contratos"],
    atendimento: "Cronograma de manutenção programada alinhado às regras do condomínio e à administradora.",
    faq: [
      { pergunta: "Vocês seguem as regras de acesso do prédio?", resposta: "Sim, a equipe segue as normas de cadastro e horários do condomínio." },
      { pergunta: "É possível contratar só as áreas comuns?", resposta: "Sim. Também podemos atender as empresas condôminas separadamente." },
    ],
  },
  {
    slug: "hoteis", nome: "Hotéis",
    h1: "Higienização para hotéis",
    seoTitle: "Higienização de Carpetes e Estofados para Hotéis | Neide Maria",
    metaDescription: "Carpetes de corredores e quartos, estofados, poltronas, cortinas e couro de hotéis higienizados sem prejudicar a ocupação.",
    contexto: ["No hotel, cada quarto e cada corredor fazem parte da experiência do hóspede, e avaliações online registram qualquer detalhe fora do lugar.", "O serviço precisa acompanhar a ocupação: quartos liberados em janelas curtas e áreas sociais tratadas sem incomodar quem está hospedado."],
    pontosAtencao: ["Janelas curtas entre check-out e check-in", "Corredores com tráfego contínuo", "Avaliações de hóspedes", "Variedade de materiais: tecido, couro, tapetes"],
    ambientes: ["Quartos", "Corredores", "Lobby e bar", "Salas de eventos", "Restaurante"],
    solucoes: ["higienizacao-de-carpetes-corporativos", "higienizacao-de-estofados-corporativos", "higienizacao-de-cadeiras-e-poltronas", "higienizacao-de-persianas-e-cortinas", "higienizacao-de-tapetes", "limpeza-e-hidratacao-de-couro"],
    atendimento: "Execução por andares ou blocos conforme a ocupação, com possibilidade de cronograma recorrente.",
    faq: [
      { pergunta: "Vocês trabalham com o hotel ocupado?", resposta: "Sim, organizamos por andares e quartos liberados." },
      { pergunta: "Atendem salas de eventos?", resposta: "Sim, incluindo carpetes e cadeiras de salões." },
    ],
  },
  {
    slug: "escolas", nome: "Escolas",
    h1: "Higienização para escolas",
    seoTitle: "Higienização para Escolas | Neide Maria Limpeza",
    metaDescription: "Carpetes, cadeiras de auditório, estofados e impermeabilização para escolas, com agenda nas férias e fins de semana.",
    contexto: ["Escolas concentram muitas pessoas em salas, bibliotecas e auditórios, com uso intenso durante todo o período letivo.", "Os melhores momentos para uma higienização completa costumam ser férias, recessos e fins de semana, quando o espaço pode ficar livre."],
    pontosAtencao: ["Uso intenso durante o ano letivo", "Auditórios com muitas cadeiras", "Calendário escolar", "Respingos frequentes"],
    ambientes: ["Salas de aula", "Bibliotecas", "Auditórios", "Salas de professores", "Recepção e secretaria"],
    solucoes: ["higienizacao-de-carpetes-corporativos", "higienizacao-de-cadeiras-e-poltronas", "higienizacao-de-estofados-corporativos", "impermeabilizacao-de-estofados-e-carpetes"],
    atendimento: "Planejamento alinhado ao calendário escolar, com execução em recessos. [[validar: fins de semana]]",
    faq: [
      { pergunta: "Vocês atendem em período de férias?", resposta: "Sim, é o momento que mais indicamos para escolas." },
      { pergunta: "Conseguem atender auditórios grandes?", resposta: "Sim, organizamos por lotes de cadeiras." },
    ],
  },
  {
    slug: "coworkings", nome: "Coworkings",
    h1: "Higienização para coworkings",
    seoTitle: "Higienização para Coworkings | Neide Maria Limpeza",
    metaDescription: "Carpetes, cadeiras e estofados de coworkings higienizados com frequência compatível com o uso compartilhado e intenso.",
    contexto: ["Em um coworking, o espaço é o produto. Membros escolhem e renovam planos também pela aparência do ambiente.", "Com dezenas de pessoas diferentes usando as mesmas cadeiras e sofás, a conservação precisa ser frequente e sem interromper quem está trabalhando."],
    pontosAtencao: ["Uso compartilhado e rotativo", "Espaço como diferencial comercial", "Funcionamento em horários estendidos", "Áreas de convivência com café e lanches"],
    ambientes: ["Estações compartilhadas", "Salas privativas", "Lounges e sofás", "Salas de reunião", "Phone booths"],
    solucoes: ["higienizacao-de-carpetes-corporativos", "higienizacao-de-cadeiras-e-poltronas", "higienizacao-de-estofados-corporativos", "impermeabilizacao-de-estofados-e-carpetes"],
    atendimento: "Manutenção recorrente por áreas, em horários de menor ocupação.",
    faq: [
      { pergunta: "Qual a frequência ideal para coworkings?", resposta: "Por ser uso intenso, costuma valer um plano recorrente; definimos na avaliação." },
      { pergunta: "Atendem várias unidades?", resposta: "Sim, dentro da nossa área de atendimento." },
    ],
  },
  {
    slug: "comercios", nome: "Comércios",
    h1: "Higienização para comércios e lojas",
    seoTitle: "Higienização para Comércios e Lojas | Neide Maria Limpeza",
    metaDescription: "Estofados, carpetes, tapetes e itens de alto contato de lojas, showrooms e restaurantes higienizados fora do horário de vendas.",
    contexto: ["Em lojas, showrooms e restaurantes, o cliente vê e toca o ambiente. Um provador com banco manchado ou um sofá de espera marcado pesa na experiência de compra.", "O serviço precisa acontecer fora do horário de vendas e deixar tudo pronto para a abertura."],
    pontosAtencao: ["Experiência do cliente em loja", "Horário comercial sem pausas", "Itens de alto contato", "Bancos e booths em restaurantes"],
    ambientes: ["Provadores", "Áreas de espera", "Showrooms", "Bancos e booths de restaurante", "Tapetes de entrada"],
    solucoes: ["higienizacao-de-estofados-corporativos", "higienizacao-de-carpetes-corporativos", "higienizacao-de-tapetes", "limpeza-e-hidratacao-de-couro"],
    atendimento: "Execução antes da abertura ou após o fechamento. [[validar]]",
    faq: [
      { pergunta: "Vocês atendem restaurantes?", resposta: "Sim, bancos, booths e cadeiras estofadas, inclusive em couro." },
      { pergunta: "Dá para fazer antes da loja abrir?", resposta: "Sim, combinamos horários alternativos. [[validar]]" },
    ],
  },
  {
    slug: "industrias", nome: "Indústrias",
    h1: "Higienização para áreas administrativas de indústrias",
    seoTitle: "Higienização para Indústrias | Neide Maria Limpeza",
    metaDescription: "Carpetes, cadeiras e estofados de escritórios, recepções e salas de reunião de indústrias, com planejamento conforme os turnos.",
    contexto: ["Nas indústrias, nosso foco são as áreas administrativas: escritórios, recepções, salas de reunião e de treinamento, refeitórios com estofados.", "Essas áreas recebem clientes, auditores e fornecedores, e sofrem com o pó trazido da operação."],
    pontosAtencao: ["Poeira trazida das áreas operacionais", "Visitas de clientes e auditorias", "Turnos e regras de segurança", "Salas de treinamento com muitas cadeiras"],
    ambientes: ["Escritórios administrativos", "Recepção", "Salas de reunião", "Salas de treinamento", "Áreas de descanso"],
    solucoes: ["higienizacao-de-carpetes-corporativos", "higienizacao-de-cadeiras-e-poltronas", "higienizacao-de-estofados-corporativos", "planos-de-manutencao-e-contratos"],
    atendimento: "Planejamento conforme turnos e normas de segurança da planta. [[validar: requisitos de integração]]",
    faq: [
      { pergunta: "Vocês limpam áreas de produção?", resposta: "Não. Atendemos as áreas administrativas e de convivência." },
      { pergunta: "A equipe participa de integração de segurança?", resposta: "[[validar]]" },
    ],
  },
  {
    slug: "facilities-e-ambientes-de-alto-fluxo", nome: "Facilities e ambientes de alto fluxo",
    h1: "Parceria para facilities e ambientes de alto fluxo",
    seoTitle: "Higienização para Facilities | Neide Maria Limpeza",
    metaDescription: "Portfólio B2B completo e planos de manutenção para gestores de facilities e ambientes de alto fluxo em SP, ABC e Alphaville.",
    contexto: ["O gestor de facilities cuida de muitas frentes ao mesmo tempo e precisa de fornecedores que resolvam, sem exigir acompanhamento constante.", "Nosso papel é concentrar carpetes, estofados, cadeiras, tapetes, persianas e couro em um só parceiro, com cronograma previsível."],
    pontosAtencao: ["Muitos fornecedores para gerir", "Orçamento e cronograma previsíveis", "Várias áreas com fluxos diferentes", "Necessidade de respostas rápidas"],
    ambientes: ["Andares corporativos", "Recepções e lobbies", "Auditórios", "Áreas de convivência", "Várias unidades"],
    solucoes: ["planos-de-manutencao-e-contratos", "higienizacao-de-carpetes-corporativos", "higienizacao-de-cadeiras-e-poltronas", "higienizacao-de-estofados-corporativos", "higienizacao-de-sofas-de-recepcao", "higienizacao-de-tapetes", "higienizacao-de-persianas-e-cortinas", "limpeza-e-hidratacao-de-couro", "impermeabilizacao-de-estofados-e-carpetes"],
    atendimento: "Diagnóstico, cronograma por área e execução recorrente. [[validar: relatórios e SLA]]",
    faq: [
      { pergunta: "Vocês trabalham com contrato?", resposta: "Sim, com planos de manutenção sob medida. [[validar: condições]]" },
      { pergunta: "Atendem várias unidades?", resposta: "Sim, dentro de São Paulo, ABC e Alphaville." },
    ],
  },
];

export const getSegmento = (slug: string) => segmentosDetalhados.find((s) => s.slug === slug);
