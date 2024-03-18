export interface Visita {
    nomeEmpresa: string;
    estado: string;
    cidade: string;
    dataVisita: Date;
    dataLimiteCadastro: Date;
    quantidadePessoas: number;
    concluida: boolean;
    status: 'C' | 'P';
  }
  