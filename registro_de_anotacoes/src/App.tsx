import Footer from "./components/Footer"
import Header from "./components/Header"
import styles from "./App.module.css"
import Form from "./components/Form"

function App() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <section className={styles.register}>
          <h2>Registro de anotações</h2>
          <Form />

        </section>

        <section className={styles.list}>

        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
