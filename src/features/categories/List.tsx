import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { TableCategory } from './components/TableCategory'

export const ListCategory = () => {
    return (
        <Box maxWidth={'lg'} sx={{ mt: 4, mb: 4 }}>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/category/create"
                    style={{ marginBottom: "1rem" }}
                >
                    New Category
                </Button>
            </Box>
            <Box>
                <TableCategory />
            </Box>
        </Box>
    )
}