import styles from './page.module.css'
import Switch from "@mui/material/Switch";
import CustomSlider from './CustomSlider';

import Link from '@mui/material/Link';
import * as NextLink from 'next/link';

import Button from '@mui/material/Button';

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {

 return (
   <div className={styles.container}>
     <div>
       <span>With default Theme:</span>
     </div>
     <Switch {...label} defaultChecked />
     <Switch {...label} />
     <Switch {...label} disabled defaultChecked />
     <CustomSlider warning={true} />
     <CustomSlider warning={false} />
     <Link component={NextLink} href="/about">To About page</Link>
     <Link href="http://www.google.com">To google</Link>
   </div>
 );
}