import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();
    console.log(router);
    return (
        <ul>
            <li>
                <p>Organisation: {router.query.organisation}</p>
            </li>
            <li>
                <p>Repository: {router.query.repository}</p>
            </li>
        </ul>
    );
}
