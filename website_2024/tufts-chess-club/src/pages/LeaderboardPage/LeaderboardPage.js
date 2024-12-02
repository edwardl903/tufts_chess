import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Default leaderboard type ('daily')
        fetchAndDisplayLeaderboard('daily');
    }, []);

    const fetchAndDisplayLeaderboard = async (leaderboardType) => {
        try {
            setLoading(true);
            const response = await fetch('https://api.chess.com/pub/leaderboards');
            const data = await response.json();

            if (data && data[leaderboardType]) {
                const playersWithCountryNames = await fetchCountryNames(data[leaderboardType]);
                setLeaderboardData(playersWithCountryNames);
            } else {
                throw new Error('Invalid leaderboard type or data structure in the API response');
            }
        } catch (error) {
            console.error('Error fetching leaderboard:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchCountryNames = async (players) => {
        const playerPromises = players.slice(0, 50).map(async (player) => {
            const response = await fetch(player.country);
            const countryData = await response.json();
            return { ...player, country: countryData.name };
        });
        return Promise.all(playerPromises);
    };

    const renderLeaderboardTable = () => {
        return leaderboardData.map((player, index) => (
            <tr key={player.username}>
                <td>{index + 1}</td>
                <td>{player.username}</td>
                <td>{player.score}</td>
                <td>{player.country || 'N/A'}</td>
            </tr>
        ));
    };

    return (
        <div>
            <h1>Chess.com Leaderboards</h1>
            <div id="buttons">
                <button onClick={() => fetchAndDisplayLeaderboard('daily')}>Daily</button>
                <button onClick={() => fetchAndDisplayLeaderboard('live_rapid')}>Rapid</button>
                <button onClick={() => fetchAndDisplayLeaderboard('live_blitz')}>Blitz</button>
                <button onClick={() => fetchAndDisplayLeaderboard('live_bullet')}>Bullet</button>
            </div>

            {loading ? (
                <p>Loading leaderboard...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <table id="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Score</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>{renderLeaderboardTable()}</tbody>
                </table>
            )}
        </div>
    );
};

export default Leaderboard;
