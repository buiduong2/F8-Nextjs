import { ThemeProvider } from '@material-tailwind/react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { ReactFlowProvider } from '@xyflow/react'
import './assets/style.css'

createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<ReactFlowProvider>
			<App />
		</ReactFlowProvider>
	</ThemeProvider>
)
