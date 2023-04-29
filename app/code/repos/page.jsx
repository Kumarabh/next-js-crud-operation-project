import Link from "next/link";

const ReposPage = async() => {

    const repos = await fetchRepos();

     return (
    <>
        <p className="text-header">Repositories</p>
        <div className="card-container">
        {repos.map((repo, index) => {
            return (
                <div className="card">
                <div className="card-header">
                    <Link href={`/code/repos/${repo.name}`}>{repo.name}</Link>
                </div>
                <div className="card-body">
                    {repo.description || 'No description added to this repo.'}
                </div>
                </div>
            )
        })}
        </div>
    </>
  )
}

const fetchRepos = async() => {
    const url = 'https://api.github.com/users/kumarabh/repos'
    const response = await fetch(url, {next: {revalidate: 60}});
    
    const repos = await response.json();
    return repos;

}

export default ReposPage