import Link from '@mui/material/Link';
import * as NextLink from 'next/link';

export default function About() {
 return (
   <div>
     <div>About Page</div>
     <Link component={NextLink} href="/">To Home page</Link>
   </div>
 );
}