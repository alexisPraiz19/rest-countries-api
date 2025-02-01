// Herramientas React
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import { BrowserRouter, Routes, Route } from "react-router"

// Consumo del contexto con la información de cada país
import DataCountriesProvider from "./context/DataCountries"

// Componentes de complementación
import App from "./routes/app/App"
import ErrorPath from "./routes/ErrorPath"

// Estilos
import "./css/index.css"

const root = createRoot(document.getElementById("app"));

root.render(
        <BrowserRouter>
            <DataCountriesProvider>
                <Routes>
                    <Route path="*" element={<ErrorPath/>} />
                    <Route index path="/" element={ <App/> } errorElement={<Error/>} />
                    <Route path="details" element={<h1>Renderizado detalles</h1>} />
                </Routes>
            </DataCountriesProvider>
        </BrowserRouter>
)