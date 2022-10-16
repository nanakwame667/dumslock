import React from 'react'

interface Props{
    border:string;
    color:string;
    children?:React.ReactNode;
    height:string;
    onClick: ()=>void;
    radius:string;
    width:string;
    textColor:string;
    icon:string;
}


const AppButton:React.FC<Props> = ({
    border,
    color,
    textColor,
    children,
    height,
    onClick,
    radius,
    width,
    icon

}) => {
  return (
    <button
        onClick={onClick}
        style={{
            backgroundColor: color,
            border,
            borderRadius: radius,
            height,
            width,
            color:textColor,
        }}
    >
        <img src={icon}/>
        {children}
    </button>
  )
}

export default AppButton;