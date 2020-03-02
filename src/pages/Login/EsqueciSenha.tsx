import React from "react";

import { PageClean } from "..";

import { UsuarioService } from "@intechprev/ps-web-service";
import { Alerta, TipoAlerta, Form, CampoTexto, Botao, TipoBotao } from "@intechprev/componentes-web";
import { Link } from "react-router-dom";

interface Props {
    history?: any;
}

interface State {
    cpf: string;
    dataNascimento: string;
    loading: boolean;
    mensagem: string;
    erro: string;
}

export class EsqueciSenha extends React.Component<Props, State> {

    private alert = React.createRef<Alerta>();
    private form = React.createRef<Form>();

    constructor(props: Props) {
        super(props);

        this.state = {
            cpf: "",
            dataNascimento: "",
            loading: false,
            mensagem: "",
            erro: ""
        }
    }

    enviarSenha = async () => {
        try {
            var alert = this.alert.current;
            var form = this.form.current;

            await alert.limparErros();
            await form.validar();

            if(this.state.cpf.length < 11) {
                await this.alert.current.adicionarErro("Campo \"CPF\" inválido.");
                return;
            }

            if(form.valido) {
                var resultado = await UsuarioService.PrimeiroAcesso(this.state.cpf, this.state.dataNascimento);
                window.alert(resultado);
                this.props.history.push('/');
            }
        
        } catch(err) { 
            if(err.response)
                this.alert.current.adicionarErro(err.response.data);
            else
                this.alert.current.adicionarErro(err);
        }
    }

    render() {
        return (
			<PageClean {...this.props}>
                <h4>Bem vindo ao portal da Cageprev</h4>
                
                <h5>
                    <b>Esqueci minha senha / Primeiro Acesso</b><br />
                    <br/>
                    <small>Preencha as informações para que possamos gerar uma senha que será enviada para seu email cadastrado na fundação Cageprev.</small>
                </h5>

                <Form ref={this.form}>
                
                    <CampoTexto contexto={this} nome={"cpf"} tipo={"number"} max={11} valor={this.state.cpf} 
                                placeholder="CPF (somente números)" />

                    <CampoTexto contexto={this} nome={"dataNascimento"} valor={this.state.dataNascimento} 
                                placeholder={"Data de Nascimento"} mascara={"99/99/9999"} />

                    <Botao titulo={"Enviar Nova Senha"} tipo={TipoBotao.primary} block submit usaLoading
                            onClick={this.enviarSenha} />
                    <Link className="btn btn-light btn-block" to="/login">Voltar para a página de Login</Link>
                    <br />
                    <Alerta ref={this.alert} padraoFormulario tipo={TipoAlerta.danger} tamanho={"12"} />

                </Form>
            </PageClean>
        );
    }
}