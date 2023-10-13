import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

interface AuthButtonsProps {
    white?: boolean
}

export const AuthButtons = ({white}: AuthButtonsProps) => (
    <div className="d-flex gap-3">
        <Link to='/login'>
            <Button variant={white ? "outline-light" : "outline-dark" }>Войти</Button>
        </Link>
        <Link to='/registration'>
            <Button variant={white ? "outline-light" : "outline-dark"}>Зарегистрироваться</Button>
        </Link>
    </div>
);
