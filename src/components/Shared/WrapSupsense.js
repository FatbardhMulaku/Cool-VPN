import React, { Suspense } from 'react';
import PushSpinner from "./SpinnerL";

function WrapSupsense({children}) {
	return (
		<Suspense fallback={<PushSpinner />}>
      		{children}
    	</Suspense>
	)
}

export default WrapSupsense;