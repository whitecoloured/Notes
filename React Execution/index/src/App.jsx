import Header from './Header/header'
import Content from './Content/content'
import CreateForm from './Content/createform'
import DeleteForm from './Content/deleteform'
import CurrentNote from './Content/currentnote'
import EditForm from './Content/editform'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles.css'

function App() {
  
  return (
    <div className="appForm">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/create' element={<CreateForm/>}/>
        <Route path='/curnote'>
          <Route index element={<CurrentNote/>}/>
          <Route path='editnote' element={<EditForm/>}/>
          <Route path='deletenote' element={<DeleteForm/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
