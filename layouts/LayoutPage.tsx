import Head from 'next/head'
import React  from 'react'

type Props = {
    children : React.ReactNode
}

const LayoutPage = (props: Props) => {
    const {children} = props
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='container-page '>
                {children}
            </main>
        </>
    )
}

export default LayoutPage