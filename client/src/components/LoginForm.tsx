import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import { Context } from "..";

const LoginForm: FC = () => {
	const { store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<input
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				type="text"
				placeholder="Email"
			/>
			<input
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				type="password"
				placeholder="setPassword"
			/>
			<button onClick={() => store.login(email, password)}>Login</button>
			<button onClick={() => store.registration(email, password)}>
				Registration
			</button>
		</div>
	);
};

export default observer(LoginForm);
