const username = 'xbrunoohs';
const repository = 'flow-events';
const userUrl = `https://api.github.com/users/${username}`;
const issuesUrl = `https://api.github.com/repos/${username}/${repository}/issues`;

function fetchUserData() {
    fetch(userUrl)
        .then(response => response.json())
        .then(data => {
            const name = data.name;
            const followers = data.followers;

            document.getElementById('user-name').textContent = name;
            document.getElementById('user-followers').textContent = `Seguidores: ${followers}`;
        })
        .catch(error => console.error('Error fetching user data:', error));
}

function fetchIssuesData() {
    fetch(issuesUrl)
        .then(response => response.json())
        .then(issues => {
            const issuesContainer = document.getElementById('issues-container');
            issuesContainer.innerHTML = '';

            issues.forEach(issue => {
                const issueCard = document.createElement('div');
                issueCard.className = 'post';
                issueCard.innerHTML = `
                    <h3>${issue.title}</h3>
                    <p><strong>ID:</strong> ${issue.id}</p>
                    <p><strong>Status:</strong> ${issue.state}</p>
                    <p><strong>Descrição:</strong> ${issue.body ? issue.body.substring(0, 100) + '...' : 'Sem descrição'}</p>
                `;
                issuesContainer.appendChild(issueCard);
            });
        })
        .catch(error => console.error('Error fetching issues data:', error));
}

fetchUserData();
fetchIssuesData();
