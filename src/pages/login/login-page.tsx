import {Link, useLocation, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login-page.css'
import {FormEvent, useState} from "react";
import {login, registration} from "../../api/user-api";
import {useAppDispatch} from "../../hooks/redux";
import {userSlice} from "../../store/slices/user-slice";


export const LoginPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const location = useLocation()
    const isLogin = location.pathname === '/login'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: FormEvent) => {
        try {
            let data : any;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }

            const userData : UserTokenData = {
                id: data?.id,
                email: data?.email,
                role: data?.role
            }

            const {setAuthUser} = userSlice.actions
            if (data) dispatch(setAuthUser(userData))
            navigate('/books/all')
        } catch (e: any) {
            alert(e.response.data.message)
        }

    }

    return (
        <div className="loginBlock mx-auto h-100 mt-5 p-3 d-flex flex-column align-items-center">
            <h1 className="blockTitle mb-4 mx-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
            <Form onSubmit={handleSubmit} className="w-100 d-flex flex-column align-items-center">
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <Form.Text className="text-muted">
                        Пароль должен состоять из 8 и более символов и содержать хотябы одну цифру.
                    </Form.Text>
                </Form.Group>
                { !isLogin && <>
                    <Form.Group className="mb-3 w-100" controlId="formBasicName">
                        <Form.Label>Имя: </Form.Label>
                        <Form.Control type="text" placeholder="Имя"/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formBasicSurName">
                        <Form.Label>Фамилия: </Form.Label>
                        <Form.Control type="text" placeholder="Фамилия"/>
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formBasicCategory">
                        <Form.Label>Любимая категория книг: </Form.Label>
                        <Form.Control type="text" placeholder="Категория"/>
                    </Form.Group>
                </>}
                <Form.Group className="w-100 mb-1 d-flex align-items-center justify-content-between" controlId="formBasicCheckbox">
                    <Button className="" variant="primary" type="submit">
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                    <Form.Check type="checkbox" label="Запомнить меня" />
                </Form.Group>
                <div className="w-100 d-flex ">
                    {
                        isLogin ?
                            <span>Нет аккаунта? <Link to='/registration'>Зарегистрироваться</Link></span> :
                            <span>Уже есть аккаунт? <Link to='/login'>Войти</Link></span>
                    }
                </div>
            </Form>
        </div>
    );
};
