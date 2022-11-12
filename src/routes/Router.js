import MainLayout from 'layout/MainLayout';
import BulkRenting from 'pages/BulkRenting/BulkRenting';
import { Routes, Route, Navigate } from 'react-router-dom'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<BulkRenting />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
