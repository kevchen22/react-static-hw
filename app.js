
class SideBar extends React.Component{
    render(){
        return(
            <div className="widgets">
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </div>
        )
    }
}

class Stats extends React.Component{
    render(){
        return(
          <div className="stats">
                <p>Name</p>
                <p>Values</p>
          </div>

        )
    }
}

class Visitors extends React.Component{
    render(){
        return(
            <div className="visitors">
                <p>Website Visitors</p>
                821
                <div className ="innerBox">
                    123
                </div>
            </div>

        )
    }
}

class App extends React.Component{
    render() {
        return(
           <div className="main">
                <SideBar />
                <Stats />
                <Stats />
                <Stats />
                <Visitors />
           </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);