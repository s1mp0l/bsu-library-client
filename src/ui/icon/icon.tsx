interface IIconProps {
    name: string,
    src: string,
    link: string
}

export const Icon = ( {name, src, link} : IIconProps ) => (
    <a href={link} aria-label={name}><img src={src} alt={name} className="icon"/></a>
)
