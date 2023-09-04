import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import { useAppSelector } from '../../../app/hooks';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { selectCategories } from '../categorySlice';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 1, renderCell: renderNameCell },
  { field: 'description', headerName: 'Description', flex: 1 },
  { field: 'createdAt', headerName: 'Created At', flex: 1 },
  { field: 'isActive', headerName: 'Active', flex: 1, type: "boolean", renderCell: renderIsActiveCell },
  { field: 'id', headerName: 'Actions', flex: 1, renderCell: renderActionsCell },
];

function renderNameCell(rowData: GridRenderCellParams) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`category/edit/${rowData.id}`}
    >
      <Typography color={"primary"}>
        {rowData.value}
      </Typography>
    </Link>
  )
}

function renderIsActiveCell(rowData: GridRenderCellParams) {
  return (
    <Typography color={rowData.value ? "primary" : "error"}>
      {rowData.value ? "Active" : "Inactive"}
    </Typography>
  )
}

function renderActionsCell(rowData: GridRenderCellParams) {
  return (
    <IconButton
      color="error"
      onClick={() => console.log("Delete")}
      aria-label='delete'
    >
      <DeleteIcon />
    </IconButton>
  )
}

export const TableCategory = () => {
  const initialState = {
    pagination: {
      paginationModel: { pageSize: 5 },
    },
  }

  const slotParams = {
    slots: { toolbar: GridToolbar },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        quickFilterProps: { debounceMs: 500 }
      },
    }
  }

  const pageSize = [2, 5, 10, 15, 25, 100]

  const categories = useAppSelector(state => selectCategories(state))

  const rows: GridRowsProp = categories.map(category => ({
    id: category.id,
    name: category.name,
    description: category.description,
    createdAt: new Date(category.created_at).toLocaleDateString('pt-BR'),
    isActive: category.is_active
  }))

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows}
        columns={columns}
        initialState={initialState}
        pageSizeOptions={pageSize}
        checkboxSelection
        disableRowSelectionOnClick
        slots={slotParams.slots}
        slotProps={slotParams.slotProps}
      />
    </Box>
  );
}
