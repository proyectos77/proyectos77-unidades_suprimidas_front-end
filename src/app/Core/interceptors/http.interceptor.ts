import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
    const token = sessionStorage.getItem('token');

    console.log('⏳ Interceptor ejecutándose para:', req.url);
    console.log('🔍 Método:', req.method);

    if (token && ['POST', 'PUT', 'PATCH', 'GET'].includes(req.method)) {
        console.log('✅ Token encontrado:', token);

        const head = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
        });

        console.log('🚀 Token agregado a la petición:', head);
        return next(head);
    }

    console.warn('⚠️ No se agregó token a la petición:', req.url);
    return next(req);
};
