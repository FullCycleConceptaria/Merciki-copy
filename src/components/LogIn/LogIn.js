import styles from './LogIn.module.scss'

export default function LogIn({modale}){
    return(
        <div className={styles.login} style={modale ? {transform: 'translateY(-50%)'} : {transform: 'translateY(100%)'}}>
            
        </div>
    )
}