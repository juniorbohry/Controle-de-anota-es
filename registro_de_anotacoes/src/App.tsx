import react, { useState } from "react"
import styles from "./App.module.css"

//components
import Footer from "./components/Footer"
import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"
import Modal from "./components/Modal"

//interface
import { IAnnotation } from "./interfaces/Annotation"

function App() {
  const [annotationList, setAnnotationList] = useState<IAnnotation[]>([])
  const [annotationToUpdate, setAnnotationToUpdate] = useState<IAnnotation | null>(null);

  function deleteAnnotation(id: number) {
    setAnnotationList(
      annotationList.filter((annotation) => {
        return annotation.id !== id
      })
    )
  }

  function hideOrShowModal(display: boolean) {
    const modal = document.getElementById("modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  function editAnnotation(annotation: IAnnotation): void {
    hideOrShowModal(true);
    setAnnotationToUpdate(annotation);
  };

  function updateAnnotation(id: number, title: string, description: string) {
    const updatedAnnotation: IAnnotation = { id, title, description };
    const updatedItems = annotationList.map((annotation) => {
      return annotation.id === updatedAnnotation.id ? updatedAnnotation : annotation;
    });
    setAnnotationList(updatedItems);
    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal 
      children={
        <Form
          btnText="Editar"
          annotationList={annotationList}
          annotation={annotationToUpdate}
          handleUpdate={updateAnnotation}
        />}
      />
      <Header />

      <main className={styles.main}>
        <section className={styles.register}>
          <h2>Registro de anotações</h2>
          <Form 
            btnText="Registrar"
            annotationList= {annotationList}
            setAnnotationList= {setAnnotationList}
          />
        </section>

        <section className={styles.list}>
        <h2>Lista de anotações</h2>
          <List 
            annotationList= {annotationList}
            handleDelete= {deleteAnnotation}
            handleEdit= {editAnnotation}
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
