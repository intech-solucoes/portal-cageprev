﻿

export default class ProcessoBeneficioEntidade {
	public SQ_PROCESSO: number;
	public SQ_PLANO_PREVIDENCIAL?: number;
	public SQ_CONTRATO_TRABALHO?: number;
	public SQ_ESPECIE: number;
	public NR_PROCESSO: number;
	public NR_ANO_PROCESSO: string;
	public CD_PERFIL: number;
	public SQ_MOT_SITUACAO?: number;
	public NR_VERSAO: number;
	public DT_CONCESSAO?: Date;
	public DT_PROX_PAGTO?: Date;
	public DT_TERMINO?: Date;
	public DT_REINICIO?: Date;
	public DT_RETROATIVIDADE?: Date;
	public QT_TOT_PARCELAS?: number;
	public QT_PAG_PARCELAS?: number;
	public VL_SALDO_INICIAL?: number;
	public VL_SALDO_ATUAL?: number;
	public VL_SALDO_ANTERIOR?: number;
	public PC_RESGATE?: number;
	public VL_RESGATE?: number;
	public VL_FATOR_REDUTOR?: number;
	public DT_BASE_CALCULO?: Date;
	public IR_TIPO_CALCULO: string;
	public IR_EVOLUCAO_RENDA: string;
	public IR_CONVERSAO_RISCO: string;
	public VL_FATOR_ATUARIAL?: number;
	public DS_ESPECIE: string;
	public DS_MOT_SITUACAO: string;
}