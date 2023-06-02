import React from 'react';
import Repo from "../../../components/Repo";
import Link from "next/link";
import {Suspense} from 'react'
import RepoDirs from "../../../components/RepoDirs";

const RepoPage = ({params:{name}}) => {
    return (
        <div className='card'>
            {/*<h2>REPO</h2>*/}
            {/*<p>{params.name}</p>*/}
            <Link href="code/repos" className='btn btn-warning'>Go Back</Link>
            <Suspense fallback={<div>Loading Repo</div>}>
                <Repo name={name}/>
            </Suspense>

            <Suspense fallback={<div>Loading Directory...</div>}>
            <RepoDirs name={name}/>
            </Suspense>
        </div>
    );
};

export default RepoPage;