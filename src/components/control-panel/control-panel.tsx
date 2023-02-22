import icoActiveGrid from '../../assets/img/ico-toggle-grid-active.svg'
import icoInactiveGrid from '../../assets/img/ico-toggle-grid-inactive.svg'
import icoActiveHor from '../../assets/img/icon-toggle-hor-active.svg'
import icoInactiveHor from '../../assets/img/icon-toggle-hor-inactive.svg'
import {ButtonToggleView} from '../button-toggle-wiew/button-toggle-view';
import {Search} from '../search/search';
import {SortButton} from '../sort-button/sort-button';

import styles from './control-panel.module.css'

export const ControlPanel = () => (
    <div className={styles.container}>
        <div className={styles.wrapperControls}>
            <Search/>
            <SortButton/>
        </div>
        <div className={styles.wrapperControls}>
                <ButtonToggleView horizontal={false} icoImgActive={icoActiveGrid}
                                  icoImgInactive={icoInactiveGrid}/>
                <ButtonToggleView horizontal={true} icoImgActive={icoActiveHor}
                                  icoImgInactive={icoInactiveHor}/>
        </div>
    </div>
)
