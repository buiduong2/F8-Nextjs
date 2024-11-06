import { ThemeProvider } from '@material-tailwind/react'
import App from './App'
import './style.css'
import { ReactFlowProvider } from '@xyflow/react'



export default function Main() {
	return (
		<div>
			<ThemeProvider>
				<ReactFlowProvider>
					<App />
				</ReactFlowProvider>
			</ThemeProvider>
		</div>
	)
}
