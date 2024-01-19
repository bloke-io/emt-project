export enum RoutePath {
    Home = '/',
    Login = '/login',
    Papers = '/papers',
    Details = '/details'
}

export enum apiRoutes {
    login = 'http://localhost:1337/api/auth/local',
    papers = 'http://localhost:1337/api/science-papers',
    users = 'http://localhost:1337/api/users',
    comments = 'http://localhost:1337/api/comments'
}

export const apiUrl = 'http://localhost:1337'
export const viteUrl = 'http://localhost:5173'