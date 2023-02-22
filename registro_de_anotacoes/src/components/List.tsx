import React from 'react';
import styles from './List.module.css'
import {BsFillTrashFill , BsPencil } from 'react-icons/bs'

//interface
import { IAnnotation } from '../interfaces/Annotation'

interface Props {
    annotationList: IAnnotation[];
    handleDelete(id: number): void;
    handleEdit(annotation: IAnnotation):void;
}

function List({ annotationList, handleDelete, handleEdit }:Props) {

  return(
    <>
      {annotationList.length > 0 ? (
        annotationList.map((annotation) => (
          <div className={styles.list} key={annotation.id}>
            <div className={styles.actions}>
              <i onClick={() => handleDelete(annotation.id)}><BsFillTrashFill /></i>
              <i onClick={() => handleEdit(annotation)}><BsPencil /></i>
            </div>      
            <div className={styles.information}>
              <h3>{annotation.title}</h3>
              <p>{annotation.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Não há anotações!</p>
      )}      
    </> 
  )
}

export default List