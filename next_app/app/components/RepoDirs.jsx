import {FaCodeBranch, FaEye, FaStar} from "react-icons/fa";
import Link from "next/link";


async function fetchRepoContent(name) {

    const response=await fetch(`https://api.github.com/repos/irfan701/${name}/contents`)
    await new Promise((resolve,reject)=>setTimeout(resolve,1000))
    const contents= await response.json()
    return contents
}

const  RepoDirs =async ({name}) => {
   const contents= await fetchRepoContent(name)
   const dirs=contents.filter((content)=>content.type==='dir')
    return (
        <div>
         <h3>Directories</h3>
            <ul>
                {dirs.map((dir)=>{
                  return <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default RepoDirs;




