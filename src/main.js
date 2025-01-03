import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { BreakingBad } from './breakingbad/breakingbad-app'
import { usersApp } from './users/users-app'

document.querySelector('#app').innerHTML = `
  <div>

    <h1 id="app-title">Breaking bad App</h1>
    <div class="card">
    
    </div>

  </div>
`
const element = document.querySelector('.card');
// BreakingBad(element);
usersApp(element);