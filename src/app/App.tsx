import ClientPage from "@/pages/Users/ui/ClientPage.tsx";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar.tsx";
import styles from './App.module.scss';

function App() {

  return (
      <div className={styles.app}>
          <Sidebar/>
          <main>
              <ClientPage/>
          </main>
      </div>
  )
}

export default App
