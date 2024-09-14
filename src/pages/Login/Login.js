import { useState } from "react";
import { useUser } from "../../context/user";

export function Login() {
    const { signIn } = useUser()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault()
        if (!email || !password) {
            alert("Favor preencher os campos")
            return
        }
        signIn({
            email,
            password
        })
    }

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                value={password}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
    );
}