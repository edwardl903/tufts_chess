"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Player {
  username: string;
  score: number;
  country: string;
}

const Leaderboard: React.FC = () => {

  const [leaderboardData, setLeaderboardData] = useState<Player[]>([]);
    // error & loading messages
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Default leaderboard type ('daily')
    fetchAndDisplayLeaderboard("daily");
  }, []);

  const fetchAndDisplayLeaderboard = async (leaderboardType: string) => {
    try {
      setLoading(true);
      const response = await fetch("https://api.chess.com/pub/leaderboards");
      const data = await response.json();

      if (data && data[leaderboardType]) {
        const playersWithCountryNames = await fetchCountryNames(data[leaderboardType]);
        setLeaderboardData(playersWithCountryNames);
      } else {
        throw new Error("Invalid leaderboard type or data structure in the API response");
      }
    } catch (error: any) {
      console.error("Error fetching leaderboard:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCountryNames = async (players: any[]): Promise<Player[]> => {
    const playerPromises = players.slice(0, 50).map(async (player: any) => {
      try {
        const response = await fetch(player.country);
        const countryData = await response.json();
        return { username: player.username, score: player.score, country: countryData.name };
      } catch {
        return { username: player.username, score: player.score, country: "Unknown" };
      }
    });
    return Promise.all(playerPromises);
  };

  const renderLeaderboardTable = () => {
    return leaderboardData.map((player, index) => (
      <tr key={player.username}>
        {/* visualization of the board */}
        <td className="px-4 py-2 border">{index + 1}</td>
        <td className="px-4 py-2 border">{player.username}</td>
        <td className="px-4 py-2 border">{player.score}</td>
        <td className="px-4 py-2 border">{player.country || "N/A"}</td>
      </tr>
    ));
  };

  return (
    <main>
      <Header transparent={false} />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-center mb-4 text-[#64b0e2]">Leaderboards</h1>

        {/* Buttons for leaderboard types */}
        <div className="flex justify-center space-x-4 mb-6">
        {["daily", "live_rapid", "live_blitz", "live_bullet"].map((type) => (
            <button
            key={type}
            className="px-4 py-2 bg-[#64b0e2] text-white rounded hover:bg-blue-500 transition"
            onClick={() => fetchAndDisplayLeaderboard(type)}
            >
            {type === "daily"
                ? "Daily"
                : type === "live_rapid"
                ? "Rapid"
                : type === "live_blitz"
                ? "Blitz"
                : "Bullet"}
            </button>
        ))}
        </div>

        {/* Loading, Error, or Table */}
        {loading ? (
          <p className="text-center text-gray-600">Loading leaderboard...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Rank</th>
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Score</th>
                <th className="px-4 py-2 border">Country</th>
              </tr>
            </thead>
            <tbody>{renderLeaderboardTable()}</tbody>
          </table>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Leaderboard;
