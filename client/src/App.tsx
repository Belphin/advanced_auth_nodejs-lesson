import React, { FC, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import LoginForm from "./components/LoginForm";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";

const App: FC = () => {
	const { store } = useContext(Context);
	const [users, setUsers] = useState<IUser[]>([]);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			store.checkAuth();
		}
	}, []);

	async function getUsers() {
		try {
			const response = await UserService.fetchUsers();
			setUsers(response.data);
		} catch (e) {
			console.log(e);
		}
	}

	if (store.isLoading) {
		return <div>Loading...</div>;
	}

	if (!store.isAuth) {
		return <LoginForm />;
	}

	return (
		<div>
			<h1>
				{store.isAuth
					? `User is authorized ${store.user.email}`
					: "User not authorized"}
			</h1>
			<button onClick={() => store.logout()}>Logout</button>
			<div>
				<button onClick={getUsers}>Get users list</button>
			</div>
			<table>
				{users.map((user) => (
					<tr key={user.id}>
						<td>{user.email} </td>
						<td>{user.isActivated ? "activated" : "not activated"}</td>
					</tr>
				))}
			</table>
		</div>
	);
};

export default observer(App);
