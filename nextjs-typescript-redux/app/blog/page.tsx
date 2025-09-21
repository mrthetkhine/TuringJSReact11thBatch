'use client'
import styles from './blog.module.css'
import useSWR from 'swr'

const fetcher = (url:any) => fetch(url)
    .then((r) => r.json())
export default function Page()
{
    const { data, error, isLoading } = useSWR(
        'https://jsonplaceholder.typicode.com/users',
        fetcher
    )

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            {data.map((user: { id: string; name: string }) => (
                <div key={user.id} className={styles.blog}>{user.name}</div>
            ))}
        </div>
    )
}
