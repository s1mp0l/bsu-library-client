import {Sidebar} from '../../components/sidebar/sidebar';
import contractJson from '../../data/contract-offer.json'
import {Paragraph} from '../../ui/paragraph/paragraph';

import styles from './contract-page.module.css'

export const ContractPage = () => (
    <div className={styles.wrapper}>
        <h1 className='blockTitle'>Договор оферты</h1>
        <Paragraph items={contractJson.paragraphs} main={true}/>
    </div>
);
