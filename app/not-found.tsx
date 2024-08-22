import { Metadata } from 'next';
import Top from './components/top/top';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'ATTH Studio',
  description: 'Portfolio Annie Tran ATTH Studio',
};

const monumentExtended = localFont({
  src: './MonumentExtended-Regular.otf',
});

export default function NotFound() {
  return (
    <>
      <Top />
      <div className="notFound">
        <h2 className={`${monumentExtended.className}`}>404</h2>
      </div>
    </>
  );
}
