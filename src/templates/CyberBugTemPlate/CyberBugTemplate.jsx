import React, { Fragment } from 'react'
import { Route } from 'react-router'
import '../../index.css'
import SidebarCyberbugs from './JiraComponents/SidebarCyberbugs'
import MenuCyberbus from './JiraComponents/MenuCyberbus'
import ModalCyberbugs from '../../components/ModalCyberbugs/ModalCyberbugs'

const CyberBugTemplate = (props) => {
  const { Component, ...restProps } = props

  return <Route {...restProps} render={(propsRoute) => {
    return <Fragment>
      <div className="jira flex">
        <SidebarCyberbugs />
        <MenuCyberbus />
        <Component {...propsRoute} />
        <ModalCyberbugs />
      </div>

    </Fragment>
  }} />
}

export default CyberBugTemplate

