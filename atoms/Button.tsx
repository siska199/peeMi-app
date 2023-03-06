import { cva ,VariantProps} from 'class-variance-authority'
import React from 'react'


const buttonStyles = cva(
  'text-center px-4 py-2 capitalize rounded-md font-bold	',
  {
      variants : {
        color : {
          ["theme-1"] : "bg-color-theme-1 text-white hover:bg-color-theme-1/70 ",
          ["theme-2"] : "bg-color-theme-2 text-white hover:bg-color-theme-2/70",
          ["theme-3"] : "bg-color-theme-2 text-white hover:bg-color-theme-3/70",
        },
        fullWidth:{
          true:'w-full',
          false : 'w-full md:w-auto'
        }
    },
    defaultVariants:{
      color : 'theme-2'
    }
  }
)

interface Props  extends VariantProps<typeof buttonStyles>{
  label : string;
  color : "theme-1" | "theme-2" | "theme-3";
  fullWidth : boolean;
  onClick:()=>void;

}
const Button = (props: Props) => {
  const {label,color, fullWidth, onClick,} = props
  return (
    <button onClick={onClick} className={buttonStyles({color,fullWidth})}>{label}</button>
  )
}

export default Button