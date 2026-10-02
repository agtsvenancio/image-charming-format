export const WHATSAPP_NUMBER = "5511980451944"; // [[validar: +55 11 98045-1944]]

export function whatsappLink(origem: string) {
  const msg = `Olá! Vim pelo site da Neide Maria Limpeza (página: ${origem}) e gostaria de um orçamento.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export type Item = { slug: string; title: string; short: string };

export const solucoes: Item[] = [
  { slug: "higienizacao-de-carpetes-corporativos", title: "Higienização de carpetes corporativos", short: "Limpeza profunda de carpetes em escritórios e áreas de alto fluxo, com extratoras e enceradeiras profissionais." },
  { slug: "higienizacao-de-estofados-corporativos", title: "Higienização de estofados corporativos", short: "Cuidado técnico para sofás, bancos e estofados de uso intenso." },
  { slug: "higienizacao-de-cadeiras-e-poltronas", title: "Higienização de cadeiras e poltronas", short: "Cadeiras de escritório, auditórios e salas de reunião higienizadas no local." },
  { slug: "higienizacao-de-sofas-de-recepcao", title: "Higienização de sofás de recepção", short: "A primeira impressão do seu espaço, bem cuidada." },
  { slug: "higienizacao-de-tapetes", title: "Higienização de tapetes", short: "Tapetes corporativos tratados conforme fibra e nível de sujidade." },
  { slug: "higienizacao-de-persianas", title: "Higienização de persianas", short: "Remoção de poeira e resíduos sem desmontar a rotina do escritório." },
  { slug: "limpeza-e-hidratacao-de-couro", title: "Limpeza e hidratação de couro", short: "Conservação de poltronas e sofás de couro em ambientes executivos." },
  { slug: "impermeabilizacao-de-estofados-e-carpetes", title: "Impermeabilização de estofados e carpetes", short: "Proteção extra contra líquidos e manchas do dia a dia." },
  { slug: "planos-de-manutencao-e-contratos", title: "Planos de manutenção e contratos", short: "Manutenção programada e previsível para a sua operação." },
];

export const segmentos: Item[] = [
  { slug: "escritorios-e-empresas", title: "Escritórios e empresas", short: "Carpetes, cadeiras e estofados em rotina corporativa." },
  { slug: "clinicas-e-consultorios", title: "Clínicas e consultórios", short: "Recepções e salas de espera bem cuidadas." },
  { slug: "condominios-empresariais", title: "Condomínios empresariais", short: "Áreas comuns, halls e lobbies." },
  { slug: "hoteis", title: "Hotéis", short: "Quartos, corredores e áreas sociais." },
  { slug: "escolas", title: "Escolas", short: "Salas, auditórios e bibliotecas." },
  { slug: "comercios", title: "Comércios", short: "Lojas e showrooms com boa apresentação." },
  { slug: "coworkings", title: "Coworkings", short: "Espaços compartilhados de uso intenso." },
  { slug: "industrias", title: "Indústrias", short: "Áreas administrativas e de convivência." },
  { slug: "facilities-e-ambientes-de-alto-fluxo", title: "Facilities e ambientes de alto fluxo", short: "Parceria com gestores de facilities." },
];

export const residencial: Item[] = [
  { slug: "sofas", title: "Sofás", short: "Higienização de sofás residenciais." },
  { slug: "colchoes", title: "Colchões", short: "Higienização de colchões." },
  { slug: "tapetes", title: "Tapetes", short: "Tapetes residenciais." },
];

export const regioes: Item[] = [
  { slug: "sao-paulo", title: "São Paulo", short: "Zonas Sul, Oeste, Norte, Leste e Centro." },
  { slug: "abc", title: "ABC", short: "São Caetano e Santo André." },
  { slug: "alphaville-barueri-osasco", title: "Alphaville, Barueri e Osasco", short: "Região oeste da Grande São Paulo." },
];

export const posts: (Item & { tag: string })[] = [
  { slug: "com-que-frequencia-higienizar-carpetes-corporativos", title: "Com que frequência higienizar carpetes corporativos?", short: "Como o fluxo de pessoas define a rotina ideal de manutenção.", tag: "Carpetes" },
  { slug: "o-que-e-o-circulo-de-sinner", title: "O que é o Círculo de Sinner e por que ele importa", short: "Química, temperatura, tempo e ação mecânica na higienização profissional.", tag: "Método" },
  { slug: "manutencao-programada-para-escritorios", title: "Manutenção programada: previsibilidade para o escritório", short: "Por que planos recorrentes simplificam a gestão de facilities.", tag: "Gestão" },
];
