import React from 'react';
import { items } from './data';
import Link from 'next/link';
import './navbar.css';

export default function navbar() {
  return (
    <div className='navbar'>
      {items.map(({ url, label }) => (
        <Link href={url} key={url}>{label}</Link>
      ))}
    </div>
  )
}
