import { Box, Container } from "@mui/material"

interface LayoutParams {
    children: React.ReactNode
}
export const Layout = ({ children }: LayoutParams) => {
    return (
        <Box maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Container>{children}</Container>
        </Box>
    )
}