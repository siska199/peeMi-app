import FormAuth from '@components/auth/FormAuth'
import LayoutPage from '@layouts/LayoutPage'
import Image from 'next/image'

type Props = {}

const auth = (props: Props) => {

  return (
    <LayoutPage>
      <article className='grid md:grid-cols-2  md:gap-4 min-h-screen place-content-center m-auto'>
          <Image src={"/picture-1.png"} alt={"picture-1"} width={450} height={450} className='object-fit h-32 w-32 md:h-[25rem] md:w-[25rem]  m-auto'/>
        <FormAuth/>
      </article>  
    </LayoutPage>
  )
}

export default auth