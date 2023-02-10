import styles from './SignUp.module.scss'

export default function SignUp({modale}){
    return(
        <div className={styles.signup} style={modale ? {transform: 'translateY(-50%)'} : {transform: 'translateY(100%)'}}>
            
        </div>
    )
}