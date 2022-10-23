import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import Head from 'next/head'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'


interface Signupdata {
    email: string,
    password: string
}

const Signup : React.FC = ()=>{
    const {user, signup} = useAuth();
    console.log(user);
    const router = useRouter();

    const [data, setData] = useState<Signupdata>({
        email: '',
        password: ''
    })

    const handleSignup = async (e : any) =>{
        e.preventDefault()
        try{
            await signup(data.email, data.password )
            router.push('/login');
        }catch(err){
            console.log(err)
        }
        console.log(data)
    }

    return (
        <div style={{width:'40%', margin:'auto'}}>
            <Head>
                <title>Signup</title>
                <meta name='keyword' content='Signup'/>
            </Head>
            <h1 className='text-center my-3'>Signup</h1>
            <Form onSubmit={handleSignup}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                     onChange={(e: any) => setData({...data, email: e.target.value})}
                     value={data.email}
                     required
                     type='email'
                     placeholder='Email Address'
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                     onChange={(e: any) => setData({...data, password: e.target.value})}
                     value={data.password}
                     required
                     type='password'
                     placeholder='Password'
                    >
                    </Form.Control>
                </Form.Group>
                <Button  variant='dark' type='submit' >Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;