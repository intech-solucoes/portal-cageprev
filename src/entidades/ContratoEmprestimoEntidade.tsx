﻿import HistSaldoContratoEntidade from "./HistSaldoContratoEntidade";

export default class ContratoEmprestimoEntidade {
	public SQ_CONTRATO: number;
	public CD_PESSOA?: number;
	public SQ_AUTORIZACAO?: number;
	public SQ_MOT_INDEFERIMENTO?: number;
	public SQ_NATUREZA?: number;
	public CD_FORMA_PAG?: number;
	public CD_FINALIDADE?: number;
	public IR_OPCAO_COBRANCA: string;
	public SQ_SITUACAO?: number;
	public DT_SOLICITACAO?: Date;
	public DT_CREDITO?: Date;
	public VL_SOLICITADO?: number;
	public VL_LIQUIDO?: number;
	public VL_PRESTACAO?: number;
	public VL_JUROS_AD?: number;
	public DT_QUITACAO?: Date;
	public SQ_MOT_QUITACAO?: number;
	public SQ_CONTRATO_QUITACAO?: number;
	public VL_SALDO_QUITACAO?: number;
	public VL_MARGEM_CALCULADA?: number;
	public QT_PRAZO?: number;
	public QT_PARCELA_PAGA?: number;
	public NR_CONTRATO?: number;
	public NR_ANO_CONTRATO?: number;
	public SQ_CONTRATO_TRABALHO?: number;
	public SQ_PLANO_PREVIDENCIAL?: number;
	public IR_TIPO_TABELA: string;
	public SQ_CONTA_BANCARIA?: number;
	public VL_CORRECAO?: number;
	public VL_MARGEM_INFORMADA?: number;
	public VL_LIMITE_MAXIMO?: number;
	public CODEMPR: string;
	public CODLIQ: string;
	public IDENTEMPR: string;
	public CODPES?: number;
	public SEQ_CONTRATO?: number;
	public USR_CODIGO?: number;
	public DT_REQUERIMENTO?: Date;
	public NO_PESSOA: string;
	public NR_CPF: string;
	public NO_EMPRESA: string;
	public NR_REGISTRO: string;
	public DS_PLANO_PREVIDENCIAL: string;
	public DS_NATUREZA: string;
	public DS_SITUACAO: string;
	public DS_MOT_QUITACAO: string;
	public VL_IOF?: number;
	public Prestacoes: Array<HistSaldoContratoEntidade>;
	public DS_IR_TIPO_TABELA: string;
}