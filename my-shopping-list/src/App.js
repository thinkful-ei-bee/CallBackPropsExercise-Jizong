import React, { Component } from 'react';
import AddItemForm from './shopping-list/AddItemForm';
import ShoppingList from './shopping-list/ShoppingList';
import './App.css';

class App extends Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  render() {
    return (
      <>
      <div className="App">
       
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList items={this.state.shoppingItems} />
          </section>
        </main>
     
      </div>
      </>
    );
  }
}

export default App;
