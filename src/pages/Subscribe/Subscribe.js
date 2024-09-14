import { useState } from "react";
import { useUser } from "../../context/user";

export function Subscribe() {
    const { signUp } = useUser()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubscribe(e) {
        e.preventDefault()
        if (!email || !password) {
            alert("Favor preencher os campos")
            return
        }
        signUp({
            email,
            password
        })
    }

    return (
        <form onSubmit={handleSubscribe}>
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
            <button type="submit">Cadastrar</button>
        </form>
    );
}