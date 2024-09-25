import { Button } from "@mui/material"

interface ActionButtonProps {
    blok: any
}
export const ActionButtonComponent = ({ blok }: ActionButtonProps) => {
    return <Button href={blok?.Link?.cached_url}>{blok.Label}</Button>
}
export default ActionButtonComponent