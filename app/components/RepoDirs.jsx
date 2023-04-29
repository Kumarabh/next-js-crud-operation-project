import Link from "next/link";

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content) => content.type === 'dir');

    return (
        <div className="card">
            <p className="text-sm">
                Directories
            </p>
            <ul>
                {dirs.map((dir, index) => {
                    return (
                        <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

const fetchRepoContents = async (name) => {
    const url = `https://api.github.com/repos/kumarabh/${name}/contents`;
    // await new Promise((resolve) => setTimeout(() => {
    //     resolve();
    // }, 5000))
    const response = await fetch(url, {next: {revalidate: 60}});
    return await response.json();

}
export default RepoDirs