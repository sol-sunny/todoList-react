import React from "react";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={`${styles.filter} ${filter === value && styles.selected} `}  //스타일 filter을 쓰는데 만약 현재 filter와 value값이 같다면 selected를 사용한다.
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
