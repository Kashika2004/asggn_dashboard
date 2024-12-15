// import React from 'react';
// import styles from './Header.module.css';

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>LOGO</div>
//       <nav className={styles.nav}>
//         <a href="/dashboard">Dashboard</a>
//         <a href="/assessments">Assessments</a>
//         <a href="/profile">Profile</a>
//       </nav>
//       <div className={styles.avatar}>
//         <img src="/path-to-avatar.jpg" alt="User Avatar" width="40" height="40" />
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, {useState} from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Replace the div with the Next.js Image component for the logo */}
        <Image
          src="/logo.png" // Update this path with the correct logo image path
          alt="Logo"
          width={80} // Adjust the width as needed
          height={45} // Adjust the height as needed
          
        />
      </div>
      <nav className={styles.nav}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/assessments">Assessments</Link>
        <Link href="/profile">Profile</Link>
      </nav>
      <div className={styles.avatar}>
        <div onClick={toggleDropdown} className={styles.avatarContainer}>
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={40}
            height={40}
            className={styles.avatarImage}
          />
        </div>
        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className={styles.dropdown}>
            <a href="/settings" className={styles.dropdownItem}>
              Settings
            </a>
            <a href="/logout" className={styles.dropdownItem}>
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;