import { UserRepo } from "../@types";

const getRepositories = async () => {
    const response = await fetch("https://api.github.com/users/lucasvsouza28/repos")

    if (!response.ok) throw new Error(`[GET_USER_REPOSITORIES] ${response.statusText}`);

    const data = await response.json() as UserRepo[];

    return data;
}

export default getRepositories;
