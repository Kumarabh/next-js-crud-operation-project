import Link from "next/link";
import {FaCodeBranch, FaStar, FaEye} from 'react-icons/fa'
const Repo = async({name}) => {

    const repo = await fetchRepo(name);

  return (
    <>
        <div className="card">
            <div className="card-header">
                {repo.name}
            </div>
            <div className="card-body">
                {repo.description || 'No descriptions added for this repo.'}
            </div>
            <div className="card-footer">
                <FaStar />
                <span>{repo.stargazers_count}</span>
                <FaCodeBranch />
                <span>{repo.forks_count}</span>
                <FaEye />
                <span>{repo.watchers_count}</span>
            </div>
            
        </div>
    </>
  )
}

const fetchRepo = async(name) => {
    const url = `https://api.github.com/repos/kumarabh/${name}`

    const response = await fetch(url, {next: {revalidate: 60}});
    const repo = await response.json();
    
    return repo;

}

export default Repo