
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Admin from './Components/Admin'
import Add from './Components/Add'
import View from './Components/View'
import Edit from './Components/Edit'
import Pagenotfound from './Components/Pagenotfound'

function App() {


  return (

    <div className="App">

      <header className="App-header">
        
        
        {/* http://localhost:3000 */}
              <Routes>
                     <Route path='' element={<Admin/>}/>
                     <Route path='add' element={<Add/>}/>
                     <Route path='view/:id' element={<View/>}/>
                     <Route path='edit/:id' element={<Edit/>}/>
                     <Route path='*' element={<Pagenotfound/>}/>
              </Routes>

           

      </header>
    </div>
  );
  }

export default App;

// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App
