import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { NotFoundPage } from './pages/NotFoundPage';
import { IndexPage } from './pages/IndexPage';
import { AboutMePage } from './pages/AboutMePage';
import { ContactPage } from './pages/ContactPage';
import { TranslationServicesPage } from './pages/TranslationServicesPage';

export const AppRoutes = () => {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<IndexPage />} />
                <Route path="o-meni" element={<AboutMePage />} />
                <Route path="kontakt" element={<ContactPage />} />
                <Route path="usluge-prevodjenja" element={<TranslationServicesPage /> }/>
            </Routes>
        </Router>
    );
}