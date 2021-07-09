interface Props {
    length: number;
    text: string;
}

export default function ShortText({ length, text }: Props): JSX.Element {
    return (
        <p>
            {
                text.length > length
                    ? text.substring(0, length) + '...'
                    : text
            }
        </p>
    )
}