import styles from './Form.module.css'
import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";

//interface
import { IAnnotation } from '../interfaces/Annotation';

interface Props {
  btnText: string;
  annotationList: IAnnotation[];
  setAnnotationList?: React.Dispatch<React.SetStateAction<IAnnotation[]>>;
  annotation?: IAnnotation | null; 
  handleUpdate?(id: number, title: string, description: string): void 
}

function Form({ btnText, annotationList, setAnnotationList, annotation, handleUpdate}: Props) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  useEffect(() => {
    if(annotation) {
      setId(annotation.id);
      setTitle(annotation.title);
      setDescription(annotation.description);
    }
  }, [annotation])

  function addAnnotation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(handleUpdate) {
      handleUpdate(id, title, description);
    } else {
      const id = Math.floor(Math.random()*1000)
      const newAnnotation: IAnnotation = {id, title, description}
      setAnnotationList!([...annotationList, newAnnotation])
      setTitle("")
      setDescription("")
      console.log(annotationList)
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if(e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setDescription(e.target.value)
    }
  }

  return (
    <form onSubmit={addAnnotation} className={styles.form}>
      <div className={styles.container_input}>
        <label htmlFor='title'>Título:</label>
        <input 
          type='text'
          name='title'
          placeholder='Título da anotação:'
          onChange={handleChange}
          value={title}
        />
      </div>

      <div className={styles.container_input}>
        <label htmlFor='description'>Descrição:</label>
        <textarea name='description' placeholder='Insira a descrição' onChange={handleChange} value={description} cols={20} rows={5}></textarea>
      </div>
      
      <input type="submit" value={btnText} />
    </form>
  )
}

export default Form