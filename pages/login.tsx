import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import Head from 'next/head'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

interface LoginData {
    email: string,
    password: string
}

const Login : React.FC = ()=>{
    const [data, setData] = useState<LoginData>({
        email: '',
        password: ''
    })
    const router = useRouter()
    const {user, login} = useAuth();

    const handleLogin = async (e : any) =>{
        e.preventDefault()
        try{
            await login(data.email, data.password)
            router.push("/dashboard")
        }
        catch(err)
        {
            console.log(err);
        }
        console.log(data)
    }

    return (
        <div style={{width:'40%', margin:'auto'}}>
            <Head>
                <title>Login</title>
                <meta name='keyword' content='login page'/>
            </Head>
            <h1 className='text-center my-3'>Login</h1>
            <Form onSubmit={handleLogin}>
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
                <Button  variant='primary' type='submit' >Login</Button>
            </Form>
        </div>
    )
}

export default Login;