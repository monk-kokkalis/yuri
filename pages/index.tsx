import Head from 'next/head';
import Home from 'components/Home/Home';

function Index() {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Home />
        </>
    )
}

export default Index;