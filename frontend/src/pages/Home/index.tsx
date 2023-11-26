import { Outlet } from "react-router-dom";
import AppShell from "../../components/core/AppShell";
import Header from "../../components/core/Header";
import MainContentBox from "../../components/core/MainContentBox";

const Home = () => {
    return (
        <AppShell>
            <Header />
            <MainContentBox>
                <Outlet />
            </MainContentBox>
        </AppShell>
    );
}


export default Home;