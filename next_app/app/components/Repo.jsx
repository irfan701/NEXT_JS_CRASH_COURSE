import {FaCodeBranch, FaEye, FaStar} from "react-icons/fa";
import Link from "next/link";

async function fetchRepo(name) {

    const response=await fetch(`https://api.github.com/repos/irfan701/${name}`)
    await new Promise((resolve,reject)=>setTimeout(resolve,1000))
    const repo= await response.json()
   return repo
}


const Repo = async ({name}) => {
   const item= await fetchRepo(name)
   // console.log(item)
    return (
        <div>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    {item.description}
                    <br/>

                    <span> <FaStar/>  {item.stargazers_count}</span><br/>
                    <span> <FaCodeBranch/>{item.forks_count}</span><br/>
                    <span> <FaEye/> {item.watchers_count}</span><br/>


                </p>

            </div>
        </div>
    );
};

export default Repo;