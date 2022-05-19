import React from 'react'
import "./Loader.css"
import { CircularProgress } from '@mui/material'

export default function Loader() {
	return (
		<div className="loader">
			<CircularProgress color="secondary" />
		</div>
	)
}
