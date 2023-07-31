import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Feira from 'pages/Feira';
import Carrinho from 'pages/Carrinho';
import { UsuarioProvider } from 'common/context/Usuario';
import { CarrinhoProvider } from 'common/context/Carrinho';

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>
                    <Route exact path='/'>
                            <Login/>
                    </Route>
                    <CarrinhoProvider>
                        <Route path='/feira'>
                            <Feira/>
                        </Route>
                    </CarrinhoProvider>
                </UsuarioProvider>
                <Route path='/carrinho'>
                    <Carrinho/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}