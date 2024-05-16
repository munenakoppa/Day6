
import { useState } from 'react';
import styles from './Styles/Login.module.css'

import Books from './GraphQL/Books';
import AddBooks from './GraphQL/AddBooks';

function Menu() {
  let [toggle, setToggle] = useState('List');

  

  return (
    <div >
      <div>
        <hr />
        <button onClick={() => setToggle('List')} className={toggle === 'List' ? styles.activeMenuButton : styles.menuButton}>List</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => setToggle('add')} className={toggle === 'add' ? styles.activeMenuButton : styles.menuButton}>Add Book</button>

        
      </div>
      <hr />
      {toggle === 'List' && <Books />}
      {toggle === 'add' && <AddBooks />}
      
    </div>
  );
}

export default Menu;