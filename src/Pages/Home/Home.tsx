import Header from "../../Components/Header/Header"
import SideNav from "../../Components/SideNav/SideNav"
import TaskList from "../../Components/TaskList/TaskList"

function Home() {
    return <div className="App">
        <div className="aside">
            <SideNav />
        </div>
        <div className="header-body-flex Header">
            <Header />
            <div className="TaskList01">
                <TaskList />
            </div>
        </div>
    </div>
}

export default Home