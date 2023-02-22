import styles from './footer.module.css'
import { Icon } from '../../ui/icon/icon'
import fbIco from '../../assets/img/ico-fb.svg'
import instIco from '../../assets/img/ico-inst.svg'
import vkIco from '../../assets/img/ico-vk.svg'
import inIco from '../../assets/img/ico-in.svg'

export const Footer = () => (
    <div className={styles.container}>
        <div className={styles.footerLine}/>
        <div className={styles.content}>
            <p className={styles.footerText}>
                © 2020-2023 Cleverland. Все права защищены.
            </p>
            <div className={styles.socials}>
                <Icon name='Facebook' src={fbIco} link='#'/>
                <Icon name='Instagram' src={instIco} link='#'/>
                <Icon name='Facebook' src={vkIco} link='#'/>
                <Icon name='Facebook' src={inIco} link='#'/>
            </div>
        </div>
    </div>
)
