"use client";

import * as React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getStudents, Student } from "@/app/API/StudemtAPI";

export default function QLSV() {
  const [rows, setRows] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [openAdd, setOpenAdd] = useState(false);

  const [currentStudent, setCurrentStudent] = useState<Student>({
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getStudents();
      setRows(data.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCurrentStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddStudent = () => {
    setRows((prev) => [...prev, { ...currentStudent, id: prev.length + 1 }]);
    setCurrentStudent({
      id: 0,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    });
    setOpenAdd(false);
  };

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Họ</TableCell>
              <TableCell align="right">Tên</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Số điện thoại</TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell align="right">{student.firstname}</TableCell>
                <TableCell align="right">{student.lastname}</TableCell>
                <TableCell align="right">{student.email}</TableCell>
                <TableCell align="right">{student.phone}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" onClick={() => setOpenAdd(true)}>
                    Thêm mới
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openAdd} onClose={() => setOpenAdd(false)}>
        <DialogTitle>Thêm sinh viên mới</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            name="firstname"
            label="Họ"
            value={currentStudent.firstname}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="lastname"
            label="Tên"
            value={currentStudent.lastname}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="email"
            label="Email"
            value={currentStudent.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="phone"
            label="Số điện thoại"
            value={currentStudent.phone}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleAddStudent}
            variant="contained"
            color="primary"
          >
            Thêm
          </Button>
          <Button onClick={() => setOpenAdd(false)} color="secondary">
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
