import React, { FunctionComponent } from 'react'

interface IfProps {
  value: any
}

const If: FunctionComponent<IfProps> = ({ value, children }) => {
    if (value) {
        return <>{children}</>;
    } else {
        return null;
    }
}

export default If
