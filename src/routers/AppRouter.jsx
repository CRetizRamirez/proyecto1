import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AccountPage from "../pages/AccountPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectPage from "../pages/ProjectPage";
import UsersPage from "../pages/admin/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/layouts/Layout";
import useAuth from "../auth/useAuth";
import roles from "../helpers/roles";

function AppRouter() {
	const { user } = useAuth();

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route
						exact
						path="/login"
						element={user ? <ProjectsPage /> : <LoginPage />}
					/>
					<Route
						exact
						path="/register"
						element={user ? <ProjectsPage /> : <RegisterPage />}
					/>
					<Route
						exact
						path="/account"
						element={user ? <AccountPage /> : <LoginPage />}
					/>
					<Route
						exact
						path="/projects"
						element={user ? <ProjectsPage /> : <LoginPage />}
					/>
					<Route
						exact
						path="/project/:proyectId"
						element={user ? <ProjectPage /> : <LoginPage />}
					/>
					<Route
						exact
						path="/admin/users"
						element={user && roles.admin==='admin'? <UsersPage /> : <LoginPage />}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default AppRouter;
