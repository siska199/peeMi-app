import Button from '@atoms/Button';
import Input from '@atoms/Input';
import { EnvelopeIcon, LockClosedIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';
import { yupResolver } from "@hookform/resolvers/yup";
import { validation } from '@lib/data';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

type Props = {}

const styles = {
  iconInput : "h-4"
}
const FormAuth = (props: Props) => {
  const {register, handleSubmit, formState:{errors}} = useForm<TFormAuth>({
    defaultValues :{
      name : '',
      email : '',
      password : '',
      confirmPassword : '',
      agreement:false,
      phone : '',
    },
    resolver: yupResolver(yup.object().shape({
      name : validation.name,
      email : validation.name,
      password : validation.password,
      confirmPassword : validation.confirmPassword,
      agreement:validation.agreement,
      phone : validation.phone,
    }))
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