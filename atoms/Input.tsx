import React, { useState } from 'react'
import {cva} from "class-variance-authority"
import { EyeIcon,EyeSlashIcon, CheckIcon } from '@heroicons/react/24/outline'
import { FieldError } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input'
import { E164Number } from 'libphonenumber-js/types';

const styles = {
    container : cva(
        'flex flex-col ',
        {
            variants : {
                type : {
                    text : "",
                    number : '',
                    email : '',
                    password:"",
                    phone :"",
                    checkbox : '!pt-2 !flex-row !flex-row-reverse justify-end items-center'
                }
            }
        }
    ),
    containerInput :  cva(
        'rounded-md bg-color-input overflow-hidden py-1 px-2 flex  items-center gap-1',
        {
            variants : {
                type : {
                    text : "",
                    number : '',
                    email : '',
                    password:"",
                    phone :"",
                    checkbox : 'bg-transparent border-none py-0 px-1 justify-center '
                },
                error : {
                    true : 'border border-red-700'
                }
            }
        }
    ),
    input :  cva(
        ' outline-none  bg-transparent w-full',
        {
            variants : {
                type : {
                    text : "",
                    number : '',
                    email : '',
                    password:"",
                    phone :"",
                    checkbox : 'min-h-[1.5rem] min-w-[1.5rem] rounded-full m-auto  border-2 border-color-theme-2 appearance-none checked:bg-color-theme-2 cursor-pointer peer z-10 checked:bg-transparent'
                },
                error : {
                    true :""
                }
            },
            compoundVariants: [
                {
                    type:"checkbox",
                    error : true,
                    className : "outline-none"
                }
            ]
        }
    )
}

type Props<T> = {
    label? : string | React.ReactNode;
    type : "text" | "number" | "checkbox" | "email" | "password"|"phone";
    errorMessage : FieldError | undefined | string;
    yup : {
        name : string;
        onBlur : (e:React.ChangeEvent<HTMLInputElement>)=>void;
        onChange : (e: React.ChangeEvent<HTMLInputElement>)=>void;
        ref : (e:HTMLInputElement)=>void;
    };
    icon?:React.ReactNode;
    placeholder? : string;
}

const Input = <T="text",>(props: Props<T>) => {
    const {label,  type, yup,errorMessage,icon, placeholder } = props
    const [seePassword, setSeePassword] = useState<boolean>(false)
    const error = errorMessage?true:false
    let input
    switch(type){
        case "text":
        case "password":
        case "number":
        case "email":
        case "checkbox":
            input = <input className={`${styles.input({type,error})}`} placeholder={placeholder} type={(type=="password"&&seePassword)?"text":type}  {...yup}/>
        break;

    }

    return (
        <>
            <section className={styles.container({type})}>
                {label && (<label className=''>{label}</label>)}
                <div className={`${styles.containerInput({type,error})} relative`}>
                    {icon && (<span >{icon}</span>)}
                    {input}
                    {(type=="checkbox")&&(<CheckIcon className=' w-4  absolute top-[20%] hidden peer-checked:block'/>)}
                    {type=="password"&&(<span onClick={()=>setSeePassword(!seePassword)} className='h-4 w-4 cursor-pointer'>
                        {seePassword? <EyeSlashIcon />:<EyeIcon /> }</span>
                    )}
                </div>
            </section>
                {errorMessage && (<p className='text-sm text-red-600'>{errorMessage?.toString()}</p>)}
        </>
  )
}

export default Input