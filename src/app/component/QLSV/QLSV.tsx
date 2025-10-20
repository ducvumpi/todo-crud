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
import { useState } from "react";

interface DSSV {
  id: number;
  fullname: string;
  birthday: string;
  idcard: number;
  classsv: string;
}

// Hàm tạo dữ liệu (giống constructor)
function createData(
  id: number,
  fullname: string,
  birthday: string,
  idcard: number,
  classsv: string
): DSSV {
  return { id, fullname, birthday, idcard, classsv };
}
export default function QLSV() {
  const [rows, setRows] = useState<DSSV[]>([
    createData(1, "Nguyen Van A", "2000-01-01", 123456789, "10A"),
    createData(2, "Tran Thi B", "2000-02-02", 987654321, "10B"),
  ]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [currentStudent, setCurrentStudent] = useState<DSSV>({
    id: 0,
    fullname: "",
    birthday: "",
    idcard: 0,
    classsv: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentStudent({ ...currentStudent, [name]: value });
  };

  const handleAddStudent = () => {
    const newID = rows.length + 1;
    const newrows = { ...currentStudent, id: newID };
    setRows((prev) => [...prev, newrows]);
    setOpenAdd(false);
  };
  const handleClickOpenAdd = () => {
    setCurrentStudent({
      id: 0,
      fullname: "string",
      birthday: "string",
      idcard: 0,
      classsv: "string",
    });
    setOpenAdd(true);
  };
  const handleClickOpenEdit = (student: DSSV) => {
    setCurrentStudent(student);
    setOpenEdit(true);
  };
  const handleEditStudent = () => {
    setRows((prev) =>
      prev.map((student) =>
        student.id === currentStudent.id ? currentStudent : student
      )
    );
    setOpenEdit(false);
  };
  const handleDeleteStudent = (id: number) => {
    setRows((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Họ</TableCell>
              <TableCell>Tên</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.fullname}</TableCell>
                <TableCell>{student.birthday}</TableCell>
                <TableCell>{student.idcard}</TableCell>
                <TableCell>{student.classsv}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={() => handleClickOpenAdd()}
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    ➕ Thêm{" "}
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleClickOpenEdit(student)}
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    ✏️ Sửa{" "}
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleDeleteStudent(student.id)}
                    color="error"
                    sx={{ mr: 1 }}
                  >
                    🗑️ Xóa{" "}
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
            name="fullname"
            label="Họ"
            value={currentStudent.fullname}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="birthday"
            label="Ngày sinh"
            value={currentStudent.birthday}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="idcard"
            label="Số CCCD/CMND"
            value={currentStudent.idcard}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="classsv"
            label="Lớp"
            value={currentStudent.classsv}
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
          <Button
            onClick={() => setOpenAdd(false)}
            color="error"
            variant="outlined"
          >
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Sửa thông tin sinh viên</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            name="fullname"
            label="Họ"
            value={currentStudent.fullname}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="birthday"
            label="Ngày sinh"
            value={currentStudent.birthday}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="idcard"
            label="Số CCCD/CMND"
            value={currentStudent.idcard}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            name="classsv"
            label="Lớp"
            value={currentStudent.classsv}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleEditStudent()}
            variant="contained"
            color="primary"
          >
            Sửa
          </Button>
          <Button
            onClick={() => setOpenEdit(false)}
            color="error"
            variant="outlined"
          >
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
