export interface Visita {
    id: number;
    nomeEmpresa: string;
    estado: string;
    cidade: string;
    dataVisita: Date;
    dataLimiteCadastro: Date;
    quantidadePessoas: number;
    concluida: boolean;
    status: 'Concluída' | 'Pendente';
  }
  