import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

//import { userActions } from '../_actions';

const Cadastro= (props) =>  {
    const [user, setUser] = useState({Nome: '', dataNascimento: '', Endereco: '', CEP: '', CRM: ''});
    const [submitted, setSubmitted] = useState(false);

    useEffect(()=>{

    },[])



    function handleSubmit(event) {
        event.preventDefault();

        setSubmitted( true );
        if (user.Nome && user.dataNascimento && user.Endereco && user.CEP && user.CRM) {
            props.register(user);
        }
    }



        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Cadastro Médico</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <div className={'form-group' + (submitted && !user.Nome ? ' has-error' : '')}>
                        <label htmlFor="Nome">Nome</label>
                        <input type="text" className="form-control" name="Nome" value={user.Nome} onChange={({target})=>setUser({Nome:target.value})} />
                        {submitted && !user.Nome &&
                            <div className="help-block">Nome necessario</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.dataNascimento ? ' has-error' : '')}>
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <input type="text" className="form-control" name="dataNascimento" value={user.dataNascimento} onChange={({target})=>setUser({dataNascimento:target.value})} />
                        {submitted && !user.dataNascimento &&
                            <div className="help-block">Data de Nascimento necessaria</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.Endereco ? ' has-error' : '')}>
                        <label htmlFor="Endereco">Endereço</label>
                        <input type="text" className="form-control" name="Endereco" value={user.Endereco} onChange={({target})=>setUser({Endereco:target.value})} />
                        {submitted && !user.Endereco &&
                            <div className="help-block">Endereco Necessario</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.CEP ? ' has-error' : '')}>
                        <label htmlFor="CEP">CEP</label>
                       <input type="password" className="form-control" name="CEP" value={user.CEP} onChange={({target})=>setUser({CEP:target.value})} />
                        {submitted && !user.CEP &&
                            <div className="help-block">CEP Necessario</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.CRM ? ' has-error' : '')}>
                        <label htmlFor="password">CRM</label>
                        <input type="password" className="form-control" name="CRM" value={user.CRM} onChange={({target})=>setUser({CRM:target.value})} />
                        {submitted && !user.CRM &&
                            <div className="help-block">CRM Necessario</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Registrar</button>
                        <Link to="/login" className="btn btn-link">Cancelar</Link>
                    </div>
                </form>
            </div>
        );
    



    }
    export default Cadastro;

    