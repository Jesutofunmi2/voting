import React, { Fragment } from 'react'
import secondaryComponents from '../components/secondaryComponents';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <secondaryComponents.Navigation />
      <div>{children}</div>
    </Fragment>
  )
}

export default Layout;