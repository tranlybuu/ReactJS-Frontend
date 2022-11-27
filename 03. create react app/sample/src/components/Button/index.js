import clsx from 'clsx'
import styles from './Button.module.css'

function Button() {
    return (
        <>
            <button className={styles.btn}>Click me</button>
            {/* Cách để thêm nhiều class thủ công */}
            <button className={[styles.btn, styles.active].join(' ')}>Click me</button>
            <button className={`${styles.btn} ${styles.unactive}`}>Click me</button>
            <br />
            {/* Dùng thư viện */}
            <button className={clsx(styles.btn, styles.active)}>Click me</button>

        </>
    )
}

export default Button

// // 
// classnames
// clsx
