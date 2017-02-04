import React, { Component } from 'react';
import logo from './logo.svg';
import SideToolbar from 'components/toolbar/SideToolbar';
import TopToolbar from 'components/toolbar/TopToolbar';
import './App.css';

const Item = ({ name }) => (<li>{name}</li>);

const List = ({ items }) => {
    const list = items.map(Item);
    return (<ul> { list } </ul>);
}

class App extends Component {

  static childContextTypes = {
    changeMenu: React.PropTypes.func,
  }

  state = {
    escolhido: [],
    menus: {
      produtos: [
        {name: 'Cliente'},
        {name: 'Plano' },
      ],
      cobranca: [
        {name: 'Checkout'},
        {name: 'Plano'},
      ],
    },
  }

  getChildContext() {
    return {
      changeMenu: this.changeMenu,
    };
  }

  changeMenu = event => {
    const { target } = event;
    const key = target.dataset['menu'];

    this.setState({
      escolhido: this.state.menus[key]
    });

    event.preventDefault();
    event.stopPropagation();
  }

  render () {
    const { escolhido } = this.state;

    return (
      <div className='list-container'>
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
            <TopToolbar menus={escolhido} />
            <SideToolbar />
           <main className="mdl-layout__content mdl-color--grey-100">
             <div className="mdl-grid demo-content">
               Aqui vai o conteudo
             </div>
           </main>
         </div>
      </div>
    )
  }

}

export default App;
