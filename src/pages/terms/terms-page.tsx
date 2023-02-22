import {Sidebar} from '../../components/sidebar/sidebar';
import termsJson from '../../data/terms-of-use.json'
import {Paragraph} from '../../ui/paragraph/paragraph';

import styles from './terms-page.module.css'

export const TermsPage = () => (
    <div className={styles.wrapper}>
        <h1>Правила пользования</h1>
        <Paragraph items={termsJson.paragraphs} main={true}/>
    </div>
);
