import React from 'react';
import './AuctionTable.css';  

const items = [
  { title: "Vintage Leica M3 Camera", bid: "$2,850", time: "2 Days left", image: "📷" },
  { title: "1965 Gibson SG Standard Electric Guitar", bid: "$2,850", time: "2 Days left", image: "🎸" },
  { title: "Original Apple Macintosh 128K (1984)", bid: "$2,850", time: "2 Days left", image: "💻" },
  { title: "Rolex Submariner 16610", bid: "$2,850", time: "2 Days left", image: "⌚" },
  { title: "First Edition 'The Great Gatsby' by F. Scott Fitzgerald", bid: "$2,850", time: "2 Days left", image: "📘" },
  { title: "Mid-Century Modern Eames Lounge Chair", bid: "$2,850", time: "2 Days left", image: "🪑" },
  { title: "Banksy Original Screen Print", bid: "$2,850", time: "2 Days left", image: "🖼️" }
];

const Table = () => {
  return (
    <div className="auction-table">
      <table>
        <thead>
          <tr>
            <th>Items</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td className="item-info">
                <span className="item-image">{item.image}</span>
                <span className="item-title">{item.title}</span>
              </td>
              <td>{item.bid}</td>
              <td>{item.time}</td>
              <td>
                <button className="heart-button">❤️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
 