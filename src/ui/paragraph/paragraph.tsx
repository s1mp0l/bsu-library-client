import styles from './paragraph.module.css'

interface IParagraph {
    text: string,
    children?: IParagraph[],
}

interface IParagraphProps {
    items: IParagraph[],
    main?: boolean
}

export const Paragraph = ({items, main}: IParagraphProps) => (
    <div>
        {items.map(i => (
            <div>
                <p className={[styles.paragraphText, main ? styles.main : ''].join(' ')}>{i.text}</p>
                <div className={styles.childWrapper}>
                    {i.children ? <Paragraph items={i.children} /> : null}
                </div>
            </div>
            )
        )}

    </div>
);
