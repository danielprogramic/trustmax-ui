import {Heading} from "@chakra-ui/react";

type Props = {
    lighter: string;
    bolder: string;
    size?: number | string;
}

export default function Logo({ lighter, bolder, size }: Props) {
    return (
        <Heading as='h1' fontWeight="normal" fontSize={size} color="text.primary">
            {lighter}
            <Heading as='span' fontSize={size} fontWeight="bold">{bolder}</Heading>
        </Heading>
    )
}

Logo.defaultProps = {
    size: '100px',
}
