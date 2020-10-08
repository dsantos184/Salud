import React from 'react'
import withBreadcrumbs from "react-router-breadcrumbs-hoc";


const Breadcrumbs = withBreadcrumbs()(({ breadcrumbs }) => (
    <div className="breadcrumbs">  
      {breadcrumbs.map(({ breadcrumb }, index) => {

          const classesLink = breadcrumbs.length - 1 == index ? "atual color-white" : "anterior color-light-blue"
           
          return (
            <a key={index} href={breadcrumb.key}><span className={classesLink}>{breadcrumb}</span></a>          
          )
      } )}
    </div>
  ));


  export default Breadcrumbs