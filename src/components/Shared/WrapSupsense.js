import React, { Suspense } from 'react';
import { PushSpinner } from "react-spinners-kit";

function WrapSupsense({children}) {
	return (
		<Suspense fallback={<PushSpinner size={30} color="#E42F86" />}>
      		{children}
    	</Suspense>
	)
}

export default WrapSupsense;