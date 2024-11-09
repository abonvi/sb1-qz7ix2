import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pronunciation from './pages/Pronunciation';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import BeginnerCourse from './pages/courses/BeginnerCourse';
import IntermediateCourse from './pages/courses/IntermediateCourse';
import AdvancedCourse from './pages/courses/AdvancedCourse';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pronunciation" element={<Pronunciation />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="course">
            <Route path="beginner" element={<BeginnerCourse />} />
            <Route path="intermediate" element={<IntermediateCourse />} />
            <Route path="advanced" element={<AdvancedCourse />} />
          </Route>
        </Route>
        <Route path="/admin">
          <Route path="login" element={<AdminLogin />} />
          <Route path="dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;