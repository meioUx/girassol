import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../config/firebase";

export function Subscribe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubscribe(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Cadastrado com suceso!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error:${errorCode}\n${errorMessage}`)
            });
    }
    return (
        <form onSubmit={handleSubscribe}>
            <input
                type="text"
                value={name}
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
            />
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