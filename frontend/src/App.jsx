/**
 * Componente raiz da aplicação.
 *
 * Responsabilidades:
 * - Registrar Providers globais.
 * - Configurar notificações.
 * - Renderizar as rotas.
 */

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/contexts/AuthContext";
import AppRoutes from "@/routes/AppRoutes";

function App() {
    return (
        <AuthProvider>
            <AppRoutes />

            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={12}
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: "#ffffff",
                        color: "#1f2937",
                        border: "1px solid #e5e7eb",
                        borderRadius: "10px",
                        fontSize: "14px",
                    },
                    success: {
                        iconTheme: {
                            primary: "#16a34a",
                            secondary: "#ffffff",
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: "#dc2626",
                            secondary: "#ffffff",
                        },
                    },
                }}
            />
        </AuthProvider>
    );
}

export default App;