interface IIcon {
    size?: string;
    fillColor?: string;
    custom?: any;
}

export function IconCircle({
    size = "size-5",
    fillColor = "fill-white",
    custom,
}: IIcon) {
    return (
        <svg
            className={`${size} ${fillColor} ${custom}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clip-rule="evenodd"
            />
        </svg>
    );
}

export function IconArrowBack({
    size = "size-5",
    fillColor = "fill-white",
    custom,
}: IIcon) {
    return (
        <svg
            className={`${size} ${fillColor} ${custom}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path
                fillRule="evenodd"
                d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export function IconArrowForward({
    size = "size-5",
    fillColor = "fill-white",
    custom,
}: IIcon) {
    return (
        <svg
            className={`${size} ${fillColor} ${custom}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export function IconFile({
    size = "size-5",
    fillColor = "fill-white",
    custom,
}: IIcon) {
    return (
        <svg
            className={`${size} ${fillColor} ${custom} `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
        >
            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
        </svg>
    );
}
