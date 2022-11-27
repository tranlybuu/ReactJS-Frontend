import clsx from 'clsx'
import styles from './NewButton.module.scss'

function NewButton() {
    const classes = clsx(styles.btn, styles.active)
    return (
        <>
            <button className={classes}>Click me</button>
        </>
    )
}

export default NewButton

// SASS
