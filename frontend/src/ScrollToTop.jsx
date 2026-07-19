import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // يراقب المسار الحالي للموقع
    const { pathname } = useLocation();

    useEffect(() => {
        // ينقل التمرير إلى أعلى اليسار (رأس الصفحة) فوراً عند تغيير المسار
        window.scrollTo(0, 0);
    }, [pathname]); // يشتغل الـ useEffect في كل مرة يتغير فيها الرابط

    return null; // هذا المكون لا يظهر شيئاً في واجهة المستخدم
};

export default ScrollToTop;