import Button from '@atoms/Button';
import Input from '@atoms/Input'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { EnvelopeIcon, LockClosedIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';

type Props = {

}

const styles = {
  iconInput : "h-4"
}
const FormAuth = (props: Props) => {
  const schema = yup.object().shape({
    name : yup.string().required("Please enter your name"),
    email : yup.string().email("Your email dosent valid").required("Please enter your email"),
    password :yup.string().required("Please enter your password").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain minimal 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
      agreement : yup.bool().oneOf([true],"Please accept this agreement")
      .required("Please accept this agreement"),
    confirmPassword : yup.string().oneOf([yup.ref("password")]).required("Please enter your confirm password"),
    phone : yup.string().required("Please enter your phone number")
            .matches(/^628[0-9]{9,13}$/,"Your phone number is invalid")
  })
  const initialStateForm = {
    name : '',
    email : '',
    password : '',
    confirmPassword : '',
    agreement:false,
    phone : '',
  }
  const {register, handleSubmit, formState:{errors}} = useForm<TFormAuth>({
    defaultValues : initialStateForm,
    resolver: yupResolver(schema)
  })

  const handleOnsubmit = (data:TFormAuth)=>{
    console.log("data: ", data)
  }
  return (
    <form className=' m-auto w-[20rem] space-y-4 '>
      <div>
        <h5 className='text-color-theme-2 '>Create Account</h5>
        <p className=''>Register than design your activity with <span className='italic font-bold'>PeeMi</span></p>
      </div>
      <div className='space-y-1'>
        <Input label={"Name"} yup={register('name')} type={"text"} errorMessage={errors?.name?.message} icon={<UserIcon className={styles.iconInput}/>}/>
        <Input label={"Email"} yup={register('email')} type={"email"} errorMessage={errors?.email?.message} icon={<EnvelopeIcon className={styles.iconInput}/>}/>
        <Input label={"Password"} yup={register('password')} type={"password"} errorMessage={errors?.password?.message} icon={<LockClosedIcon className={styles.iconInput}/>} />
        <Input label={"Confirm Password"} yup={register('confirmPassword')} type={"password"} errorMessage={errors?.confirmPassword?.message} icon={<LockClosedIcon className={styles.iconInput}/>} />
        <Input label={"Phone"} yup={register('phone')} placeholder={"example : 628111962314"} type={"text"} errorMessage={errors?.phone?.message} icon={<PhoneIcon className={styles.iconInput}/>} />
        <Input label={<p>
            I agree with <span className='font-bold'>Terms</span> and <span className='font-bold'>Privacy</span>
          </p>} 
          yup={register('agreement')} type={"checkbox"} errorMessage={errors?.agreement?.message} />
      </div>
      <div className=''>
        <Button onClick={handleSubmit(handleOnsubmit)} label={"register"} color={"theme-2"} fullWidth={false}/>
      </div>
      <p className='text-center'>Already have an accoutn <span className='font-bold underline cursor-pointer'>Log In</span></p>
    </form>
  )
}

export default FormAuth