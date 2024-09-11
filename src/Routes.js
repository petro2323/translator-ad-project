import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { NotFoundPage } from './pages/NotFoundPage';
import { IndexPage } from './pages/IndexPage';

export const AppRoutes = () => {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </Router>
    );
}