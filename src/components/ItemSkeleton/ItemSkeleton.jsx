import React from "react"
import { Skeleton } from "@mui/material"

export default function ItemSkeleton() {
	return (
		<article className="item">
			<Skeleton variant="rectangle" height={250} />
			<Skeleton variant="text" width={150} height={"2.5em"} />
			<Skeleton variant="text" />
			<Skeleton variant="text" width={100} />
		</article>
	)
}
