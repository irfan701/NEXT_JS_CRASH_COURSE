import React from 'react';
import Repo from "../../../components/Repo";
import Link from "next/link";

const RepoPage = ({params:{name}}) => {
    return (
        <div className='card'>
            {/*<h2>REPO</h2>*/}
            {/*<p>{params.name}</p>*/}
            <Link href="code/repos" className='btn btn-warning'>Go Back</Link>
            <Repo name={name}/>
        </div>
    );
};

export default RepoPage;