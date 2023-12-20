import React from 'react';
import { MyDropzoneBasic } from '../FileUpload';

const SideNav = () => {
    return (
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li1}><a href="http://localhost:3000" style={styles.a}>トップ</a></li>
          <li style={styles.li2}><a href="http://localhost:3000" style={styles.a}>映画出演</a></li>
          <li style={styles.li3}><a href="http://localhost:3000" style={styles.a}>ドラマ出演</a></li>
          <li style={styles.li4}><a href="http://localhost:3000" style={styles.a}>舞台出演</a></li>
          <li style={styles.li5}><a href="http://localhost:3000" style={styles.a}>写真集</a></li>
          <li style={styles.li6}><a href="http://localhost:3000" style={styles.a}>出版本</a></li>
          <li style={styles.li7}><a href="http://localhost:3000" style={styles.a}>管理者</a></li>
          <MyDropzoneBasic/>
        </ul>
      </nav>
    );
  };
  
  // ここにCSSスタイルを定義します
  const styles = {
    nav: {
      position: 'fixed' as 'fixed', // ナビゲーションを画面に固定
      top: 0,
      left: 0,
      width: '345px', // または任意の幅
      height: '100%', // 画面全体の高さ
      backgroundColor: '#F0F0FF', // 任意の背景色
    },
    ul: {
    },
    
    libefore: {
        content: '"•"',
        fontSize: '20px',        
    },
    
    li1: {
      position: 'relative' as const, // 任意のパディング
      color: '#FFCCCC',
      padding: '10px',
    },

    li2: {
        position: 'relative' as const,
        color: '#00FF00',
        padding: '10px',
    },

    li3: {
        position: 'relative' as const,
        color: '#33FFFF',
        padding: '10px',
    },

    li4: {
        position: 'relative' as const,
        color: '#0099FF',
        padding: '10px',
    },

    li5: {
        position: 'relative' as const,
        color: '#0000FF',
        padding: '10px',
    },

    li6: {
        position: 'relative' as const,
        color: '#333399',
        padding: '10px',
    },

    li7: {
        position: 'relative' as const,
        color: '#CC00CC',
        padding: '10px',
    },

    a: {
    },
  };
  
  export default SideNav;