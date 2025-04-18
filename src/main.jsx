import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StockImage from './Component/StockImage/StockImage.jsx'
import MainDetailcomponent from './Component/Company_Details/MainDetail.jsx'
import CompanyDetails from './Component/Company_Details/ComapnyDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompanyDetails />
  </StrictMode>,
)
