import React from 'react'

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    // Bu sekilde kullanabilir ancak user`in hic bir zaman null olamama durumuda olabilir asagdaki kullanimda bir problem yok
    // const [user, setUser] = React.useState<null | AuthUser>(null)
    // ancak user hicbir zaman null olamazsa dogru kullanim sekli su sekilde olur

    const [user, setUser] = React.useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Azat',
            email: 'asd@asd.com',
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>

            <div>User name is {user.name} </div>
            <div>User email is {user.email} </div>
        </div>
    )
}

export default User
