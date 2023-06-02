import { FaCodeBranch,FaEye,FaStar} from "react-icons/fa";
import Link from "next/link";

async function fetchRepos() {

    const response=await fetch('https://api.github.com/users/irfan701/repos')
    await new Promise((resolve,reject)=>setTimeout(resolve,1000))
    const repos= await response.json()
    return Promise.all(repos)
}

const ReposPage = async () => {
   const repos= await fetchRepos()
    return <>
        {repos.map((item)=>{

            return  <div key={item.id} className="card" style={{width:'18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                        {item.description}
                 <br/>

                 <span> <FaStar/>  {item.stargazers_count}</span><br/>
                 <span> <FaCodeBranch/>{item.forks_count}</span><br/>
                 <span> <FaEye/> {item.watchers_count}</span><br/>


                    </p>
                    <Link href={`code/repo/${item.name}`} className="btn btn-primary">Go Repository</Link>
                </div>
            </div>
        })}
        </>

};

export default ReposPage;

