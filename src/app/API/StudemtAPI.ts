
// import axios from "axios";

// export interface Student {
//   id: number;
//   firstname: string;
//   lastname: string;
//   email: string;
//   phone: string;

// }

// export interface StudentsResponse {
//   data: Student[];
//   [key: string]: any;

// }

// export async function getStudents(): Promise<StudentsResponse> {
//     try {
//     const response = await axios.get("http://localhost:3001/data");

//     // ✅ Chuẩn hóa kết quả trả về
//     const result: StudentsResponse = Array.isArray(response.data)
//       ? { data: response.data }
//       : response.data;

//     return result;
//   } catch (error) {
//     console.error("Lỗi khi lấy danh sách sinh viên:", error);
//     throw error;
//   }
// }

