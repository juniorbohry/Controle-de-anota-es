import styles from './Form.module.css'

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.container_input}>
                <label htmlFor='title'>Título:</label>
                <input 
                    type='text'
                    name='title'
                    placeholder='Título da anotação:'
                />
            </div>

            <div className={styles.container_input}>
                <label htmlFor='description'>Descrição:</label>
                <textarea name='description' value="oii textarea">sdasd</textarea>
            </div>
            
            <input type="submit" value="Registrar" />
        </form>
    )

}

export default Form