import { Link, Outlet } from "react-router-dom";

function Main(){
    return(
        <>
            <div className="conatiner" >
                <div className="row" style={{display:"flex",backgroundColor:"bisque"}} >
                    <div className="col-4">
                        <img src="https://th.bing.com/th?id=OIP.uKc7D9MMR7bpjjklYE-tZwHaH9&w=241&h=259&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" width={"20%"}  />
                    </div>
                    <div className="col" style={{marginLeft:"2%",padding:"1%"}}>
                        <Link to='/addone'>Add One Task</Link>
                    </div>
                    <div className="col" style={{marginLeft:"2%",padding:"1%"}}>
                        <Link to='/addmany'>Add many Task</Link>
                    </div>
                    <div className="col" style={{marginLeft:"2%",padding:"1%"}}>
                        <Link to='/update'>update One Task</Link>
                    </div>
                    <div className="col" style={{marginLeft:"2%",padding:"1%"}}>
                        <Link to='/delete'>Delete</Link>
                    </div>
                </div>
                <div className="row" style={{width:"100%",height:"60vh"}}>
                  
                  <Outlet />
                 
                    
                </div>
            </div>
        </>
    )
}

export { Main};