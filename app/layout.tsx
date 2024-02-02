export default function Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <title>My page</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
