import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import { NotFoundPage } from './pages/NotFoundPage';
import { IndexPage } from './pages/IndexPage';
import { AboutMePage } from './pages/AboutMePage';
import { ContactPage } from './pages/ContactPage';
import { TranslationServicesPage } from './pages/TranslationServicesPage';
import { PricePage } from './pages/PricePage';

const validRoutes = [
    "/", "/o-meni", "/kontakt", "/usluge-prevodjenja", "/cjenovnik"
];

const RouteHandler = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const path = location.pathname;
        if (!validRoutes.includes(path)) {
            navigate('/nf');
        }
    }, [location, navigate]);

    return null;
};

export const AppRoutes = () => {
    return (
        <Router>
            <Header />

            <RouteHandler />

            <Routes>
                <Route path="nepoznato" element={<NotFoundPage />} />
                <Route path="/" element={<IndexPage />} />
                <Route path="o-meni" element={<AboutMePage />} />
                <Route path="kontakt" element={<ContactPage />} />
                <Route path="usluge-prevodjenja" element={<TranslationServicesPage /> }/>
                <Route path="cjenovnik" element={<PricePage /> }/>
            </Routes>

            <Footer />
        </Router>
    );
}