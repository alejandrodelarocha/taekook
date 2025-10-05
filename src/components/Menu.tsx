import React, { useEffect, useState } from "react";

type Price = {
  size: string;
  price: string;
};

type MenuItem = {
  name: string;
  category: string;
  prices: Price[];
};

const groupByCategory = (items: MenuItem[]) => {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);
};

const Menu: React.FC = () => {
  const [menu, setMenu] = useState([]);
  const [grouped, setGrouped] = useState({});
  useEffect(() => {
    fetch('https://taekookboba.com/adm/menu.json')
      .then(res => res.json())
      .then(data => {
        setMenu(data);
        const grouped = groupByCategory(data);
        setGrouped(grouped);
      });
  }, []);

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Nuestro Menú</h1>

      {/* Loop over categories */}
      {Object.entries(grouped).map(([category, items]) => (
        <section id={category.toLowerCase().replace(/\s+/g, "-")} key={category}>
          <h2 style={styles.categoryTitle}>{category}</h2>

          <div style={styles.grid}>
            {items.map((item, idx) => (
              <div key={idx} style={styles.card}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                </div>

                <ul style={styles.priceList}>
                  {item.prices.map((p, i) => (
                    <li key={i} style={styles.priceRow}>
                      <span style={styles.size}>{p.size}</span>
                      <span style={styles.price}>{p.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    color: "#2e1f3f",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: 800,
    color: "#2e1f3f",
    marginBottom: "40px",
  },
  categoryTitle: {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#2e1f3f",
    backgroundColor: "#c8bed7",
    padding: "10px 20px",
    borderRadius: "10px",
    marginBottom: "20px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "60px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
  },
  cardHeader: {
    borderBottom: "2px solid #c8bed7",
    paddingBottom: "8px",
    marginBottom: "12px",
  },
  itemName: {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#2e1f3f",
  },
  priceList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    fontWeight: 600,
    color: "#2e1f3f",
  },
  size: {
    color: "#3c2a56",
  },
  price: {
    color: "#2e1f3f",
  },
};

export default Menu;
