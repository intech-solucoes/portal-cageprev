import React from "react";

import { PlanoVinculadoService, ProcessoBeneficioService, FichaFinancAssistidoService } from "@intechprev/ps-web-service";

import { Row, Col, Box, CampoEstatico, TipoCampoEstatico } from "@intechprev/componentes-web";
import { Page } from "../";
import { Link } from "react-router-dom";

interface Props { }

interface State {
    plano: any;
    processo: any;
    datasFicha: Array<any>;
}

export class Contracheques extends React.Component<Props, State> {
    private page = React.createRef<Page>();

    constructor(props: Props) {
        super(props);

        this.state = {
            plano: {},
            processo: {},
            datasFicha: []
        }
    }

    componentDidMount = async () => {
        await this.page.current.loading(true);

        var plano = await PlanoVinculadoService.Buscar();
        var processo = await ProcessoBeneficioService.BuscarPorPlano(plano.SQ_PLANO_PREVIDENCIAL);
        var datasFicha = await FichaFinancAssistidoService.BuscarDatasPorProcesso(processo.SQ_PROCESSO);

        await this.setState({ plano, processo, datasFicha });

        await this.page.current.loading(false);
    }

    render() {
        return (
            <Page {...this.props} ref={this.page}>
                <Row>
                    <Col tamanho={"lg-6"}>
                        <Box>
                            <h3 className={"mt-4 mb-3"}>Demonstrativos de Pagamento - Contracheque</h3>

                            {this.state.datasFicha.length > 0 && 
                                <table className="table">

                                    <thead>
                                        <tr>
                                            <th>Referência</th>
                                            <th>Bruto</th>
                                            <th>Descontos</th>
                                            <th>Líquido</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.datasFicha.map((valor, index) => {
                                                return (
                                                    <tr key={index} >
                                                        <td>
                                                            {valor.DS_COMPETENCIA}
                                                        </td>
                                                        <td className="text-info">
                                                            <CampoEstatico valor={valor.VAL_BRUTO} tipo={TipoCampoEstatico.dinheiro} />
                                                        </td>
                                                        <td className="text-danger">
                                                            <CampoEstatico valor={valor.VAL_DESCONTOS} tipo={TipoCampoEstatico.dinheiro} />
                                                        </td>
                                                        <td className="text-success">
                                                            <CampoEstatico valor={valor.VAL_LIQUIDO} tipo={TipoCampoEstatico.dinheiro} />
                                                        </td>
                                                        <td>
                                                            <Link className={"btn btn-primary btn-sm"} to={`/contracheques/${valor.SQ_PROCESSO}/${valor.DT_REFERENCIA.replace(new RegExp('/', 'g'), '.')}` }>Contracheque</Link>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>

                                </table>
                            }

                            {this.state.datasFicha.length === 0 && 
                                <div>Nenhum contracheque disponível para este plano.</div>
                            }
                        </Box>
                    </Col>
                </Row>
            </Page>
        );
    }
}