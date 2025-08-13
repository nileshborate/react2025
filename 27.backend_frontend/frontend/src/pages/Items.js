import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { Add, Delete, Edit, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Items = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({ title: '', description: '' });
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [editing, setEditing] = useState(null); // item or null

  const load = async () => {
    const { data } = await api.get('/api/items');
    setRows(data);
  };

  const handleOpen = async (item = null) => {
    setEditing(item);
    setForm(
      item
        ? { title: item.title, description: item.description || '' }
        : { title: '', description: '' }
    );
    setOpen(true);
  };
  const handleClose = async () => {
    setOpen(false);
  };
  const save = async () => {
    if (editing) {
      await api.put(`/api/items/${editing.id}`, form);
    } else {
      await api.post('/api/items', form);
    }
    handleClose();
    load();
  };

  const logout = () => {
    localStorage.removeItem('token');
    nav('/login');
  };

  const remove = async (id) => {
    await api.delete(`/api/items/${id}`);
    load();
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Paper sx={{ p: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h5">Items</Typography>
          <Stack direction="row" spacing={1}>
            <Button
              startIcon={<Add />}
              variant="contained"
              onClick={() => handleOpen()}
            >
              Add Item
            </Button>
            <Button startIcon={<Logout />} color="secondary" onClick={logout}>
              Logout
            </Button>
          </Stack>
        </Stack>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={80}>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right" width={140}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id} hover>
                <TableCell>{r.id}</TableCell>
                <TableCell>{r.title}</TableCell>
                <TableCell>{r.description}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpen(r)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => remove(r.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={4}>
                  <Typography variant="body2">
                    No items. Click “Add Item”.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <Dialog open={open} fullWidth maxWidth="sm">
          <DialogTitle>{editing ? 'Edit Item' : 'Add Item'}</DialogTitle>
          <DialogContent>
            <Box mt={1} display="grid" gap={2}>
              <TextField
                label="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <TextField
                label="Description"
                multiline
                minRows={3}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={save}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Container>
  );
};

export default Items;
