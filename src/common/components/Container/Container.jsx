import React from 'react';


export const Container = ({  children,className,width,height,padding}: any) => {
  return (
      <div style={{width:width, height:height, boxSizing:'border-box', padding:padding}}>
        {children}
      </div>
  );
};


export const FlexContainer =({children,justifyContent,alignItems})=>{
  return(
    <div style={{display:"flex",margin:'0 auto', width:'80%', flexWrap:'wrap',  marginBottom:'20px', justifyContent:justifyContent, alignItems:alignItems}}>
      {children}
    </div>
  )
}