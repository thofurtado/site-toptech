import { IoMdLogIn } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg'
import { RiCloseLine  } from 'react-icons/ri'

import styles from './styles.module.scss'

export function SignInButton() {
    const isUserLoggedIn = false;
    return isUserLoggedIn ? (
        <button type="button" className={styles.signInButton}>
            <CgProfile />
            Thomás Furtado
            <RiCloseLine className={styles.closeIcon}/>
        </button>
    ) : (
        <button type="button" className={styles.signInButton}>
        <IoMdLogIn />
        Painel de Clientes
    </button>
    )
}
